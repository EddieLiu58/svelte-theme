<script lang="ts">
	// @ts-nocheck
	import Headroom from 'svelte-headroom';
	import '../app.css';
	import '@fontsource/noto-sans-tc/100.css';
	import '@fontsource/noto-sans-tc/300.css';
	import '@fontsource/noto-sans-tc/400.css';
	import '@fontsource/noto-sans-tc/500.css';
	import '@fontsource/noto-sans-tc/700.css';
	import '@fontsource/noto-sans-tc/900.css';
	let y = 0;
	let MenutranslateX = -100;
</script>

<svelte:window bind:scrollY={y} />

<Headroom duration="350ms" offset={300} tolerance={5}>
	<header class="flex h-auto items-center justify-between bg-white px-4 transition duration-300">
		<div><img src="./images/logo.png" alt="logo" width="105" height="105" /></div>
		<div class="grid grid-cols-3 gap-2">
			<div class="text-center text-xl font-bold text-[#fb7d67]">深色模式</div>
			<div class="text-center text-xl font-bold text-[#fb7d67]">搜尋</div>
			<div class="text-center text-xl font-bold text-[#fb7d67]">目錄</div>
		</div>
	</header>
</Headroom>
<body class="mt-[64px]">
	<slot />
</body>
<footer class="flex flex-col bg-slate-300 p-4">
	<div class="mb-8 mt-8 grid grid-flow-col">
		<a target="_blank" rel="noreferrer" href="/" class="text-center"
			><span class="css-1clmpdf">成為創作者</span></a
		><a target="_self" rel="noreferrer" href="/tos" class="text-center"
			><span class="css-1clmpdf">服務條款</span></a
		><a target="_self" rel="noreferrer" href="/privacypolicy" class="text-center"
			><span class="css-1clmpdf">隱私政策</span></a
		><a target="_blank" rel="noreferrer" href="/" class="text-center"
			><span class="css-1clmpdf">常見問題</span></a
		>
	</div>
	<div class="item-center flex flex-col justify-center">
		<div class="text-center">
			<span>躺著賺有限公司</span><span>© All Rights Reserved</span>
		</div>
		<div class="text-center">
			<span>統編：</span><span>地址：</span>
		</div>
	</div>
</footer>
<div
	class="fixed right-0 top-0 h-screen w-screen transition duration-300"
	style:transform="translateX(-100%)"
>
	<div class="absolute left-0 top-0 -z-10 h-full w-full bg-gray-900 opacity-10" />
	<ul class="float-right h-screen w-[300px] bg-orange-300 p-4">
		<li>1</li>
		<li>2</li>
		<li>3</li>
	</ul>
</div>

<style lang="postcss">
	:global(html) {
		font-family: 'Noto Sans TC', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
			Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
	}
</style>
