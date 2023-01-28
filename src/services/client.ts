/* eslint-disable consistent-return */
import axios from 'axios';

export const client = axios.create({
  baseURL: 'https://yts.mx/api/v2/list_movies.json',
});

export const fetch = async (endpoint: string) => {
  const response = await client.get(endpoint);
  const { data } = await response.data;
  return data;
};
