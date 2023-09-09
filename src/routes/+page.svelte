<script lang="ts">
	import { Splide, SplideSlide } from '@splidejs/svelte-splide';
	import '@splidejs/splide/dist/css/themes/splide-default.min.css';
	import axios from 'axios';
	import { onMount } from 'svelte';
	import { PUBLIC_PROD_BASE_URL } from '$env/static/public';

	const baseUrl = PUBLIC_PROD_BASE_URL;

	const topList = [
		{ url: '/', image: `%sveltekit.assets%/images/topSlide1.webp` },
		{ url: '/', image: `%sveltekit.assets%/images/topSlide2.webp` },
		{ url: '/', image: `%sveltekit.assets%/images/topSlide3.webp` },
		{ url: '/', image: `%sveltekit.assets%/images/topSlide4.webp` },
		{ url: '/', image: `%sveltekit.assets%/images/topSlide5.webp` }
	];
	let categoryList: Array<string> = [];
	let schoolList: Array<string> = [];
	let youthlList: Array<string> = [];
	let fantasylList: Array<string> = [];
	let scienceList: Array<string> = [];

	async function fetchList() {
		let category = await axios.get('/api/novels/category/list');
		categoryList = [...categoryList, ...category.data];
		console.log(categoryList);
		// 玄幻
		let fantasy = await axios.get('/api/novels/category?page=1&size=12&cat=玄幻');
		fantasylList = [...fantasylList, ...fantasy.data];
		// 科幻
		let science = await axios.get('/api/novels/category?page=1&size=12&cat=科幻');
		scienceList = [...scienceList, ...science.data];
		// 校園
		let school = await axios.get('/api/novels/category?page=1&size=12&cat=校園');
		schoolList = [...schoolList, ...school.data];
		// 青春
		let youth = await axios.get('/api/novels/category?page=1&size=12&cat=青春');
		youthlList = [...youthlList, ...youth.data];
	}
	onMount(() => {
		fetchList();
	});
</script>

<h1 class="hidden text-3xl font-bold text-red-300">大家一起躺著賺-首頁</h1>
<div class="mb-12 w-screen">
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
</div>
<div class="mx-auto grid max-w-full grid-cols-1 gap-y-8 px-4 md:max-w-6xl">
	<div class="grid grid-cols-4 gap-6 md:grid-cols-6 xl:grid-cols-12">
		{#each categoryList as category}
			<a
				href="/list/{category}"
				class="w-full rounded-[180px] border-2 border-solid border-gray-200 bg-slate-100 p-2 text-center text-gray-700 transition-all hover:bg-slate-400 hover:text-white"
				>{category}</a
			>
		{/each}
	</div>
	<div class="session1 relative">
		<h2 class="mb-3 text-xl font-bold">玄幻</h2>
		<Splide
			options={{
				omitEnd: true,
				focus: 0,
				gap: '1rem',
				perPage: 6,
				pagination: false,
				classes: {
					arrows: 'splide__arrows',
					arrow:
						'absolute bottom-0 top-0 z-10 w-12 flex cursor-pointer items-center justify-center opacity-50',
					prev: 'splide__arrow--prev bg-gradient-to-r from-gray-600 to-gray-0 left-0',
					next: 'splide__arrow--next bg-gradient-to-l from-gray-600 to-gray-0 right-0',
					pagination: 'splide__pagination bottom-0',
					page: 'splide__pagination__page bg-gray-500'
				},
				breakpoints: {
					1200: {
						perPage: 4
					},
					1024: {
						perPage: 3
					},
					768: {
						perPage: 2
					}
				}
			}}
			aria-label="My Favorite Images"
		>
			{#each fantasylList as item}
				<SplideSlide>
					<a href="/{item.id}" class="gap-2">
						<div class="max-h-[240px] w-full overflow-hidden rounded-md">
							<img src="{baseUrl}/images/{item.id}.jpg" class="w-full" alt="" />
						</div>
						<div class="flex flex-col p-2">
							<h3 class="font-bold">{item.name}</h3>
							<span>作者: {item.author}</span>
							<p class="line-clamp-2 text-ellipsis text-xs text-gray-600">{item.introduction}</p>
						</div>
					</a>
				</SplideSlide>
			{/each}
		</Splide>
	</div>
	<div class="session2 relative">
		<h2 class="mb-3 text-xl font-bold">科幻</h2>
		<div class="grid grid-cols-1 gap-6 md:grid-cols-3">
			{#each scienceList as item}
				<a
					href="/{item.id}"
					class="w-full gap-2 rounded-3xl border-2 border-solid border-gray-200 bg-slate-100 p-2 text-center text-gray-700 transition-all hover:bg-slate-400 hover:text-white"
				>
					<div class="max-h-[240px] w-full overflow-hidden rounded-md">
						<img src="{baseUrl}/images/{item.id}.jpg" class="w-full" alt="" />
					</div>
					<div class="flex flex-col p-2">
						<h3 class="font-bold">{item.name}</h3>
						<span>作者: {item.author}</span>
						<p class="line-clamp-2 text-ellipsis text-xs">
							{item.introduction}
						</p>
					</div>
				</a>
			{/each}
		</div>
	</div>
	<div class="session3 relative">
		<h2 class="mb-3 text-xl font-bold">校園</h2>
		<div class="grid grid-cols-1 gap-6 md:grid-cols-3">
			{#each schoolList as item}
				<a
					href="/{item.id}"
					class="gap-2 rounded-3xl border-2 border-solid border-gray-200 bg-slate-100 p-2 text-center text-gray-700 transition-all hover:bg-slate-400 hover:text-white"
				>
					<div class="max-h-[240px] w-full overflow-hidden rounded-md">
						<img src="{baseUrl}/images/{item.id}.jpg" class="w-full" alt="" />
					</div>
					<div class="flex flex-col p-2">
						<h3 class="font-bold">{item.name}</h3>
						<span>作者: {item.author}</span>
						<p class="line-clamp-2 text-ellipsis text-xs">
							{item.introduction}
						</p>
					</div>
				</a>
			{/each}
		</div>
	</div>
	<div class="session4 relative">
		<h2 class="mb-3 text-xl font-bold">青春</h2>
		<div class="grid grid-cols-1 gap-6 md:grid-cols-3">
			{#each youthlList as item}
				<a
					href="/{item.id}"
					class="gap-2 rounded-3xl border-2 border-solid border-gray-200 bg-slate-100 p-2 text-center text-gray-700 transition-all hover:bg-slate-400 hover:text-white"
				>
					<div class="max-h-[240px] w-full overflow-hidden rounded-md">
						<img src="{baseUrl}/images/{item.id}.jpg" class="w-full" alt="" />
					</div>
					<div class="flex flex-col p-2">
						<h3 class="font-bold">{item.name}</h3>
						<span>作者: {item.author}</span>
						<p class="line-clamp-2 text-ellipsis text-xs">
							{item.introduction}
						</p>
					</div>
				</a>
			{/each}
		</div>
	</div>
</div>

<style lang="postcss">
	:global(html) {
		/* background-color: theme(colors.gray.100); */
	}
</style>
