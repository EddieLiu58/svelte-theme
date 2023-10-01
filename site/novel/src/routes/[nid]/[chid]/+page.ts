import { error } from '@sveltejs/kit';
import { PUBLIC_PROD_BASE_URL } from '$env/static/public';
import axios from 'axios';
export const ssr = false;
 /** @type {import('./$types').PageServerLoad} */
export const load: PageLoad = async ({ params }) => {
  let item: Array<string> = [];
  let novelsItem:  Array<{chapters_ids:Array<string>}> = [];
  let currentIndex = 0;
  let allIndex = 0;
  let nid = params.nid;
  let prevId = '';
  let nextId = '';
  const content = await axios.get(`${PUBLIC_PROD_BASE_URL}/contents/id/${params.chid}`);
  item =  content.data[0];
  const novels = await axios.get(`${PUBLIC_PROD_BASE_URL}/novels?nid=${params.nid}`);
  novelsItem  =  novels.data[0];
  currentIndex = novelsItem.chapters_ids.findIndex((i:string) => i === params.chid )
  allIndex = novelsItem.chapters_ids.length;
  prevId = novelsItem.chapters_ids[currentIndex - 1];
  nextId  = novelsItem.chapters_ids[currentIndex + 1];
  
  if (params.nid !== '' && params.chid !== '') {
    return {
      item,novelsItem,currentIndex,allIndex,nid,prevId,nextId
    };
  }
 
  throw error(404, 'Not found');
};