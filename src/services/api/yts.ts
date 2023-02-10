import { ytsRequest } from '@/services/client';
import { getAllMovies, movieDetailUrl } from '@/services/config';
import { IMovieDetailResponse, IMoviesResponse } from '@/types/Movie.types';

export const ytsMovie = {
  search: (query: string) => ytsRequest.get<IMoviesResponse>(`${getAllMovies}?${query}`),
  getMovieDetails: (movieId: string) =>
    ytsRequest.get<IMovieDetailResponse>(movieDetailUrl(movieId)),
};
