import { error } from '@sveltejs/kit';
import { PUBLIC_PROD_BASE_URL } from '$env/static/public';
import type { MetaTagsProps } from 'svelte-meta-tags'; // Import type for meta tags properties.
import axios from 'axios';
export const ssr = false;
 /** @type {import('./$types').PageServerLoad} */
export const load: PageLoad = async ({ url,params }) => {
  let item: Array<string> = [];
  let novelsItem:  Array<{chapters_ids:Array<string>}> = [];
  let currentIndex = 0;
  let allIndex = 0;
  let nid = params.nid;
  let prevId = '';
  let nextId = '';
  const content = await axios.get(`${PUBLIC_PROD_BASE_URL}/contents/id/${params.chid}`);
  item =  content.data[0];
  const novels = await axios.get(`${PUBLIC_PROD_BASE_URL}/novels?nid=${params.nid}`);
  novelsItem  =  novels.data[0];
  currentIndex = novelsItem.chapters_ids.findIndex((i:string) => i === params.chid )
  allIndex = novelsItem.chapters_ids.length;
  prevId = novelsItem.chapters_ids[currentIndex - 1];
  nextId  = novelsItem.chapters_ids[currentIndex + 1];
  // Define meta tags for this specific child page.
  const metaTags: MetaTagsProps = Object.freeze({
    title: `${novelsItem.name} - ${item.title}`, // Page-specific title.
    description: `${novelsItem.introduction}`, // This description will override the default.
    openGraph: {
      // OpenGraph meta tags specific to this page.
      type: 'website',
      url: new URL(url.pathname, url.origin).href,
      title: `${novelsItem.name} - ${item.title} - 自由創作者股份有限公司`,
      description: `${novelsItem.introduction}`,
      images: [ {
        url: `${PUBLIC_PROD_BASE_URL}/images/${nid}.jpg`,
        width: 800,
        height: 600,
        alt: `${novelsItem.name}封面圖`
      },]
    }
  });
  if (params.nid !== '' && params.chid !== '') {
    return {
      item,novelsItem,currentIndex,allIndex,nid,prevId,nextId,metaTagsChild: metaTags 
    };
  }
};