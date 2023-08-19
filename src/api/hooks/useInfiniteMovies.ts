import { MOVIES_LIMIT } from '@/store/useMovieQueryStore'
import { QueryType } from '@/types/context/query-type'
import { useInfiniteQuery } from '@tanstack/react-query'
import getYtsData from '../client'
import { INFINITE_MOVIES_CACHE_KEY } from '../query-keys'
import { IMoviesResponse } from './useMovies'

const useInfiniteMovies = (query: QueryType) => {
	return useInfiniteQuery({
		queryKey: [INFINITE_MOVIES_CACHE_KEY, { ...query, page: 1 }],
		queryFn: ({ pageParam = 1 }) =>
			getYtsData<IMoviesResponse>('/list_movies.json', {
				params: { ...query, limit: MOVIES_LIMIT, page: pageParam },
			}),
		getNextPageParam: lastPage => {
			const data = lastPage.data
			return data.movie_count >= MOVIES_LIMIT ? data.page_number + 1 : undefined
		},
		keepPreviousData: true,
	})
}

export default useInfiniteMovies
