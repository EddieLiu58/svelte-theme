<script>
	// @ts-ignore
  import { onMount } from 'svelte';
  import { page } from '$app/stores';
  import { PUBLIC_PROD_BASE_URL } from '$env/static/public'
    import axios from 'axios';
    const id = $page.params.chid;
    const baseUrl = PUBLIC_PROD_BASE_URL;
    let item = [];
    let error = null;
    onMount(async () => {
        try {
            const content = await axios.get(`/api/contents/id/${id}`);
            item = content.data[0];
            console.log(item)
        } catch (e) {
            error = e;
        }
    });
</script>

<div class="mx-auto grid">
	<h1 class="hidden text-3xl font-bold text-red-300">大家一起躺著賺-章節頁</h1>
<div class="w-full max-w-4xl px-4 mx-auto">
  { item.content }
</div>
</div>
