<script>
	// @ts-ignore
   import { PUBLIC_PROD_BASE_URL } from '$env/static/public'
  const baseUrl = PUBLIC_PROD_BASE_URL;
  /** @type {import('./$types').PageData} */
  export let data;
</script>

<div class="mx-auto grid">
	<h1 class="hidden text-3xl font-bold text-red-300">大家一起躺著賺-內容頁</h1>
<div class="w-full bg-[url('./images/blob.png')] bg-cover bg-no-repeat">
  <div class="w-full backdrop-blur-lg">
    <div class="grid grid-cols-2 gap-12  max-w-3xl w-full min-h-[500px] py-16 mx-auto">
      <div class="overflow-hidden rounded-md">
        <img src="{baseUrl}/images/{data.nid}.jpg" class="w-auto" alt="" />
      </div>
      <div class="flex flex-col  justify-between text-white">
        <div class="grid gap-4">
          <h2 class=" text-4xl">{ data.item.name }</h2>
          <span class="text-lg">作者: { data.item.author }</span>
          <span class="text-lg">分類: { data.item.category }</span>
          <p class="text-lg">{ data.item.introduction }</p>
        </div>
        <div class="w-full grid grid-cols-2 gap-4">
          <a href="/{data.id}/{data.firstId}" class="w-full border-2 border-solid  border-white p-4 text-center rounded-[180px] hover:bg-white transition-all hover:text-gray-400">開始閱讀</a>
          <a href="/list" class="w-full border-2 border-solid  border-white p-4 text-center rounded-[180px] hover:bg-white transition-all hover:text-gray-400">返回列表頁</a>
        </div>
        
      </div>
    </div>
  </div>
</div>
<div class="flex flex-col max-w-4xl px-4 mt-9 mx-auto w-full gap-4">
  <h2 class="font-bold text-xl">章節</h2>
  <div class="grid grid-cols-1 gap-4">
    {#each data.chaptersList as chapter}
    <a href="/{data.nid}/{chapter.id}" class="flex gap-2">
      { chapter.title }
    </a>
  {/each}
  </div>
</div>
</div>
