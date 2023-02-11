import { request, requestActions } from '@/services/client';
import { getAllMovies, movieDetailUrl } from '@/services/config';
import { IMovieDetailResponse, IMoviesResponse } from '@/types/Movie.types';

export const ytsMovie = {
  search: (query: string) =>
    requestActions.get<IMoviesResponse>(request.yts, `${getAllMovies}?${query}`),
  getMovieDetails: (movieId: string) =>
    requestActions.get<IMovieDetailResponse>(request.yts, movieDetailUrl(movieId)),
};
