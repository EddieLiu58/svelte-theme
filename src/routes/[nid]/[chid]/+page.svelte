<script>
	// @ts-ignore
  import { onMount } from 'svelte';
  import { page } from '$app/stores';
  import { PUBLIC_PROD_BASE_URL } from '$env/static/public'
    import axios from 'axios';
    const nid = $page.params.nid;
    const chid = $page.params.chid;
    const baseUrl = PUBLIC_PROD_BASE_URL;
    let item = [];
    let error = null;
    onMount(async () => {
        try {
            const content = await axios.get(`/api/contents/id/${chid}`);
            item = content.data[0];
        } catch (e) {
            error = e;
        }
    });
</script>

<div class="mx-auto grid">
<div class="w-full max-w-4xl px-4 mx-auto">
  <a href="/{nid}" class="flex items-center mb-8 text-xl"><svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="css-13e445s" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><polyline points="15 18 9 12 15 6"></polyline></svg>
    <span class="ml-2">{ item.novel_name }</span>
  </a>
  <h1 class="text-3xl font-bold mb-8">{ item.title }</h1>
  <p>{@html item.content }</p>
</div>
</div>
