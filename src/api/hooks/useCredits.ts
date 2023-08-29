import { tmdbRequest } from '@/api/request'
import { TMDB_MOVIE_CACHE_KEY } from './../query-keys'
import { useQuery } from '@tanstack/react-query'
import { ICredits, queryArgs } from '@/types/movie-types'

const useCredits = ({ imdbCode, isTmdbMovie }: queryArgs, select?: (data: ICredits) => void) =>
	useQuery({
		queryKey: [TMDB_MOVIE_CACHE_KEY, { imdbCode, query: 'CREDITS' }],
		queryFn: () => tmdbRequest.getMovieCredits(imdbCode),
		enabled: isTmdbMovie,
		select,
	})

export default useCredits
