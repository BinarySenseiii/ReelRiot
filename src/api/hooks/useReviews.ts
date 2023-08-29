import { IReviewResult, queryArgs } from '@/types/movie-types'
import { useQuery } from '@tanstack/react-query'
import { tmdbRequest } from '../request'
import { TMDB_MOVIE_CACHE_KEY } from './../query-keys'
import React from 'react'

const useReviews = ({ imdbCode, isTmdbMovie }: queryArgs) =>
	useQuery({
		queryKey: [TMDB_MOVIE_CACHE_KEY, { imdbCode, query: 'REVIEWS' }],
		queryFn: () => tmdbRequest.getMovieReviews(imdbCode),
		enabled: isTmdbMovie,
		select: React.useCallback((data: IReviewResult) => data.results, []),
	})

export default useReviews
