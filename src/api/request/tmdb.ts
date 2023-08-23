import {
	ICredits,
	IImages,
	IMovie,
	IReviewResult,
	IVideos,
} from '@/types/movie-types'
import { getTmdbData } from '../client'
import { TmdbMovieDetails, movieMetaDataEndpoint } from '../config'

export interface IMovieResponse {
	status: string
	data: {
		movie: IMovie
	}
}

interface QueryDefinition<T> {
	endpoint: string
	fetcherFunc: (imdbCode: string) => Promise<T>
}

const createQuery = <T>(endpoint: string): QueryDefinition<T> => {
	return {
		endpoint,
		fetcherFunc: (imdbCode: string) =>
			getTmdbData<T>(movieMetaDataEndpoint(imdbCode, endpoint), {
				params: {
					api_key: process.env.NEXT_PUBLIC_API_KEY,
				},
			}),
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

	queries: [
		createQuery<ICredits>('credits'),
		createQuery<IImages>('images?&append_to_response=images'),
		createQuery<IVideos>('videos'),
		createQuery<IReviewResult>('reviews'),
	],
}

export default tmdbRequest

export interface IQueriesResult {}
