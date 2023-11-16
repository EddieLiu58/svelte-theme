import { error } from '@sveltejs/kit';
import { PUBLIC_PROD_BASE_URL } from '$env/static/public';
import type { MetaTagsProps } from 'svelte-meta-tags'; // Import type for meta tags properties.
import axios from 'axios';
export const ssr = false;
export const load = async ({ url,params }) => {
  let item: Array<string> = [];
  let category = params.category;
  const baseUrl = PUBLIC_PROD_BASE_URL;
  const content = await axios.get(`${baseUrl}/novels/category?page=1&size=24&cat=${category}`);
  item = content.data;
  // Define meta tags for this specific child page.
  const metaTags: MetaTagsProps = Object.freeze({
    title: `inovels - ${category}`, // Page-specific title.
    description: '輕便閱小說對於通勤，打發時間的你，是得意的最佳夥伴，輕鬆掌握各類型小說書籍，只讓你沉浸在文字的虛擬世界裡。', // This description will override the default.
    openGraph: {
      // OpenGraph meta tags specific to this page.
      type: 'website',
      url: new URL(url.pathname, url.origin).href,
      title: `inovels - ${category} - 免費、無廣告輕鬆看小說`,
      description: '輕便閱小說對於通勤，打發時間的你，是得意的最佳夥伴，輕鬆掌握各類型小說書籍，只讓你沉浸在文字的虛擬世界裡。',
      images: [ {
        url: `${url}images/logo.webp`,
        width: 800,
        height: 600,
        alt: 'inovels logo alt'
      },]
    }
  });
  return {
    item,category,metaTagsChild: metaTags 
  };
};