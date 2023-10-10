<script lang="ts">
	import { Splide, SplideSlide } from '@splidejs/svelte-splide';
	import '@splidejs/splide/dist/css/themes/splide-sea-green.min.css';
	import axios from 'axios';
	import { onMount } from 'svelte';
	import { PUBLIC_PROD_BASE_URL } from '$env/static/public';
	import { base } from '$app/paths';

	const baseUrl = PUBLIC_PROD_BASE_URL;

	const topList = [
		{ url: '/', image: `${base}/images/topSlide1.webp`, type: 'TYPE1' },
		{ url: '/', image: `${base}/images/topSlide2.webp`, type: 'TYPE2' },
		{ url: '/', image: `${base}/images/topSlide3.webp`, type: 'TYPE3' },
		{ url: '/', image: `${base}/images/topSlide4.webp`, type: 'TYPE4' },
		{ url: '/', image: `${base}/images/topSlide5.webp`, type: 'TYPE5' }
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
		fetchList();
	});
</script>

<h1 class="hidden text-3xl font-bold text-red-300">MEME-首頁</h1>
<div class="mb-6 w-screen px-6">
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
		{#each topList as item}
			<SplideSlide>
				<a href={item.url} class="flex flex-col gap-2">
					<div class="w-full overflow-hidden rounded-md md:max-h-[300px]">
						<img src={item.image} class="w-full" alt="" />
						<span class="mt-2 block font-bold">{item.type}</span>
					</div>
				</a>
			</SplideSlide>
		{/each}
	</Splide>
</div>
<div class="mx-auto grid grid-cols-1 gap-y-8 px-6">
	<div class="session1 relative">
		<h2 class="mb-3 text-xl font-bold">精選 GIF</h2>
	</div>
</div>

<style lang="postcss">
	:global(html) {
		/* background-color: theme(colors.gray.100); */
	}
</style>
