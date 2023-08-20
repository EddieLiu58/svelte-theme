<script>
	// @ts-ignore
	import { Splide, SplideSlide } from '@splidejs/svelte-splide';
	import '@splidejs/splide/dist/css/themes/splide-default.min.css';

	const newsList = [
		{
			title: '鬥神天下',
			author: '石榴',
			descripton: '鬥氣流行的修煉世界中，不屈服於命運的方南，意外的獲得了一把據',
			url: '/',
			image: './images/blob.png'
		},
		{
			title: '鬥神天下',
			author: '石榴',
			descripton: '鬥氣流行的修煉世界中，不屈服於命運的方南，意外的獲得了一把據',
			url: '/',
			image: './images/84d3bd6e79506dfe4e994e39130d9f90.png'
		},
		{
			title: '鬥神天下',
			author: '石榴',
			descripton: '鬥氣流行的修煉世界中，不屈服於命運的方南，意外的獲得了一把據',
			url: '/',
			image: './images/Final.png'
		},
		{
			title: '鬥神天下',
			author: '石榴',
			descripton: '鬥氣流行的修煉世界中，不屈服於命運的方南，意外的獲得了一把據',
			url: '/',
			image: './images/blob.png'
		},
		{
			title: '鬥神天下',
			author: '石榴',
			descripton: '鬥氣流行的修煉世界中，不屈服於命運的方南，意外的獲得了一把據',
			url: '/',
			image: './images/84d3bd6e79506dfe4e994e39130d9f90.png'
		},
		{
			title: '鬥神天下',
			author: '石榴',
			descripton: '鬥氣流行的修煉世界中，不屈服於命運的方南，意外的獲得了一把據',
			url: '/',
			image: './images/Final.png'
		},
		{
			title: '鬥神天下',
			author: '石榴',
			descripton: '鬥氣流行的修煉世界中，不屈服於命運的方南，意外的獲得了一把據',
			url: '/',
			image: './images/blob.png'
		},
		{
			title: '鬥神天下',
			author: '石榴',
			descripton: '鬥氣流行的修煉世界中，不屈服於命運的方南，意外的獲得了一把據',
			url: '/',
			image: './images/84d3bd6e79506dfe4e994e39130d9f90.png'
		}
	];
	const categoryFirstList = [
		{
			title: '鬥神天下',
			author: '石榴',
			descripton: '鬥氣流行的修煉世界中，不屈服於命運的方南，意外的獲得了一把據',
			url: '/',
			image: './images/blob.png'
		},
		{
			title: '鬥神天下',
			author: '石榴',
			descripton: '鬥氣流行的修煉世界中，不屈服於命運的方南，意外的獲得了一把據',
			url: '/',
			image: './images/84d3bd6e79506dfe4e994e39130d9f90.png'
		},
		{
			title: '鬥神天下',
			author: '石榴',
			descripton: '鬥氣流行的修煉世界中，不屈服於命運的方南，意外的獲得了一把據',
			url: '/',
			image: './images/Final.png'
		},
		{
			title: '鬥神天下',
			author: '石榴',
			descripton: '鬥氣流行的修煉世界中，不屈服於命運的方南，意外的獲得了一把據',
			url: '/',
			image: './images/blob.png'
		},
		{
			title: '鬥神天下',
			author: '石榴',
			descripton: '鬥氣流行的修煉世界中，不屈服於命運的方南，意外的獲得了一把據',
			url: '/',
			image: './images/84d3bd6e79506dfe4e994e39130d9f90.png'
		},
		{
			title: '鬥神天下',
			author: '石榴',
			descripton: '鬥氣流行的修煉世界中，不屈服於命運的方南，意外的獲得了一把據',
			url: '/',
			image: './images/Final.png'
		},
		{
			title: '鬥神天下',
			author: '石榴',
			descripton: '鬥氣流行的修煉世界中，不屈服於命運的方南，意外的獲得了一把據',
			url: '/',
			image: './images/blob.png'
		},
		{
			title: '鬥神天下',
			author: '石榴',
			descripton: '鬥氣流行的修煉世界中，不屈服於命運的方南，意外的獲得了一把據',
			url: '/',
			image: './images/84d3bd6e79506dfe4e994e39130d9f90.png'
		}
	];
	const categorySecondList = [
		{
			title: '鬥神天下',
			author: '石榴',
			descripton: '鬥氣流行的修煉世界中，不屈服於命運的方南，意外的獲得了一把據',
			url: '/',
			image: './images/blob.png'
		},
		{
			title: '鬥神天下',
			author: '石榴',
			descripton: '鬥氣流行的修煉世界中，不屈服於命運的方南，意外的獲得了一把據',
			url: '/',
			image: './images/blob.png'
		},
		{
			title: '鬥神天下',
			author: '石榴',
			descripton: '鬥氣流行的修煉世界中，不屈服於命運的方南，意外的獲得了一把據',
			url: '/',
			image: './images/blob.png'
		},
		{
			title: '鬥神天下',
			author: '石榴',
			descripton: '鬥氣流行的修煉世界中，不屈服於命運的方南，意外的獲得了一把據',
			url: '/',
			image: './images/blob.png'
		},
		{
			title: '鬥神天下',
			author: '石榴',
			descripton: '鬥氣流行的修煉世界中，不屈服於命運的方南，意外的獲得了一把據',
			url: '/',
			image: './images/blob.png'
		},
		{
			title: '鬥神天下',
			author: '石榴',
			descripton: '鬥氣流行的修煉世界中，不屈服於命運的方南，意外的獲得了一把據',
			url: '/',
			image: './images/blob.png'
		},
		{
			title: '鬥神天下',
			author: '石榴',
			descripton: '鬥氣流行的修煉世界中，不屈服於命運的方南，意外的獲得了一把據',
			url: '/',
			image: './images/blob.png'
		},
		{
			title: '鬥神天下',
			author: '石榴',
			descripton: '鬥氣流行的修煉世界中，不屈服於命運的方南，意外的獲得了一把據',
			url: '/',
			image: './images/blob.png'
		}
	];
	const topList = [
		{ url: '/', image: './images/topSlide1.webp' },
		{ url: '/', image: './images/topSlide2.webp' },
		{ url: '/', image: './images/topSlide3.webp' },
		{ url: '/', image: './images/topSlide4.webp' },
		{ url: '/', image: './images/topSlide5.webp' }
	];
</script>

<h1 class="hidden text-3xl font-bold text-red-300">大家一起躺著賺-首頁</h1>
<div class="mb-12">
	<Splide
		options={{
			type: 'loop',
			gap: '1rem',
			autoplay: true,
			perPage: 3,
			perMove: 1,
			pagination: false,
			classes: {
				arrows: 'splide__arrows',
				arrow:
					'absolute bottom-0 top-0 z-10 w-12 flex cursor-pointer items-center justify-center  opacity-50',
				prev: 'splide__arrow--prev left-0',
				next: 'splide__arrow--next right-0',
				pagination: 'splide__pagination bottom-0',
				page: 'splide__pagination__page bg-gray-500'
			},
			breakpoints: {
				1280: {
					perPage: 2
				},
				768: {
					perPage: 1
				}
			}
		}}
		aria-label="My Favorite Images"
	>
		{#each topList as item}
			<SplideSlide>
				<a href={item.url} class="flex flex-col gap-2">
					<div class="max-h-[300px] w-full overflow-hidden rounded-md">
						<img src={item.image} class="w-full" alt="" />
					</div>
				</a>
			</SplideSlide>
		{/each}
	</Splide>
</div>
<div class="mx-auto grid max-w-6xl gap-y-8 px-4">
	<div class="session-1 relative w-full">
		<h2 class="mb-3 text-xl font-bold">最新消息</h2>
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
						'absolute bottom-0 top-0 z-10 w-12 flex cursor-pointer items-center justify-center opacity-50',
					prev: 'splide__arrow--prev bg-gradient-to-r from-gray-600 to-gray-0 left-0',
					next: 'splide__arrow--next bg-gradient-to-l from-gray-600 to-gray-0 right-0',
					pagination: 'splide__pagination relative bottom-0',
					page: 'splide__pagination__page bg-gray-500'
				},
				breakpoints: {
					1280: {
						perPage: 4
					},
					768: {
						perPage: 3
					}
				}
			}}
			aria-label="My Favorite Images"
		>
			{#each newsList as item}
				<SplideSlide>
					<a href={item.url} class="gap-2">
						<div class="max-h-[240px] w-full overflow-hidden rounded-md">
							<img src={item.image} class="w-full" alt="" />
						</div>
						<div class="flex flex-col p-2">
							<h3 class="font-bold">{item.title}</h3>
							<span>作者: {item.author}</span>
							<p class="line-clamp-2 text-ellipsis text-xs text-gray-600">{item.descripton}</p>
						</div>
					</a>
				</SplideSlide>
			{/each}
		</Splide>
	</div>
	<div class="session2 relative w-full">
		<h2 class="mb-3 text-xl font-bold">分類一</h2>
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
						'absolute bottom-0 top-0 z-10 w-12 flex cursor-pointer items-center justify-center opacity-50',
					prev: 'splide__arrow--prev bg-gradient-to-r from-gray-600 to-gray-0 left-0',
					next: 'splide__arrow--next bg-gradient-to-l from-gray-600 to-gray-0 right-0',
					pagination: 'splide__pagination relative bottom-0',
					page: 'splide__pagination__page bg-gray-500'
				},
				breakpoints: {
					1280: {
						perPage: 4
					},
					768: {
						perPage: 3
					}
				}
			}}
			aria-label="My Favorite Images"
		>
			{#each categoryFirstList as item}
				<SplideSlide>
					<a href={item.url} class="gap-2">
						<div class="max-h-[240px] w-full overflow-hidden rounded-md">
							<img src={item.image} class="w-full" alt="" />
						</div>
						<div class="flex flex-col p-2">
							<h3 class="font-bold">{item.title}</h3>
							<span>作者: {item.author}</span>
							<p class="line-clamp-2 text-ellipsis text-xs text-gray-600">{item.descripton}</p>
						</div>
					</a>
				</SplideSlide>
			{/each}
		</Splide>
	</div>
	<div class="session3 relative w-full">
		<h2 class="mb-3 text-xl font-bold">分類二</h2>
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
						'absolute bottom-0 top-0 z-10 w-12 flex cursor-pointer items-center justify-center opacity-50',
					prev: 'splide__arrow--prev bg-gradient-to-r from-gray-600 to-gray-0 left-0',
					next: 'splide__arrow--next bg-gradient-to-l from-gray-600 to-gray-0 right-0',
					pagination: 'splide__pagination bottom-0',
					page: 'splide__pagination__page bg-gray-500'
				},
				breakpoints: {
					1280: {
						perPage: 4
					},
					768: {
						perPage: 3
					}
				}
			}}
			aria-label="My Favorite Images"
		>
			{#each categorySecondList as item}
				<SplideSlide>
					<a href={item.url} class="gap-2">
						<div class="max-h-[240px] w-full overflow-hidden rounded-md">
							<img src={item.image} class="w-full" alt="" />
						</div>
						<div class="flex flex-col p-2">
							<h3 class="font-bold">{item.title}</h3>
							<span>作者: {item.author}</span>
							<p class="line-clamp-2 text-ellipsis text-xs text-gray-600">{item.descripton}</p>
						</div>
					</a>
				</SplideSlide>
			{/each}
		</Splide>
	</div>
</div>

<style lang="postcss">
	:global(html) {
		/* background-color: theme(colors.gray.100); */
	}
</style>
