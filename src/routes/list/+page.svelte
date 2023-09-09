<script>
	// @ts-ignore
	import { onMount } from 'svelte';
	import { page } from '$app/stores';
	import { PUBLIC_PROD_BASE_URL } from '$env/static/public';
	import axios from 'axios';
	import InfiniteScroll from 'svelte-infinite-scroll';
	const baseUrl = PUBLIC_PROD_BASE_URL;
	let list = [];
	// store the new batch of data here.
	let newBatch = [];
	let currentPage = 1;
	let error = null;
	async function fetchList() {
		const content = await axios.get(`/api/novels?page=${currentPage}&size=24`);
		newBatch = content.data;
	}
	onMount(() => {
		fetchList();
	});
	$: list = [...list, ...newBatch];
</script>

<div class="mx-auto grid max-w-6xl px-4">
	<h1 class="hidden text-3xl font-bold text-red-300">大家一起躺著賺-列表頁1</h1>
	<div class="mt-8">
		<input
			type="search"
			placeholder="請輸入關鍵字..."
			class="mb-4 w-full rounded-lg border-2 border-solid border-gray-200 bg-search p-4 outline-none focus:border-red-300"
		/>
	</div>
	<div class="mb-4">共 <span class="text-red-300">{list.length}</span> 部作品</div>
	<ul class="grid grid-cols-1 gap-8 md:grid-cols-3">
		{#each list as item}
			<li>
				<a href="/{item.id}" class="flex gap-2">
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
			hasMore={newBatch.length}
			window={true}
			threshold={100}
			on:loadMore={() => {
				currentPage++;
				fetchList();
			}}
		/>
	</ul>
</div>
