import { IMovie } from '@/types/movie-types'
import { getTmdbData } from '../client'
import { TmdbMovieDetails } from '../config'

export interface IMovieResponse {
	status: string
	data: {
		movie: IMovie
	}
}

const tmdbRequest = {
	getMovieDetails: <T>(imdbCode: string) =>
		getTmdbData<T>(TmdbMovieDetails(imdbCode), {
			params: {
				api_key: process.env.NEXT_PUBLIC_API_KEY,
				external_source: 'imdb_id',
			},
		}),
}

export default tmdbRequest
