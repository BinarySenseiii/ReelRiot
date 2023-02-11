export const getAllMovies = '/list_movies.json';

export const movieDetailUrl = (id?: string) =>
  `/movie_details.json?movie_id=${id}&with_images=true&with_cast=true`;

export const movieSuggestions = (id?: number) => `/movie_suggestions.json?movie_id=${id}`;

export const getTmdbMovieDetail = (imdbCode: string) => `/find/${imdbCode}?external_source=imdb_id`;

export const getMovieImages = (movieId: string | number) =>
  `/movie/${movieId}/images?&append_to_response=images`;

export const getMovieReviews = (movieId: number) => `/movie/${movieId}/reviews`;
export const getMovieVideos = (movieId: number) => `/movie/${movieId}/videos`;
export const getMovieCredit = (movieId: number) => `/movie/${movieId}/credits`;

export const IMAGE_BASE_URL: string = 'http://image.tmdb.org/t/p/';
// Sizes: w300, w780, w1280, original
export const BACKDROP_SIZE: string = 'w1280';
// w92, w154, w185, w342, w500, w780, original
export const POSTER_SIZE: string = 'w780';

export const getBackdropImage = (path: string) => `${IMAGE_BASE_URL}${BACKDROP_SIZE}/${path}`;
export const getPosterImage = (path: string) => `${IMAGE_BASE_URL}${POSTER_SIZE}/${path}`;
