<script>
	// @ts-ignore
	const list = [
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
</script>

<div class="mx-auto grid max-w-6xl px-4">
	<h1 class="hidden text-3xl font-bold text-red-300">大家一起躺著賺-列表頁</h1>
	<div class="">
		<input
			type="search"
			class="mb-4 w-full rounded-lg border-2 border-solid border-transparent bg-search p-4 outline-none focus:border-red-300"
		/>
	</div>
	<div class="mb-4">共 <span class="text-red-300">{list.length}</span> 部作品</div>
	<div class="grid grid-cols-4 gap-4">
		{#each list as item}
			<a href={item.url} class="flex gap-2">
				<div class="max-h-[240px] w-full overflow-hidden rounded-md">
					<img src={item.image} class="w-full" alt="" />
				</div>
				<div class="flex flex-col p-2">
					<h3 class="mb-2 font-bold">{item.title}</h3>
					<span class="mb-2">作者: {item.author}</span>
					<p class="text-xs text-gray-600">{item.descripton}</p>
				</div>
			</a>
		{/each}
	</div>
</div>
