<script lang="ts">
	// @ts-nocheck
	import { MetaTags } from 'svelte-meta-tags';
	import { page } from '$app/stores'; // Import the page store to access route-specific data.
	import { slide } from 'svelte/transition';
	import { fade } from 'svelte/transition';
	import { cubicOut } from 'svelte/easing';
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
		titleTemplate: '%s - 免費、無廣告輕鬆看小說', // Default title template.
		description:
			'輕便閱小說對於通勤，打發時間的你，是得意的最佳夥伴，輕鬆掌握各類型小說書籍，只讓你沉浸在文字的虛擬世界裡。', // Default description.
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
	<meta name="6a97888e-site-verification" content="5360d4c26732ab3b66c46360b4716fb3" />
	<meta name="43f79bc9f27ed25da39c2af9d9cd20de06d245ce" content="43f79bc9f27ed25da39c2af9d9cd20de06d245ce" />
	<meta name="clckd" content="936c25584a33270475a24d8e3127710e" />
	<meta name="clickaine-site-verification" content="e4388b2c63cef27d7ae3a5838341942fc826dc12f366cec1e3cddbba2e0d343470bbd860f88a55504fcc08044e5fafa76e77b0f429ee819ce6077fd055a21557">
	<script id="aclib" type="text/javascript" src="//acscdn.com/script/aclib.js"></script>
	<script
		async
		src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1755676024054335"
		crossorigin="anonymous"
	></script>
	<script async src="https://www.googletagmanager.com/gtag/js?id=G-0CN6K93NK2"></script>
	<script>
		window.dataLayer = window.dataLayer || [];
		function gtag() {
			dataLayer.push(arguments);
		}
		gtag('js', new Date());

		gtag('config', 'G-0CN6K93NK2');
	</script>
</svelte:head>
<div id="app">
	<Headroom duration="350ms" offset={300} tolerance={5}>
		<header class="z-50 w-full bg-[#292929] transition duration-300">
			<div class="mx-auto flex h-auto w-full items-center justify-between px-6 md:max-w-6xl">
				<div>
					<a href="{base}/"
						><img src="{base}/images/logo.webp" alt="logo" width="120" height="120" /></a
					>
				</div>
				<div class="grid grid-cols-1 gap-2">
					<div class="text-center text-xl font-bold text-white">
						<a href="{base}/list">搜尋</a>
					</div>
					<!-- <div class="text-center text-xl font-bold text-[#fb7d67]">
					<button on:click={OpenMenu}>目錄</button>
				</div> -->
				</div>
			</div>
		</header>
	</Headroom>
	<div class="mx-auto mt-[120px]"><slot /></div>
	<footer class="mt-12 flex flex-col items-center bg-[#292929] p-4">
		<div class="item-center flex justify-center gap-4 mb-4">
			<a href="/liability" class="text-white">使用條款及免責聲明</a>
			<a href="/privacy" class="text-white">隱私權條款</a>
		</div>
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
	<div>
		{#if MenutranslateX === true}
			<div class=" opacity-1 fixed left-0 top-0 z-40 flex h-full w-full justify-end">
				<div
					class=" right-0 top-0 z-20 h-screen w-fit"
					transition:slide={{ delay: 150, duration: 250, easing: cubicOut, axis: 'x' }}
				>
					<ul class="float-right h-screen w-[300px] bg-white p-4">
						<li><a href="/">個人設定</a></li>
						<li><a href="/">帳務中心</a></li>
						<li><a href="/">我的小說</a></li>
						<li><a href="/">登入</a></li>
					</ul>
				</div>
				<!-- svelte-ignore a11y-click-events-have-key-events -->
				<!-- svelte-ignore a11y-interactive-supports-focus -->
				<div
					role="button"
					class=" absolute left-0 top-0 -z-10 h-full w-full bg-[#4a5568cc] opacity-30"
					transition:fade={{ delay: 150, duration: 150 }}
					on:click={OpenMenu}
				/>
			</div>
		{/if}
	</div>
</div>

<style lang="postcss">
	:global(html) {
		font-family:
			'Noto Sans TC',
			system-ui,
			-apple-system,
			BlinkMacSystemFont,
			'Segoe UI',
			Roboto,
			Oxygen,
			Ubuntu,
			Cantarell,
			'Open Sans',
			'Helvetica Neue',
			sans-serif;
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
