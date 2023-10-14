<script lang="ts">
	import { PUBLIC_PROD_BASE_URL } from '$env/static/public';
	import { base } from '$app/paths';
	/** @type {import('./$types').PageData} */
	export let data: {
		chaptersList: Array<{ id: string; title: string }>;
		firstId: string;
		nid: string;
		item: { id: string; name: string; author: string; category: string; introduction: string };
	};

	const baseUrl = PUBLIC_PROD_BASE_URL;
</script>

<div class="mx-auto grid">
	<div class="mt-7 w-full">
		<div class="w-full py-4 backdrop-blur-lg">
			<div class=" bg-white">
				<div
					class="mx-auto grid w-full max-w-6xl grid-cols-1 gap-12 px-12 py-16 md:grid-cols-[1fr_6fr]"
				>
					<div class="flex justify-center overflow-hidden rounded-md md:block">
						<img src="{baseUrl}/images/{data.nid}.jpg" class="w-auto" alt="" />
					</div>
					<div class="md: flex flex-col items-center gap-4 text-neutral-600 md:items-start">
						<h1 class="text-3xl md:text-4xl">{data.item.name}</h1>
						<span class="text-lg">作者： {data.item.author}</span>
						<span class="text-lg">分類： {data.item.category}</span>
						<p class="text-lg">簡介： {data.item.introduction}</p>
						<div class="mt-4 grid w-full grid-cols-2 gap-4 md:max-w-[40%]">
							<a
								href="{base}/{data.item.id}/{data.firstId}"
								class="w-full rounded-[180px] border-solid bg-gradient-to-r from-stone-500 to-stone-700 p-4 text-center text-white transition-all"
								>開始閱讀</a
							>
							<a
								href="{base}/list/{data.item.category}"
								class="border-neutral-00 w-full rounded-[180px] border-2 border-solid bg-neutral-100 p-4 text-center transition-all"
								>返回列表頁</a
							>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div
		class="mx-auto mt-9 flex w-full max-w-6xl flex-col gap-4 rounded-lg bg-white px-12 py-12 drop-shadow-md"
	>
		<h2 class="mb-4 text-2xl font-bold">章節</h2>
		<div class="grid grid-cols-2 gap-8 md:grid-cols-4">
			{#each data.chaptersList as chapter}
				<a href="{base}/{data.nid}/{chapter.id}" class="flex gap-2 text-lg">
					{chapter.title}
				</a>
			{/each}
		</div>
	</div>
</div>
