<script>
	// @ts-ignore
  import { PUBLIC_PROD_BASE_URL } from '$env/static/public'
  const baseUrl = PUBLIC_PROD_BASE_URL;
   /** @type {import('./$types').PageData} */
  export let data;
</script>

<div class="mx-auto grid">
<div class="w-full max-w-4xl px-4 mx-auto">
  <a href="/{data.nid}" class="flex items-center mb-8 text-xl"><svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="css-13e445s" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><polyline points="15 18 9 12 15 6"></polyline></svg>
    <span class="ml-2">{ data.item.novel_name }</span>
  </a>
  <h1 class="text-3xl font-bold mb-8">{ data.item.title }</h1>
  <p>{@html data.item.content }</p>
  <div class="flex justify-between mt-8">
    <div>
      {#if data.currentIndex !== 0}
      <a href="/{data.nid}/{data.prevId}">上一章</a>
      {/if}
    </div>
    <div>
      {#if data.currentIndex !== data.allIndex}
      <a href="/{data.nid}/{data.nextId}">下一章</a>
      {/if}
    </div>
  </div>
</div>
</div>
