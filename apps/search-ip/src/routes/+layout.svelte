<script lang="ts">
	// @ts-nocheck
	import { MetaTags } from 'svelte-meta-tags';
	import { page } from '$app/stores'; // Import the page store to access route-specific data.
	import { base } from '$app/paths';
	import Headroom from 'svelte-headroom';
	import '../app.css';
	import '@fontsource/noto-sans-tc/100.css';
	import '@fontsource/noto-sans-tc/300.css';
	import '@fontsource/noto-sans-tc/400.css';
	import '@fontsource/noto-sans-tc/500.css';
	import '@fontsource/noto-sans-tc/700.css';
	import '@fontsource/noto-sans-tc/900.css';
	// Create a reactive statement to compute meta tags.
	$: metaTags = {
		titleTemplate: '%s - 自由創作者股份有限公司', // Default title template.
		description: '', // Default description.
		canonical: $page.url,
		languageAlternates: { hrefLang: 'zh-hant', href: 'https://www.inovels.click/' },
		...$page.data.metaTagsChild // Override with child page meta tags if they exist.
	};
	let MenutranslateX = false;
	function OpenMenu() {
		MenutranslateX = !MenutranslateX;
	}
</script>

<MetaTags {...metaTags} />
<svelte:window />
<svelte:head>
	<script
		async
		src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1755676024054335"
		crossorigin="anonymous"
	></script>
</svelte:head>
<div id="app">
	<Headroom duration="350ms" offset={300} tolerance={5}>
		<header class="z-50 w-full bg-[#292929] transition duration-300">
			<div class="mx-auto flex h-auto w-full items-center justify-between px-6 md:max-w-6xl">
				<div>
					<a href="{base}/"
						><img src="{base}/images/ip-logo.svg" alt="logo" width="120" height="120" /></a
					>
				</div>
			</div>
		</header>
	</Headroom>
	<div class="mx-auto mt-[120px]"><slot /></div>
	<footer class="mt-12 flex flex-col items-center bg-[#292929] p-4">
		<div class="item-center flex flex-col justify-center">
			<div class="text-center">
				<span class="text-white">自由創作者股份有限公司</span><span class="text-white"
					>© All Rights Reserved</span
				>
			</div>
			<div class="hidden text-center">
				<span class="text-white">統編：</span><span class="text-white">地址：</span>
			</div>
		</div>
	</footer>
</div>

<style lang="postcss">
	:global(html) {
		font-family: 'Noto Sans TC', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
			Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
	}
	:global(div.svelte-1ql6gaa) {
		z-index: 30;
	}
	:global(html) {
		background-color: theme(colors.gray.100);
	}
	:global(.splide__pagination__page.is-active) {
		background-color: rgba(0, 0, 0, 0.8);
	}
</style>
