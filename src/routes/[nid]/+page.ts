import { error } from '@sveltejs/kit';
import axios from 'axios';
export const ssr = false;
 /** @type {import('./$types').PageServerLoad} */
export const load: PageLoad = async ({ params }) => {
  let item: Array<string> = [];
  let chaptersList: Array<string> = [];
  let nid = params.nid;
  let firstId = '';
  const novels = await axios.get(`/api/novels?nid=${params.nid}`);
  item = novels.data[0];
  const chapters = await axios.get(`/api/chapters/id/${params.nid}`);
  chaptersList = chapters.data;
  firstId = chapters.data[0].id;
  
  if (item) {
    return {
      item,chaptersList,nid,firstId
    };
  }
 
  throw error(404, 'Not found');
};