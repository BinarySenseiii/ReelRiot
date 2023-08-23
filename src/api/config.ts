export const LIST_MOVIES = '/list_movies.json'
export const ytsMovieDetails = '/movie_details.json'

export const TmdbMovieDetails = (imdbCode: string) => `/find/${imdbCode}`
export const movieMetaDataEndpoint = (movieId: string, ENDPOINT: string) =>
	`/movie/${movieId}/${ENDPOINT}`

export const getMovieImages = (movieId: string | number) =>
	`/movie/${movieId}/images?&append_to_response=images`

export const movieSuggestions = (id?: number) =>
	`/movie_suggestions.json?movie_id=${id}`

export const IMAGE_BASE_URL: string = 'http://image.tmdb.org/t/p/'
// Sizes: w300, w780, w1280, original
export const BACKDROP_SIZE: string = 'w1280'
// w92, w154, w185, w342, w500, w780, original
export const POSTER_SIZE: string = 'w780'

export const getBackdropImage = (path: string) =>
	`${IMAGE_BASE_URL}${BACKDROP_SIZE}/${path}`
export const getPosterImage = (path: string) =>
	`${IMAGE_BASE_URL}${POSTER_SIZE}/${path}`
