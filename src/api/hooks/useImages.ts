import { IImages, queryArgs } from '@/types/movie-types'
import { useQuery } from '@tanstack/react-query'
import { tmdbRequest } from '../request'
import { TMDB_MOVIE_CACHE_KEY } from './../query-keys'

const useImages = ({ imdbCode, isTmdbMovie }: queryArgs) =>
	useQuery({
		queryKey: [TMDB_MOVIE_CACHE_KEY, { imdbCode, query: 'IMAGES' }],
		queryFn: () => tmdbRequest.getMovieImages(imdbCode),
		enabled: isTmdbMovie,
	})

export default useImages
