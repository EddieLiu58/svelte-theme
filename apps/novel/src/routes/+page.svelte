<script lang="ts">
	import '@splidejs/splide/dist/css/themes/splide-default.min.css';
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
<!-- <div class="mb-12 w-screen">
	<Splide
		options={{
			type: 'loop',
			gap: '1rem',
			autoplay: true,
			perPage: 3,
			perMove: 1,
			pagination: false,
			classes: {
				arrows: 'splide__arrows',
				arrow:
					'absolute bottom-0 top-0 z-10 w-12 flex cursor-pointer items-center justify-center  opacity-50',
				prev: 'splide__arrow--prev left-0',
				next: 'splide__arrow--next right-0',
				pagination: 'splide__pagination bottom-0',
				page: 'splide__pagination__page bg-gray-500'
			},
			breakpoints: {
				1280: {
					perPage: 2
				},
				768: {
					perPage: 1
				}
			}
		}}
		aria-label="My Favorite Images"
	>
		{#each topList as item}
			<SplideSlide>
				<a href={item.url} class="flex flex-col gap-2">
					<div class="w-full overflow-hidden rounded-md md:max-h-[300px]">
						<img src={item.image} class="w-full" alt="" />
					</div>
				</a>
			</SplideSlide>
		{/each}
	</Splide>
</div> -->
<div class="mx-auto grid max-w-full grid-cols-1 gap-y-8 px-6 md:max-w-6xl">
	<div class="mt-6 grid grid-cols-4 gap-6 md:grid-cols-6 xl:grid-cols-12">
		{#each categoryList as category}
			<a
				href="{base}/list/{category}"
				class="w-full rounded-[180px] border-2 border-solid border-gray-200 bg-slate-100 p-2 text-center text-gray-700 transition-all hover:bg-slate-400 hover:text-white"
				>{category}</a
			>
		{/each}
	</div>
	<div class="session1 relative">
		<CustomSplide label={'仙俠'} list={xianXiaList} />
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
</div> 
{#if browser}
<script async type="application/javascript" src="https://a.magsrv.com/ad-provider.js"></script> 
<ins class="eas6a97888e" data-zoneid="5134162"></ins> 
<script>(AdProvider = window.AdProvider || []).push({"serve": {}});</script>
{/if}
<style lang="postcss">
	/* :global(html) {
		background-color: theme(colors.gray.100);
	} */
</style>
