<script lang="ts">
	import { PUBLIC_PROD_BASE_URL } from '$env/static/public';
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
	<h1 class="hidden text-3xl font-bold text-red-300">大家一起躺著賺-內容頁</h1>
	<div class="w-full bg-[url('/images/blob.png')] bg-cover bg-no-repeat">
		<div class="w-full backdrop-blur-lg">
			<div class="mx-auto grid min-h-[500px] w-full max-w-3xl grid-cols-2 gap-12 py-16">
				<div class="overflow-hidden rounded-md">
					<img src="{baseUrl}/images/{data.nid}.jpg" class="w-auto" alt="" />
				</div>
				<div class="flex flex-col justify-between text-white">
					<div class="grid gap-4">
						<h2 class=" text-4xl">{data.item.name}</h2>
						<span class="text-lg">作者: {data.item.author}</span>
						<span class="text-lg">分類: {data.item.category}</span>
						<p class="text-lg">{data.item.introduction}</p>
					</div>
					<div class="grid w-full grid-cols-2 gap-4">
						<a
							href="/{data.item.id}/{data.firstId}"
							class="w-full rounded-[180px] border-2 border-solid border-white p-4 text-center transition-all hover:bg-white hover:text-gray-400"
							>開始閱讀</a
						>
						<a
							href="/list/{data.item.category}"
							class="w-full rounded-[180px] border-2 border-solid border-white p-4 text-center transition-all hover:bg-white hover:text-gray-400"
							>返回列表頁</a
						>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div class="mx-auto mt-9 flex w-full max-w-4xl flex-col gap-4 px-4">
		<h2 class="text-2xl font-bold">章節</h2>
		<div class="grid grid-cols-1 gap-8">
			{#each data.chaptersList as chapter}
				<a href="/{data.nid}/{chapter.id}" class="flex gap-2 text-lg">
					{chapter.title}
				</a>
			{/each}
		</div>
	</div>
</div>
