import axios, { AxiosInstance, AxiosResponse } from 'axios';

const responseBody = <T>(response: AxiosResponse<T>) => response.data;

const createInstance = (baseURL: string, headers: {}) =>
  axios.create({
    baseURL,
    headers,
  });

export const request = {
  yts: createInstance('https://yts.mx/api/v2', {}),
  tmdb: createInstance('https://api.themoviedb.org/3', {
    Authorization: `bearer ${process.env.NEXT_PUBLIC_TMDB_TOKEN}`,
    Accept: 'application/json',
  }),
};

export const requestActions = {
  get: <T>(instance: AxiosInstance, url: string) => instance.get<T>(url).then(responseBody),
  post: <T>(instance: AxiosInstance, url: string, body: {}) =>
    instance.post<T>(url, body).then(responseBody),
};

export const defaultQueryFn = async ({ queryKey }: any) =>
  requestActions.get(request.tmdb, `/movie/${queryKey[0]}`);
