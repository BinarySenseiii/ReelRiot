const TMDB_API_KEY = process.env.TMDB_API;

export const movieDetailUrl = (id?: string) =>
  `/movie_details.json?movie_id=${id}&with_images=true&with_cast=true`;

export const movieSuggestions = (id?: number) => `/movie_suggestions.json?movie_id=${id}`;

export const getTmdbMovieDetail = (imdbCode: string) =>
  `/find/${imdbCode}?api_key=${TMDB_API_KEY}&language=en-US&external_source=imdb_id`;

export const getMovieImages = (movieId: string, apiKey: string) =>
  `/movie/${movieId}/images?api_key=${apiKey}&language=en-US`;

export const getMovieReviews = (movieId: string, apiKey: string) =>
  `/movie/${movieId}/reviews?api_key=${apiKey}&language=en-US`;

export const getMovieVideos = (movieId: string, apiKey: string) =>
  `/movie/${movieId}/videos?api_key=${apiKey}&language=en-US`;

export const IMAGE_BASE_URL: string = 'http://image.tmdb.org/t/p/';
// Sizes: w300, w780, w1280, original
export const BACKDROP_SIZE: string = 'w1280';
// w92, w154, w185, w342, w500, w780, original
export const POSTER_SIZE: string = 'w780';
