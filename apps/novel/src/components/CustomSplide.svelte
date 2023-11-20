<script lang="ts">
	import { Splide, SplideSlide } from '@splidejs/svelte-splide';
	import '@splidejs/svelte-splide/css/themes/splide-sea-green.min.css';
	import { base } from '$app/paths';
	import { PUBLIC_PROD_BASE_URL } from '$env/static/public';
	export let label = '';
	export let list: Array<string> = [];
	const baseUrl = PUBLIC_PROD_BASE_URL;
</script>

<h2 class="mb-3 text-xl font-bold">{label}</h2>
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
				'absolute bottom-0 top-0 z-10 w-4 flex cursor-pointer items-center justify-center  opacity-50 md:w-6',
			prev: 'splide__arrow--prev left-0',
			next: 'splide__arrow--next right-0',
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
	{#each list as item}
		<SplideSlide>
			<a href="{base}/nid/{item.id}" class="gap-2">
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

<style lang="postcss">
	:global(.splide) {
		padding: 1.5rem 2rem 2rem;
	}
</style>
