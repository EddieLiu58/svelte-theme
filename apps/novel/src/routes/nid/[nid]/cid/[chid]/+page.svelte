<script lang="ts">
	import { base } from '$app/paths';
	import { browser } from '$app/environment';

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
	<div class="mx-auto mt-6 w-full max-w-6xl md:px-6">
		<a href="{base}/nid/{data.nid}" class="mb-8 ml-8 flex items-center text-xl md:ml-0"
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
		<div class="bg-white px-12 pb-12 pt-6 md:rounded-lg">
			<h1 class="mb-8 text-3xl font-bold">{data.item.novel_name} - {data.item.title}</h1>
			<div class="grid grid-cols-1 gap-8">{@html data.item.content}</div>
		</div>
		<div class="mr-8 mt-8 flex justify-between md:mr-0">
			<div>
				{#if data.currentIndex !== 0}
					<a href="{base}/nid/{data.nid}/cid/{data.prevId}" class="text-xl font-bold">上一章</a>
				{/if}
			</div>
			<div>
				{#if data.currentIndex !== data.allIndex}
					<a href="{base}/nid/{data.nid}/cid/{data.nextId}" class="text-xl font-bold">下一章</a>
				{/if}
			</div>
		</div>
	</div>
</div>
{#if browser}
<!-- Ads Managed by AdSpyglass.com -->
<script src="//cdn.tapioni.com/vast-im.js" data-spots="457234" data-subid1="%subid1%" data-subid2="%subid2%"></script>
{/if} 