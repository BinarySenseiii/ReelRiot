/* eslint-disable consistent-return */
import axios from 'axios';

export const client = axios.create({
  baseURL: 'https://yts.mx/api/v2/list_movies.json',
});

export const basicFetch = async (endpoint: string) => {
  try {
    const response = await client.get(endpoint);
    const { data } = await response.data;
    return data;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      throw new Error(error.response.data);
    }
  }
};
