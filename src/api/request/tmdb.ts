import { ICredits, IImages, IMovie, IReviewResult, ITmdbMovieResult, IVideos } from '@/types/movie-types'
import { getTmdbData } from '../client'
import {
	CREDITS_ENDPOINT,
	IMAGES_ENDPOINT,
	REVIEW_ENDPOINT,
	TmdbMovieDetails,
	VIDEOS_ENDPOINT,
	movieMetaDataEndpoint,
} from '../config'

export interface IMovieResponse {
	status: string
	data: {
		movie: IMovie
	}
}

const IMDB_PARAMS = {
	params: {
		external_source: 'imdb_id',
	},
}

const tmdbRequest = {
	getMovieDetails: (imdbCode: string) => getTmdbData<ITmdbMovieResult>(TmdbMovieDetails(imdbCode), IMDB_PARAMS),
	getMovieCredits: (imdbCode: string) => getTmdbData<ICredits>(movieMetaDataEndpoint(imdbCode, CREDITS_ENDPOINT)),
	getMovieImages: (imdbCode: string) => getTmdbData<IImages>(movieMetaDataEndpoint(imdbCode, IMAGES_ENDPOINT)),
	getMovieVideos: (imdbCode: string) => getTmdbData<IVideos>(movieMetaDataEndpoint(imdbCode, VIDEOS_ENDPOINT)),
	getMovieReviews: (imdbCode: string) => getTmdbData<IReviewResult>(movieMetaDataEndpoint(imdbCode, REVIEW_ENDPOINT)),
}

export default tmdbRequest
