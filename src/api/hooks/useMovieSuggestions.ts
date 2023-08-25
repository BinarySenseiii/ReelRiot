import { useQuery } from '@tanstack/react-query'
import ms from 'ms'
import { YTS_MOVIE_SUGGESTION_CACHE_KEY } from '../query-keys'
import { ytsRequest } from '../request'
import { IMoviesResponse } from './useMovies'

const useMovieSuggestions = (movie_id: string) =>
	useQuery({
		queryKey: [YTS_MOVIE_SUGGESTION_CACHE_KEY, { movie_id }],
		queryFn: () => ytsRequest.getMovieSuggestion<IMoviesResponse>(movie_id),
		staleTime: ms('5s'),
		select: data => data.data.movies,
	})

export default useMovieSuggestions
