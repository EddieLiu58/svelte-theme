<script lang="ts">
	import { Splide, SplideSlide } from '@splidejs/svelte-splide';
	import '@splidejs/svelte-splide/css/themes/splide-sea-green.min.css';
	import { Grid } from '@splidejs/splide-extension-grid';
	
	export let list: {title:string,description:string,path:string}[] = [];
</script>

<Splide
	options={{
		omitEnd: true,
		focus: 0,
		gap: '1rem',
		padding: '1rem',
		perPage: 1,
		pagination: true,
		arrows: false,
		grid: {
			rows: 2,
			cols: 3,
			gap: {
				row: '1rem',
				col: '1rem', 
   	   },
		},
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
	extensions= {{Grid}}
	aria-label="My Favorite Images"
>
	{#each list as item}
	<SplideSlide>
		<a href="{item.path}" class="gap-2">
			<div class="max-h-[240px] w-full overflow-hidden rounded-md">
				<!-- <img src="{baseUrl}/images/{item.id}.jpg" class="w-full" alt="" /> -->
			</div>
			<div class="flex flex-col p-2 w-full">
				<span class="block mb-4 font-bold">{ item.title }</span>
				<p class="line-clamp-2 text-ellipsis text-sm text-gray-600">{ item.description }</p>
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
