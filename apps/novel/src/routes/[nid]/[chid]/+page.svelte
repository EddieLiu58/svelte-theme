<script lang="ts">
	import { base } from '$app/paths';
	/** @type {import('./$types').PageData} */
	export let data: {
		nid: string;
		item: { novel_name: string; title: string; content: string };
		currentIndex: Number;
		allIndex: Number;
		prevId: string;
		nextId: string;
	};
</script>

<div class="mx-auto grid">
	<div class="mx-auto w-full max-w-4xl px-4">
		<a href="{base}/{data.nid}" class="mb-8 flex items-center text-xl"
			><svg
				stroke="currentColor"
				fill="none"
				stroke-width="2"
				viewBox="0 0 24 24"
				stroke-linecap="round"
				stroke-linejoin="round"
				class="css-13e445s"
				height="1em"
				width="1em"
				xmlns="http://www.w3.org/2000/svg"><polyline points="15 18 9 12 15 6" /></svg
			>
			<span class="ml-2">{data.item.novel_name}</span>
		</a>
		<h1 class="mb-8 text-3xl font-bold">{data.item.title}</h1>
		<div class="grid grid-cols-1 gap-8">{@html data.item.content}</div>
		<div class="mt-8 flex justify-between">
			<div>
				{#if data.currentIndex !== 0}
					<a href="{base}/{data.nid}/{data.prevId}" class="text-xl font-bold">上一章</a>
				{/if}
			</div>
			<div>
				{#if data.currentIndex !== data.allIndex}
					<a href="{base}/{data.nid}/{data.nextId}" class="text-xl font-bold">下一章</a>
				{/if}
			</div>
		</div>
	</div>
</div>
