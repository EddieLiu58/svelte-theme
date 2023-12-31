import { error } from '@sveltejs/kit';
import { PUBLIC_PROD_BASE_URL } from '$env/static/public';
import axios from 'axios';
export const ssr = false;
export const load = async ({ params }) => {
  let item: Array<string> = [];
  let category = params.category;
  const baseUrl = PUBLIC_PROD_BASE_URL;
  const content = await axios.get(`${baseUrl}/novels/category?page=1&size=24&cat=${category}`);
  item = content.data;
  
  return {
    item,category
  };
};