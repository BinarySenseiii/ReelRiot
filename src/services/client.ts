/* eslint-disable consistent-return */
import axios from 'axios';

export const YTS_BASE_URL = axios.create({
  baseURL: 'https://yts.mx/api/v2/list_movies.json',
});

export const basicFetch = async (endpoint: string) => {
  try {
    const response = await YTS_BASE_URL(endpoint);
    const { data } = await response.data;
    return data;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      throw new Error(error.response.data);
    }
  }
};
