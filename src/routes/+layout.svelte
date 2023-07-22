<script>
	// @ts-nocheck
	import Headroom from 'svelte-headroom';
	import '../app.css';
	let y = 0;
</script>

<svelte:window bind:scrollY={y} />
<Headroom duration="350ms" offset={300} tolerance={5}>
	<header
		class="flex h-[64px] items-center justify-between bg-slate-200 px-4 transition duration-300"
	>
		<div>logo</div>
		<div class="grid grid-cols-3 gap-2">
			<div class="text-center">Dark Mode</div>
			<div class="text-center">Search</div>
			<div class="text-center">Menu</div>
		</div>
	</header>
</Headroom>
<body class="mt-[64px]">
	<slot />
</body>
<footer class="flex flex-col bg-slate-500 px-4">
	<div class="mb-8 mt-8 grid grid-flow-col">
		<a target="_blank" rel="noreferrer" href="/" class="text-center"
			><span class="css-1clmpdf">成為創作者</span></a
		><a target="_self" rel="noreferrer" href="/tos" class="text-center"
			><span class="css-1clmpdf">服務條款</span></a
		><a target="_self" rel="noreferrer" href="/privacypolicy" class="text-center"
			><span class="css-1clmpdf">隱私政策</span></a
		><a target="_blank" rel="noreferrer" href="/" class="text-center"
			><span class="css-1clmpdf">常見問題</span></a
		>
	</div>
	<div class="item-center flex flex-col justify-center">
		<div class="text-center">
			<span>躺著賺有限公司</span><span>© All Rights Reserved</span>
		</div>
		<div class="text-center">
			<span>統編：</span><span>地址：</span>
		</div>
	</div>
</footer>
