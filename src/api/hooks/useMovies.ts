import { IQuery } from '@/store/useMovieQueryStore'
import { IMovieResult } from '@/types/movie-types'
import { useQuery } from '@tanstack/react-query'
import ms from 'ms'
import getYtsData from '../client'
import { MOVIES_CACHE_KEY } from '../query-keys'

export interface IMoviesResponse {
	status: string
	data: IMovieResult
}

const useMovies = (query: IQuery = {}, page: number) =>
	useQuery({
		queryKey: [MOVIES_CACHE_KEY, query, page],
		queryFn: () =>
			getYtsData<IMoviesResponse>('/list_movies.json', {
				params: { ...query, limit: 18, page },
			}),
		staleTime: ms('5s'),
	})

export default useMovies
