import { MOVIES_CACHE_KEY } from '@/constants/queryKeys';
import { IQuery } from '@/store/useMovieQueryStore';
import { useQuery } from '@tanstack/react-query';
import getYtsData from './client';
import { IMovieResult } from '@/types/element/movie-types';

export interface IMoviesResponse {
  status: string;
  data: IMovieResult;
}

const useMovies = (query: IQuery = {}, page: number) =>
  useQuery({
    queryKey: [MOVIES_CACHE_KEY, query, page],
    queryFn: () =>
      getYtsData<IMoviesResponse>('/list_movies.json', {
        params: { ...query, limit: 18, page },
      }),
    staleTime: 30000,
  });

export default useMovies;
