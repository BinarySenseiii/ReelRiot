/* eslint-disable no-console */
import { useQuery } from '@tanstack/react-query';
import { GetServerSideProps } from 'next';
import { Container } from '@/components/ui';

import { tmdbFetch, ytsFetch } from '@/services/client';
import {
  getMovieImages,
  getMovieReviews,
  getMovieVideos,
  getTmdbMovieDetail,
  movieDetailUrl,
} from '@/services/config';
import { IMovie } from '@/types/Movie.types';

const MovieDetail = ({
  movie,
  tmdbMovie,
  apiKey,
}: {
  movie: IMovie;
  tmdbMovie: any;
  apiKey: string;
}) => {
  const { data: images } = useQuery<any, Error>([`${tmdbMovie.original_title}/images`], async () =>
    tmdbFetch(getMovieImages(tmdbMovie.id, apiKey))
  );

  const { data: reviews } = useQuery<any, Error>(
    [`${tmdbMovie.original_title}/reviews`],
    async () => tmdbFetch(getMovieReviews(tmdbMovie.id, apiKey))
  );

  const { data: videos } = useQuery<any, Error>([`${tmdbMovie.original_title}/videos`], async () =>
    tmdbFetch(getMovieVideos(tmdbMovie.id, apiKey))
  );

  console.table([movie, images, reviews, videos]);

  return (
    <>
      <Container>content will goes here</Container>
    </>
  );
};
export default MovieDetail;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const [movieId] = context.query.slug as string[];

  const { movie } = await ytsFetch(movieDetailUrl(movieId));

  const { movie_results } = await tmdbFetch(getTmdbMovieDetail(movie.imdb_code));

  return {
    props: { movie, tmdbMovie: movie_results[0], apiKey: process.env.TMDB_API },
  };
};
