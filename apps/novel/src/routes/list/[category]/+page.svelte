<script lang="ts">
	import axios from 'axios';
	import InfiniteScroll from 'svelte-infinite-scroll';
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';
	import { PUBLIC_PROD_BASE_URL } from '$env/static/public';
	import { base } from '$app/paths';

	/** @type {import('./$types').PageData} */
	export let data: {
		category: string;
		item: Array<{
			id: string;
			name: string;
			author: string;
			category: string;
			introduction: string;
		}>;
	};

	const baseUrl = PUBLIC_PROD_BASE_URL;
	let list: Array<{ id: string; name: string; author: string; introduction: string }> = [];
	// store the new batch of data here.
	let newBatch: Array<{ id: string; name: string; author: string; introduction: string }> = [];
	let categoryList: Array<string> = [];
	let currentPage = 1;
	let cat = data.category;

	async function fetchCategory() {
		let category = await axios.get(`${baseUrl}/novels/category/list`);
		categoryList = [...categoryList, ...category.data];
	}

	async function fetchList() {
		const content = await axios.get(
			`${baseUrl}/novels/category?page=${currentPage}&size=24&cat=${cat}`
		);
		newBatch = content.data;
		list = [...list, ...newBatch];
	}

	async function updateList(item: string) {
		goto(`${base}/list/${item}`);
		currentPage = 1;
		list = [];
		console.log(list);
		cat = item;
		fetchList();
	}

	onMount(() => {
		list = [...list, ...data.item];
		fetchCategory();
	});

	$: if (list) fetchList;
	$: if (cat) fetchList;
</script>

<div class="mx-auto grid max-w-6xl px-4">
	<h1 class="hidden text-3xl font-bold text-red-300">
		inovels | {data.category} | 免費、無廣告輕鬆看小說
	</h1>
	<div class="mt-8">
		<!-- <input
			type="search"
			placeholder="請輸入關鍵字..."
			class="bg-search mb-4 w-full rounded-lg border-2 border-solid border-gray-200 p-4 outline-none focus:border-red-300"
		/> -->
	</div>
	<div class="mb-8 grid grid-cols-4 gap-6 md:grid-cols-6 xl:grid-cols-12">
		{#each categoryList as category}
			<button
				on:click={() => {
					updateList(category);
				}}
				class="w-full rounded-[180px] border-2 border-solid border-gray-200 bg-slate-100 p-2 text-center text-gray-700 transition-all hover:bg-slate-400 hover:text-white"
				>{category}</button
			>
		{/each}
	</div>
	<div class="mb-4">共 <span class="text-red-300">{list.length}</span> 部作品</div>
	<ul class="grid grid-cols-1 gap-8 md:grid-cols-3">
		{#each list as item}
			<li>
				<a href="{base}/nid/{item.id}" class="flex gap-2">
					<div class="max-h-[240px] w-full max-w-[110px] overflow-hidden rounded-md">
						<img src="{baseUrl}/images/{item.id}.jpg" class="w-full" alt="" />
					</div>
					<div class="flex flex-col p-2">
						<h3 class="mb-2 font-bold">{item.name}</h3>
						<span class="mb-2">作者: {item.author}</span>
						<p class="text-xs text-gray-600">{item.introduction}</p>
					</div>
				</a>
			</li>
		{/each}
		<InfiniteScroll
			hasMore={list.length}
			window={true}
			threshold={100}
			on:loadMore={() => {
				currentPage++;
				fetchList();
			}}
		/>
	</ul>
</div>
