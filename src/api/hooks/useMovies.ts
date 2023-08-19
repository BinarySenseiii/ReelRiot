import { IMovieResult } from '@/types/movie-types'
import { useQuery } from '@tanstack/react-query'
import ms from 'ms'
import getYtsData from '../client'
import { MOVIES_CACHE_KEY } from '../query-keys'
import { QueryType } from '@/types/context/query-type'
import { MOVIES_LIMIT } from '@/store/useMovieQueryStore'

export interface IMoviesResponse {
	status: string
	data: IMovieResult
}

const useMovies = (query: QueryType = { page: 1 }) =>
	useQuery({
		queryKey: [MOVIES_CACHE_KEY, query],
		queryFn: () =>
			getYtsData<IMoviesResponse>('/list_movies.json', {
				params: { ...query, limit: MOVIES_LIMIT },
			}),
		staleTime: ms('5s'),
	})

export default useMovies
