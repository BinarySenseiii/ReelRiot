import { MOVIES_LIMIT } from '@/store/useMovieQueryStore'
import { QueryType } from '@/types/context/query-type'
import { getYtsData } from '../client'
import { LIST_MOVIES, ytsMovieDetails } from '../config'

const ytsRequest = {
	getMovies: <T>(query: QueryType = { page: 1 }) =>
		getYtsData<T>(LIST_MOVIES, {
			params: { ...query, limit: MOVIES_LIMIT, with_rt_ratings: true },
		}),

	getMovie: <T>(imdbCode: string) =>
		getYtsData<T>(ytsMovieDetails, {
			params: { imdb_id: imdbCode, with_images: true, with_cast: true },
		}),
}

export default ytsRequest
