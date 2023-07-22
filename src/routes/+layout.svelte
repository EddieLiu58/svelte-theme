<script>
	// @ts-nocheck

	import '../app.css';
	import { Button } from '@svelteuidev/core';
	function toggle() {
		window.document.body.classList.toggle('dark-mode');
	}
</script>

<header class="sticky top-0 flex items-center justify-between bg-slate-500 px-4">
	<div>logo</div>
	<div class="grid grid-cols-3 gap-2">
		<div class="text-center">Dark Mode</div>
		<div class="text-center">Search</div>
		<div class="text-center">Menu</div>
	</div>
</header>
<slot />
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
