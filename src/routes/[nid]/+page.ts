import { error } from '@sveltejs/kit';
import { PUBLIC_PROD_BASE_URL } from '$env/static/public';
import axios from 'axios';
export const ssr = false;
 /** @type {import('./$types').PageServerLoad} */
export const load: PageLoad = async ({ params }) => {
  let item: Array<string> = [];
  let chaptersList: Array<string> = [];
  let nid = params.nid;
  let firstId = '';
  const novels = await axios.get(`${PUBLIC_PROD_BASE_URL}/novels?nid=${params.nid}`);
  item = novels.data[0];
  const chapters = await axios.get(`${PUBLIC_PROD_BASE_URL}/chapters/id/${params.nid}`);
  chaptersList = chapters.data;
  firstId = chapters.data[0].id;
  
  return {
    item,chaptersList,nid,firstId
  };
};