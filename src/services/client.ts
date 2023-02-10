import axios, { AxiosResponse } from 'axios';

export const tmdbClient = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
});

export const tmdbFetch = async (endpoint: string) => {
  const response = await tmdbClient.get(endpoint, {
    headers: {
      Authorization: `bearer ${process.env.TMDB_TOKEN}`,
      Accept: 'application/json',
    },
  });
  const data = await response.data;
  return data;
};

axios.defaults.baseURL = 'https://yts.mx/api/v2';

const responseBody = <T>(response: AxiosResponse<T>) => response.data;

export const ytsRequest = {
  get: <T>(url: string) => axios.get<T>(url).then(responseBody),
  post: <T>(url: string, body: {}) => axios.post<T>(url, body).then(responseBody),
};
