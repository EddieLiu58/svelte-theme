<script lang="ts">
	// @ts-nocheck
	import { slide } from 'svelte/transition';
	import { fade } from 'svelte/transition';
	import { cubicOut } from 'svelte/easing';
	import Headroom from 'svelte-headroom';
	import '../app.css';
	import '@fontsource/noto-sans-tc/100.css';
	import '@fontsource/noto-sans-tc/300.css';
	import '@fontsource/noto-sans-tc/400.css';
	import '@fontsource/noto-sans-tc/500.css';
	import '@fontsource/noto-sans-tc/700.css';
	import '@fontsource/noto-sans-tc/900.css';
	let MenutranslateX = false;
	function OpenMenu() {
		MenutranslateX = !MenutranslateX;
	}
</script>

<svelte:window />
<Headroom duration="350ms" offset={300} tolerance={5}>
	<header
		class="z-50 flex h-auto items-center justify-between bg-white px-4 transition duration-300"
	>
		<div><img src="./images/logo.png" alt="logo" width="120" height="120" /></div>
		<div class="grid grid-cols-3 gap-2">
			<div class="text-center text-xl font-bold text-[#fb7d67]">搜尋</div>
			<div class="text-center text-xl font-bold text-[#fb7d67]">
				<button on:click={OpenMenu}>目錄</button>
			</div>
		</div>
	</header>
</Headroom>
<div class="mt-[120px]"><slot /></div>
<footer class="mt-12 flex flex-col bg-slate-300 p-4">
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

<style lang="postcss">
	:global(html) {
		font-family: 'Noto Sans TC', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
			Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
	}
	:global(div.svelte-1ql6gaa) {
		z-index: 30;
	}
	:global(.splide__pagination__page.is-active) {
		background-color: rgba(0, 0, 0, 0.8);
	}
</style>
