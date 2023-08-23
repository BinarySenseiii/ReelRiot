import { IMovie } from '@/types/movie-types'
import { useQuery } from '@tanstack/react-query'
import ms from 'ms'
import { YTS_MOVIE_CACHE_KEY } from '../query-keys'
import { ytsRequest } from '../request'

export interface IMovieResponse {
	status: string
	data: {
		movie: IMovie
	}
}

const useMovie = (imdbCode: string) =>
	useQuery({
		queryKey: [YTS_MOVIE_CACHE_KEY, { imdbCode }],
		queryFn: () => ytsRequest.getMovie<IMovieResponse>(imdbCode),
		staleTime: ms('5s'),
		select: data => data.data.movie,
	})

export default useMovie
