import { error,redirect } from '@sveltejs/kit';
import { PUBLIC_PROD_BASE_URL } from '$env/static/public';
import type { MetaTagsProps } from 'svelte-meta-tags'; // Import type for meta tags properties.
import axios from 'axios';
export const ssr = false;
 /** @type {import('./$types').PageServerLoad} */
export const load: PageLoad = async ({ url,params }) => {
  let item: Array<string> = [];
  let chaptersList: Array<string> = [];
  let nid = params.nid;
  let firstId = '';
  try{
    const novels = await axios.get(`${PUBLIC_PROD_BASE_URL}/novels?nid=${params.nid}`);
    item = novels.data[0];
    const chapters = await axios.get(`${PUBLIC_PROD_BASE_URL}/chapters/id/${params.nid}`);
    chaptersList = chapters.data;
      firstId = chapters.data[0].id;
  }catch(err) {
    throw redirect(302, '/');
  } 
    // Define meta tags for this specific child page.
  const metaTags: MetaTagsProps = Object.freeze({
    title: `${item.name}`, // Page-specific title.
    description: `${item.introduction}`, // This description will override the default.
    openGraph: {
      // OpenGraph meta tags specific to this page.
      type: 'website',
      url: new URL(url.pathname, url.origin).href,
      title: `${item.name} - 免費、無廣告輕鬆看小說`,
      description: `${item.introduction}`,
      images: [ {
        url: `${PUBLIC_PROD_BASE_URL}/images/${nid}.jpg`,
        width: 800,
        height: 600,
        alt: `${item.name}封面圖`
      },]
    }
  });
  return {
    item,chaptersList,nid,firstId,metaTagsChild: metaTags 
  };
};