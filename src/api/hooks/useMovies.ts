import { QueryType } from '@/types/context/query-type'
import { IMovieResult } from '@/types/movie-types'
import { useQuery } from '@tanstack/react-query'
import ms from 'ms'
import { MOVIES_CACHE_KEY } from '../query-keys'
import { ytsRequest } from '../request'

export interface IMoviesResponse {
	status: string
	data: IMovieResult
}

const useMovies = (query: QueryType = { page: 1 }) =>
	useQuery({
		queryKey: [MOVIES_CACHE_KEY, query],
		queryFn: () => ytsRequest.getMovies<IMoviesResponse>(query),
		staleTime: ms('5s'),
	})

export default useMovies
