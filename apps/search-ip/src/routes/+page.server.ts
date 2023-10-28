import type { MetaTagsProps } from 'svelte-meta-tags'; // Import type for meta tags properties.
import { requestIp } from "../hooks.server";
/** @type {import('@sveltejs/kit').PageLoad} */
export function load ({ url,request }) {
  const ip = request.headers.get('x-forwarded-for') || '';
  // Define meta tags for this specific child page.
  const metaTags: MetaTagsProps = Object.freeze({
    title: 'ip搜尋', // Page-specific title.
    description: '', // This description will override the default.
    openGraph: {
      // OpenGraph meta tags specific to this page.
      type: 'website',
      url: new URL(url.pathname, url.origin).href,
      title: 'ip搜尋 - 自由創作者股份有限公司',
      description: '',
      images: [ {
        url: `${url}images/logo.webp`,
        width: 800,
        height: 600,
        alt: 'ip搜尋 logo alt'
      },]
    }
  });

  return {
    metaTagsChild: metaTags, // Return meta tags so they can be consumed by layout.svelte.
    requestIp,
    ip
  };
};
