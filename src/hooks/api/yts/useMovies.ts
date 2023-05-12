import { MOVIES_CACHE_KEY } from '@/constants/queryKeys';
import { IQuery } from '@/store/useMovieQueryStore';
import { useQuery } from '@tanstack/react-query';
import getYtsData from './client';
import { IMovieResult } from '@/types/element/movie-types';

export interface IMoviesResponse {
  status: string;
  data: IMovieResult;
}

const useMovies = (query: IQuery = {}) =>
  useQuery({
    queryKey: [MOVIES_CACHE_KEY, query],
    queryFn: () =>
      getYtsData<IMoviesResponse>('/list_movies.json', {
        params: { ...query },
      }),
    staleTime: 30000,
  });

export default useMovies;
