import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';
import axios from 'axios';

export const load: PageLoad = async ({ params }) => {
  let item: Array<string> = [];
  let category = params.category;
  const content = await axios.get(`/api/novels/category?page=1&size=24&cat=${category}`);
  item = content.data;
  
  if (content) {
    return {
      item,category
    };
  }
 
  throw error(404, 'Not found');
};