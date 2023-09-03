<script>
	// @ts-ignore
	import { onMount } from 'svelte';
  import { page } from '$app/stores';
  import { PUBLIC_PROD_BASE_URL } from '$env/static/public'
    import axios from 'axios';
    const baseUrl = PUBLIC_PROD_BASE_URL;
    let list = [];
    let error = null;
    onMount(async () => {
        try {
            const content = await axios.get(`/api/novels?page=1&size=24`);
            list = content.data;
            console.log(list)
        } catch (e) {
            error = e;
        }
    });
</script>

<div class="mx-auto grid max-w-6xl px-4">
	<h1 class="hidden text-3xl font-bold text-red-300">大家一起躺著賺-列表頁1</h1>
	<div class="">
		<input
			type="search"
			class="mb-4 w-full rounded-lg border-2 border-solid border-transparent bg-search p-4 outline-none focus:border-red-300"
		/>
	</div>
	<div class="mb-4">共 <span class="text-red-300">{list.length}</span> 部作品</div>
	<div class="grid grid-cols-4 gap-4">
		{#each list as item}
			<a href="/{item.id}" class="flex gap-2">
				<div class="max-h-[240px] w-full overflow-hidden rounded-md">
					<img src="{baseUrl}/images/{item.id}.jpg" class="w-full" alt="" />
				</div>
				<div class="flex flex-col p-2">
					<h3 class="mb-2 font-bold">{item.name}</h3>
					<span class="mb-2">作者: {item.author}</span>
					<p class="text-xs text-gray-600">{item.introduction}</p>
				</div>
			</a>
		{/each}
	</div>
</div>
