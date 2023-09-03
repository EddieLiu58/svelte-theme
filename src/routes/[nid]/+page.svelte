<script>
	// @ts-ignore
  import { onMount } from 'svelte';
  import { page } from '$app/stores';
  import { PUBLIC_PROD_BASE_URL } from '$env/static/public'
    import axios from 'axios';
    const id = $page.params.nid;
    const baseUrl = PUBLIC_PROD_BASE_URL;
    let item = [];
    let chaptersList = [];
    let error = null;
    onMount(async () => {
        try {
            const novels = await axios.get(`/api/novels?nid=${id}`);
            item = novels.data[0];
            const chapters = await axios.get(`/api/chapters/id/${id}`);
            chaptersList = chapters.data;
        } catch (e) {
            error = e;
        }
    });
</script>

<div class="mx-auto grid">
	<h1 class="hidden text-3xl font-bold text-red-300">大家一起躺著賺-內容頁</h1>
<div class="w-full bg-[url('./images/blob.png')] bg-cover bg-no-repeat">
  <div class="w-full backdrop-blur-lg">
    <div class="grid grid-cols-2 gap-12  max-w-xl w-full min-h-[500px] py-16 mx-auto">
      <div class="overflow-hidden rounded-md">
        <img src="{baseUrl}/images/{id}.jpg" class="w-auto" alt="" />
      </div>
      <div class="flex flex-col  justify-between text-white">
        <div class="grid gap-4">
          <h2 class=" text-4xl">{ item.name }</h2>
          <span class="text-lg">作者: { item.author }</span>
          <span class="text-lg">分類: { item.category }</span>
          <p class="text-lg">{ item.introduction }</p>
        </div>
        <a href="/" class="justify-self-end border-2 border-solid  border-white p-4 text-center rounded-[180px] hover:bg-white transition-all hover:text-gray-400">開始閱讀</a>
      </div>
    </div>
  </div>
</div>
<div class="flex flex-col max-w-4xl px-4 mt-9 mx-auto w-full gap-4">
  <h2 class="font-bold text-xl">章節</h2>
  <div class="grid grid-cols-1 gap-4">
    {#each chaptersList as item}
    <a href={item.id} class="flex gap-2">
      { item.title }
    </a>
  {/each}
  </div>
</div>
</div>
