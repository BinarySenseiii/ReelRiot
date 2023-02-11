import { requestActions, request } from '@/services/client';
import { getTmdbMovieDetail } from '@/services/config';
import { ITmdbMovieResult } from '@/types/Movie.types';

export const tmdbMovie = {
  getMovieDetails: (movieId: string) =>
    requestActions.get<ITmdbMovieResult>(request.tmdb, getTmdbMovieDetail(movieId)),
  queries: ['credits', 'images?&append_to_response=images', 'videos', 'reviews'],
};
