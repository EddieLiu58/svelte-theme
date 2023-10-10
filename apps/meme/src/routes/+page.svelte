<script lang="ts">
	import { Splide, SplideSlide } from '@splidejs/svelte-splide';
	import '@splidejs/splide/dist/css/themes/splide-sea-green.min.css';
	import axios from 'axios';
	import { onMount } from 'svelte';
	import { PUBLIC_PROD_BASE_URL } from '$env/static/public';
	import { base } from '$app/paths';

	const baseUrl = PUBLIC_PROD_BASE_URL;

	const gifList = [
		{ url: '/', image: `${base}/demo/angry-cat.gif`, type: 'TYPE1' },
		{ url: '/', image: `${base}/demo/check-any.gif`, type: 'TYPE2' },
		{ url: '/', image: `${base}/demo/chefs-kiss-french-chef.gif`, type: 'TYPE3' },
		{ url: '/', image: `${base}/demo/gobble-happythanksgiving.gif`, type: 'TYPE4' },
		{ url: '/', image: `${base}/demo/leif-erickson.gif`, type: 'TYPE5' },
		{ url: '/', image: `${base}/demo/oh-yeah-dance.gif`, type: 'TYPE5' },
		{ url: '/', image: `${base}/demo/thanksgivinglove.gif`, type: 'TYPE5' },
		{ url: '/', image: `${base}/demo/whatever-bank-stare.gif`, type: 'TYPE5' },
		{ url: '/', image: `${base}/demo/leif-erickson.gif`, type: 'TYPE5' },
		{ url: '/', image: `${base}/demo/oh-yeah-dance.gif`, type: 'TYPE5' },
		{ url: '/', image: `${base}/demo/gobble-happythanksgiving.gif`, type: 'TYPE4' }
	];
	let categoryList: Array<string> = [];
	let schoolList: Array<string> = [];
	let youthlList: Array<string> = [];
	let fantasylList: Array<string> = [];
	let scienceList: Array<string> = [];

	async function fetchList() {
		let category = await axios.get(`${baseUrl}/novels/category/list`);
		categoryList = [...categoryList, ...category.data];
		// 玄幻
		let fantasy = await axios.get(`${baseUrl}/novels/category?page=1&size=12&cat=玄幻`);
		fantasylList = [...fantasylList, ...fantasy.data];
		// 科幻
		let science = await axios.get(`${baseUrl}/novels/category?page=1&size=12&cat=科幻`);
		scienceList = [...scienceList, ...science.data];
		// 校園
		let school = await axios.get(`${baseUrl}/novels/category?page=1&size=12&cat=校園`);
		schoolList = [...schoolList, ...school.data];
		// 青春
		let youth = await axios.get(`${baseUrl}/novels/category?page=1&size=12&cat=青春`);
		youthlList = [...youthlList, ...youth.data];
	}
	onMount(() => {
		// fetchList();
	});
</script>

<h1 class="hidden text-3xl font-bold text-red-300">MEME-首頁</h1>
<div class="px-6 pt-6">
	<h2 class="text-xl font-bold">熱門搜尋</h2>
	<Splide
		options={{
			// type: 'loop',
			// autoplay: true,
			gap: '1.5rem',
			perPage: 5,
			perMove: 1,
			pagination: false,
			classes: {
				arrows: 'splide__arrows',
				arrow:
					'absolute bottom-0 top-0 z-10 w-8 flex cursor-pointer items-center justify-center  opacity-50',
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
		{#each gifList as hot}
			<SplideSlide>
				<a href={hot.url} class="flex flex-col gap-2">
					<div
						class="h-24 w-full rounded-md bg-cover bg-center bg-no-repeat md:max-h-[300px]"
						style="background-image: url('{hot.image}');"
					>
						<!-- <img src={item.image} class="w-full" alt="" /> -->
					</div>
					<span class="block font-bold">{hot.type}</span>
				</a>
			</SplideSlide>
		{/each}
	</Splide>
</div>
<div class="mx-auto grid grid-cols-1 gap-y-8 px-6">
	<div class="session1 relative">
		<h2 class="mb-3 text-xl font-bold">精選 GIF</h2>
		<div class="columns-2 gap-4 gap-x-4 md:columns-3 xl:columns-4">
			{#each gifList as item}
				<div class=" mb-8 w-full break-inside-avoid">
					<img src={item.image} class="w-full" alt="" />
				</div>
			{/each}
		</div>
	</div>
</div>

<style lang="postcss">
	:global(html) {
		background-color: theme(colors.gray.100);
	}
</style>
