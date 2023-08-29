export const LIST_MOVIES = '/list_movies.json'
export const ytsMovieDetails = '/movie_details.json'
export const ytsMovieSuggestions = '/movie_suggestions.json'

export const TmdbMovieDetails = (imdbCode: string) => `/find/${imdbCode}`
export const movieMetaDataEndpoint = (movieId: string, ENDPOINT: string) => `/movie/${movieId}/${ENDPOINT}`
export const CREDITS_ENDPOINT = 'credits'
export const IMAGES_ENDPOINT = 'images?&append_to_response=images'
export const VIDEOS_ENDPOINT = 'videos'
export const REVIEW_ENDPOINT = 'reviews'

export const getMovieImages = (movieId: string | number) => `/movie/${movieId}/images?&append_to_response=images`

export const movieSuggestions = (id?: number) => `/movie_suggestions.json?movie_id=${id}`

export const IMAGE_BASE_URL: string = 'http://image.tmdb.org/t/p/'
// Sizes: w300, w780, w1280, original
export const BACKDROP_SIZE: string = 'w1280'
// w92, w154, w185, w342, w500, w780, original
export const POSTER_SIZE: string = 'w780'
export const LOGO_SIZE: string = 'w300'
export const CAST_IMAGE_SIZE: string = 'w185'

export const getBackdropImage = (path: string) => `${IMAGE_BASE_URL}${BACKDROP_SIZE}/${path}`

export const getPosterImage = (path: string) => `${IMAGE_BASE_URL}${POSTER_SIZE}/${path}`

export const getLogoImage = (path: string) => `${IMAGE_BASE_URL}${LOGO_SIZE}/${path}`

export const getCastImage = (path: string = '') => `${IMAGE_BASE_URL}${CAST_IMAGE_SIZE}/${path}`

export const getReviewImage = (path: string = '') => `${IMAGE_BASE_URL}${POSTER_SIZE}/${path}`

export const NOT_FOUND_TEXT = `We apologize, but it appears that a description for this movie
  is not currently available. Our team is working hard to gather
  all of the relevant information for each movie in our
  database, and we appreciate your understanding and patience
  while we work to complete this task. In the meantime, you can
  visit the official website or other reliable sources to learn
  more about the movie and its story.`
