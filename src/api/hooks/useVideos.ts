import { IVideos, queryArgs } from '@/types/movie-types'
import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { tmdbRequest } from '../request'
import { TMDB_MOVIE_CACHE_KEY } from './../query-keys'

const useVideos = ({ imdbCode, isTmdbMovie }: queryArgs) =>
	useQuery({
		queryKey: [TMDB_MOVIE_CACHE_KEY, { imdbCode, query: 'VIDEOS' }],
		queryFn: () => tmdbRequest.getMovieVideos(imdbCode),
		enabled: isTmdbMovie,
		select: React.useCallback((data: IVideos) => data.results, []),
	})

export default useVideos
