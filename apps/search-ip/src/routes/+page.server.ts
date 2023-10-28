import type { MetaTagsProps } from 'svelte-meta-tags'; // Import type for meta tags properties.
/** @type {import('@sveltejs/kit').PageLoad} */
export function load ({ url,request }) {
  const requestIp = request.headers.get('x-forwarded-for') || '';
  const requestIpv6 = request.headers.get('x-real-ip') || '';
  // Define meta tags for this specific child page.
  const metaTags: MetaTagsProps = Object.freeze({
    title: 'ip搜尋', // Page-specific title.
    description: '', // This description will override the default.
    openGraph: {
      // OpenGraph meta tags specific to this page.
      type: 'website',
      url: new URL(url.pathname, url.origin).href,
      title: 'ip搜尋 - 自由創作者股份有限公司',
      description: 'DNM提供免費 IP 搜尋工具，能找到您的 IP 和其他相關資訊。',
      images: [ {
        url: `${url}images/ip-logo.svg`,
        width: 800,
        height: 600,
        alt: 'ip搜尋 logo alt'
      },]
    }
  });

  return {
    metaTagsChild: metaTags, // Return meta tags so they can be consumed by layout.svelte.
    requestIp,
    requestIpv6
  };
};
