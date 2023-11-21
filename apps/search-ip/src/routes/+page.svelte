<script lang="ts">
	import '@splidejs/splide/dist/css/themes/splide-default.min.css';
	import axios from 'axios';
	import Geolocation from 'svelte-geolocation';
	import { onMount } from 'svelte';
	import { browser } from '$app/environment';
	/** @type {import('./$types').PageData} */
	export let data;

	let IPV4List = {};
	// let IPV6List = {};
	let currentIP = data.requestIp.split(',')[0];
	let coords: Array<String> = [];
	let onceClicked = false;
	async function fetchIP() {
		if (!onceClicked) {
			let getIPV4 = await axios.get(
				`https://api.itool.click/itools/ip-range/v4?ip=${currentIP}&uid=test`
			);
			IPV4List = { ...getIPV4.data };
			// let getIPV6 = await axios.get(
			// 	`https://api.itool.click/itools/ip-range/v6?ip=${currentIP}&uid=test`
			// );
			// IPV6List = { ...getIPV6.data };
			onceClicked = true;
		}
	}
	onMount(() => {
		fetchIP();
	});
</script>

<Geolocation getPosition bind:coords />
<section
	class="mx-auto flex min-h-[600px] max-w-full items-center justify-center px-6 md:max-w-6xl"
>
	<div class="mx-auto grid w-full grid-cols-1 gap-4 py-12 md:max-w-5xl md:grid-cols-2">
		<div class="">
			<h1 class="text-center text-6xl font-bold md:text-left">IP搜尋</h1>
			<div class="mt-10">
				<div class="text-center md:text-left">
					<label for="1" class=" text-sm text-gray-600">請輸入您想知道的 IP 位址：</label>
				</div>
				<div class="mt-1 flex flex-col items-center md:mt-0 md:flex-row">
					<div class="">
						<input
							type="text"
							class="box-border rounded-md border-[2px] border-solid border-gray-400 p-1 outline-none transition-shadow focus:border-blue-400"
							id="1"
							bind:value={currentIP}
						/>
					</div>
					<div class="mt-6 flex justify-center md:ml-4 md:mt-0">
						<button
							class="rounded-full bg-orange-300 p-4 text-center text-white"
							type="button"
							on:click={fetchIP}>取得 IP 詳細資料</button
						>
					</div>
				</div>
				<div class="mt-6 flex items-center text-center md:mt-4 md:text-left">
					<p class=" text-xs text-gray-600">
						此網站所使用的 IP2Location LITE 數據來自於 <a href="https://lite.ip2location.com"
							>https://lite.ip2location.com</a
						>.
					</p>
				</div>
			</div>
		</div>
		<div class=" min-h-[500px] rounded-xl bg-[#282c34] px-8 py-4 text-[#ABB2BF]">
			{#if Object.keys(IPV4List).length > 0}
				<div>
					<h2 class="text-base font-bold">IPv4</h2>
					<ul class="mt-2">
						{#each Object.entries(IPV4List) as [key, value]}
							{#if key !== 'success' && key !== 'msg'}
								<li class="mb-4">{key} : <span class="text-[#98C379]">{value}</span></li>
							{/if}
						{/each}
					</ul>
				</div>
			{/if}
			<!-- {#if Object.keys(IPV6List).length > 0}
				<div class="mt-2">
					<h2 class="text-base font-bold">IPv6</h2>
					<ul class="mt-2">
						{#each Object.entries(IPV6List) as [key, value]}
							{#if key !== 'success' && key !== 'msg'}
								<li class="mb-4">{key} : <span class="text-[#98C379]">{value}</span></li>
							{/if}
						{/each}
					</ul>
				</div>
			{/if} -->
		</div>
	</div>
</section>
{#if browser}
<script async type="application/javascript" src="https://a.magsrv.com/ad-provider.js"></script> 
<ins class="eas6a97888e" data-zoneid="5134298"></ins> 
<script>(AdProvider = window.AdProvider || []).push({"serve": {}});</script>
{/if}
<style lang="postcss">
	/* :global(html) {
		background-color: theme(colors.gray.100);
	} */
</style>
