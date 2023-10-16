import type { MetaTagsProps } from 'svelte-meta-tags'; // Import type for meta tags properties.
export const load = async ({ url }) => {
  // Define meta tags for this specific child page.
  const metaTags: MetaTagsProps = Object.freeze({
    title: 'inovels list', // Page-specific title.
    description: '輕便閱小說對於通勤，打發時間的你，是得意的最佳夥伴，輕鬆掌握各類型小說書籍，只讓你沉浸在文字的虛擬世界裡。', // This description will override the default.
    openGraph: {
      // OpenGraph meta tags specific to this page.
      type: 'website',
      url: new URL(url.pathname, url.origin).href,
      title: 'inovels list - 自由創作者股份有限公司',
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
    metaTagsChild: metaTags // Return meta tags so they can be consumed by layout.svelte.
  };
};