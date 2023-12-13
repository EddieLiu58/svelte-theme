<script lang="ts">
	import '@splidejs/svelte-splide/css/themes/splide-default.min.css';
	import axios from 'axios';
	import { onMount } from 'svelte';
	import { PUBLIC_PROD_BASE_URL } from '$env/static/public';
	import { base } from '$app/paths';
	import CustomSplide from '../components/CustomSplide.svelte';
	import { browser } from '$app/environment';
	const baseUrl = PUBLIC_PROD_BASE_URL;
	const topList = [
		{ url: '/', image: `${base}/images/topSlide1.webp` },
		{ url: '/', image: `${base}/images/topSlide2.webp` },
		{ url: '/', image: `${base}/images/topSlide3.webp` },
		{ url: '/', image: `${base}/images/topSlide4.webp` },
		{ url: '/', image: `${base}/images/topSlide5.webp` }
	];
	let categoryList: Array<string> = [];
	// let schoolList: Array<string> = [];
	// let youthlList: Array<string> = [];
	let fantasylList: Array<string> = [];
	// let scienceList: Array<string> = [];
	let xianXiaList: Array<string> = [];
	let suspenseList: Array<string> = [];
	let martialArtsList: Array<string> = [];

	async function fetchList() {
		let category = await axios.get(`${baseUrl}/novels/category/list`);
		categoryList = [...categoryList, ...category.data];
		// 仙俠
		let xianXia = await axios.get(`${baseUrl}/novels/category?page=1&size=12&cat=仙俠`);
		xianXiaList = [...xianXiaList, ...xianXia.data];
		// 玄幻
		let fantasy = await axios.get(`${baseUrl}/novels/category?page=1&size=12&cat=玄幻`);
		fantasylList = [...fantasylList, ...fantasy.data];
		// 懸疑
		let suspense = await axios.get(`${baseUrl}/novels/category?page=1&size=12&cat=懸疑`);
		suspenseList = [...suspenseList, ...suspense.data];
		// 武俠
		let martialArts = await axios.get(`${baseUrl}/novels/category?page=1&size=12&cat=武俠`);
		martialArtsList = [...martialArtsList, ...martialArts.data];
		// 科幻
		// let science = await axios.get(`${baseUrl}/novels/category?page=1&size=12&cat=科幻`);
		// scienceList = [...scienceList, ...science.data];
		// 校園
		// let school = await axios.get(`${baseUrl}/novels/category?page=1&size=12&cat=校園`);
		// schoolList = [...schoolList, ...school.data];
		// 青春
		// let youth = await axios.get(`${baseUrl}/novels/category?page=1&size=12&cat=青春`);
		// youthlList = [...youthlList, ...youth.data];
	}
	onMount(() => {
		fetchList();
	});
</script>

<h1 class="hidden text-3xl font-bold text-red-300">inovels - 免費、無廣告輕鬆看小說</h1>
<div class="mx-auto grid max-w-full grid-cols-1 gap-y-8 px-6 md:max-w-6xl">
	<div class="mt-6 grid grid-cols-4 gap-6 md:grid-cols-6 xl:grid-cols-12">
		{#each categoryList as category}
			<a
			data-sveltekit-reload
				href="{base}/list/{category}"
				class="w-full rounded-[180px] border-2 border-solid border-gray-200 bg-slate-100 p-2 text-center text-gray-700 transition-all hover:bg-slate-400 hover:text-white"
				>{category}</a
			>
		{/each}
	</div>
	<div class="session1 relative">
		<CustomSplide label={'仙俠'} list={xianXiaList} />
	</div>
	<div class="flex flex-col items-center md:flex-row md:justify-between gap-4">
		<script async src="//cdn.tapioni.com/asg-iframe.js"></script>
		<iframe
			title="ads-1"
			class="na"
			frameborder="0"
			scrolling="no"
			width="300"
			height="250"
			sandbox="allow-scripts allow-popups allow-forms allow-same-origin"
			loading="lazy"
			src="//a.labadena.com/api/spots/458573?p=1&s1=%subid1%&kw="
		></iframe>
		<iframe
			title="ads-2"
			class="na"
			frameborder="0"
			scrolling="no"
			width="300"
			height="250"
			sandbox="allow-scripts allow-popups allow-forms allow-same-origin"
			loading="lazy"
			src="//a.labadena.com/api/spots/458577?p=1&s1=%subid1%&kw="
		></iframe>
		<iframe 
		title="ads-3" 
		class="na" 
		frameborder="0" 
		scrolling="no" 
		width="300" 
		height="250" 
		sandbox="allow-scripts allow-popups allow-forms allow-same-origin" 
		loading="lazy" 
		src="//a.labadena.com/api/spots/459081?p=1&s1=%subid1%&kw="
		></iframe>
	</div>
	<div class="session2 relative">
		<CustomSplide label={'玄幻'} list={fantasylList} />
	</div>
	<div class="session3 relative">
		<CustomSplide label={'懸疑'} list={suspenseList} />
	</div>
	<div class="session4 relative">
		<CustomSplide label={'武俠'} list={martialArtsList} />
	</div>
	<div class="flex flex-col items-center md:flex-row md:justify-between gap-4">
		<script async src="//cdn.tapioni.com/asg-iframe.js"></script>
		<iframe title="ads-4" class="na" frameborder="0" scrolling="no" width="100%" height="100%" sandbox="allow-scripts allow-popups allow-forms allow-same-origin" loading="lazy" src="//a.labadena.com/api/spots/459298?p=1&s1=%subid1%&kw="></iframe>
		<iframe title="ads-5" class="na" frameborder="0" scrolling="no" width="300" height="250" sandbox="allow-scripts allow-popups allow-forms allow-same-origin" loading="lazy" src="//a.labadena.com/api/spots/459297?p=1&s1=%subid1%&kw="></iframe>
	</div>
	<div class="session5 flex justify-center">
		<a href="https://trafficadbar.com/WilliamWang" target="_top"
			><img alt="trafficadbar" src="https://trafficadbar.com/assets/banners/banner468x60.gif" /></a
		>
	</div>
</div>
<div class="ad-exoclick">
	<!-- Ads Managed by AdSpyglass.com -->
<script type="text/javascript" src="//cdn.tapioni.com/ip-push.js" data-spot="459079" data-subid1="%subid1%"></script>
</div>
<style lang="postcss">
	/* :global(html) {
		background-color: theme(colors.gray.100);
	} */
</style>
