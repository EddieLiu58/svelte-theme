<script lang="ts">
	import axios from 'axios';
	import InfiniteScroll from 'svelte-infinite-scroll';
	import { onMount } from 'svelte';
	import { page } from '$app/stores';
	import { PUBLIC_PROD_BASE_URL } from '$env/static/public';
	import { base } from '$app/paths';

	const baseUrl = PUBLIC_PROD_BASE_URL;
	let list: Array<{ nid: string; id: string; name: string; author: string; introduction: string }> =
		[];
	// store the new batch of data here.
	let newBatch: Array<{ id: string; name: string; author: string; introduction: string }> = [];
	let categoryList: Array<string> = [];
	let currentPage = 1;
	let searchValue: string = '';
	async function fetchCategory() {
		let category = await axios.get(`${baseUrl}/novels/category/list`);
		categoryList = [...categoryList, ...category.data];
	}
	async function fetchList() {
		const content = await axios.get(`${baseUrl}/novels?page=${currentPage}&size=24`);
		newBatch = content.data;
		list = [...list, ...newBatch];
	}
	function resetSearchNovels() {
		list.length = 0;
		searchValue = '';
		fetchList();
	}
	async function searchNovels(e) {
		if (e.charCode === 13 && searchValue !== '') {
			list.length = 0;
			let search = await axios.get(`${baseUrl}/novels/search?keyword=${searchValue}&size=100`);
			list = search.data;
		} else {
			resetSearchNovels();
		}
	}
	resetSearchNovels;
	onMount(() => {
		fetchCategory();
		fetchList();
	});
	// $: list = [...list, ...newBatch];
</script>

<div class="mx-auto grid max-w-6xl px-4">
	<h1 class="hidden text-3xl font-bold text-red-300">inovels list - 免費、無廣告輕鬆看小說</h1>
	<div class="mb-4 mt-8 flex items-center gap-4">
		<input
			type="input"
			placeholder="請輸入關鍵字..."
			class="bg-search w-full rounded-lg border-2 border-solid border-gray-200 p-4 outline-none focus:border-stone-500"
			bind:value={searchValue}
			on:keypress={searchNovels}
		/>
		{#if searchValue === ''}
			<button
				type="button"
				class="w-full max-w-[100px] rounded-3xl border-solid bg-gradient-to-r from-stone-500 to-stone-700 p-4 text-center text-white transition-all"
				on:click={searchNovels}>搜尋</button
			>
		{/if}
		{#if searchValue !== ''}
			<button
				type="button"
				class="w-full max-w-[100px] rounded-3xl border-solid bg-gradient-to-r from-stone-500 to-stone-700 p-4 text-center text-white transition-all"
				on:click={resetSearchNovels}>清除搜尋</button
			>
		{/if}
	</div>
	<div class="mb-8 grid grid-cols-4 gap-6 md:grid-cols-6 xl:grid-cols-12">
		{#each categoryList as category}
			<a
				href="{base}/list/{category}"
				class="w-full rounded-[180px] border-2 border-solid border-gray-200 bg-slate-100 p-2 text-center text-gray-700 transition-all hover:bg-slate-400 hover:text-white"
				>{category}</a
			>
		{/each}
	</div>
	<div class="mb-4">共 <span class="text-red-300">{list.length}</span> 部作品</div>
	<ul class="grid grid-cols-1 gap-8 md:grid-cols-3">
		{#each list as item}
			<li>
				<a  data-sveltekit-reload href="{base}/nid/{item.id ? item.id : item.nid}" class="flex gap-2">
					<div class="max-h-[240px] w-full max-w-[110px] overflow-hidden rounded-md">
						<img src="{baseUrl}/images/{item.id ? item.id : item.nid}.jpg" class="w-full" alt="" />
					</div>
					<div class="flex flex-col p-2">
						<h3 class="mb-2 font-bold">{item.name}</h3>
						<span class="mb-2">作者: {item.author}</span>
						<p class="text-xs text-gray-600">{item.introduction}</p>
					</div>
				</a>
			</li>
		{/each}
		{#if searchValue === ''}
			<InfiniteScroll
				hasMore={newBatch.length}
				window={true}
				threshold={100}
				on:loadMore={() => {
					currentPage++;
					fetchList();
				}}
			/>
		{/if}
	</ul>
</div>
