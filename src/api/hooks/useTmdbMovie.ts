import { ITmdbMovieResult } from '@/types/movie-types'
import { useQuery } from '@tanstack/react-query'
import ms from 'ms'
import { TMDB_MOVIE_CACHE_KEY } from '../query-keys'
import { tmdbRequest } from '../request'

const useTmdbMovie = (imdbCode: string) =>
	useQuery({
		queryKey: [TMDB_MOVIE_CACHE_KEY, { imdbCode }],
		queryFn: () => tmdbRequest.getMovieDetails<ITmdbMovieResult>(imdbCode),
		staleTime: ms('5s'),
		select: data => data.movie_results,
	})

export default useTmdbMovie
