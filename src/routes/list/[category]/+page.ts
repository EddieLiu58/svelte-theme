import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';
import { PUBLIC_PROD_BASE_URL } from '$env/static/public';
import axios from 'axios';
export const ssr = false;
export const load: PageLoad = async ({ params }) => {
  let item: Array<string> = [];
  let category = params.category;
  const baseUrl = PUBLIC_PROD_BASE_URL;
  const content = await axios.get(`${baseUrl}/novels/category?page=1&size=24&cat=${category}`);
  item = content.data;
  
  if (params.category !== '') {
    return {
      item,category
    };
  }

  throw error(404, 'Not found');
};