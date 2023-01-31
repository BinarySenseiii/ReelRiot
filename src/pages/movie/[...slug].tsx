import { GetServerSideProps } from 'next';
import LegacyImage from 'next/legacy/image';

import { Box, Grid, Overlay, Text, Title } from '@mantine/core';
import Image from 'next/image';
import { tmdbFetch, ytsFetch } from '@/services/client';
import {
  getBackdropImage,
  getMovieImages,
  getMovieReviews,
  getMovieVideos,
  getTmdbMovieDetail,
  movieDetailUrl,
} from '@/services/config';
import { IImages, IMovie, IReviewResult, ITmdbMovie, IVideoResult } from '@/types/Movie.types';

import pb from '@/assets/bg.jpg';
import { Container } from '@/components/ui';
import { MovieTorrents } from '@/components/Movie';

interface IMovieDetailProps {
  movie: IMovie;
  tmdbMovie: ITmdbMovie;
  images: IImages;
  reviews: IReviewResult;
  videos: IVideoResult;
}

const MovieDetail: React.FC<IMovieDetailProps> = ({
  movie,
  tmdbMovie,
  images,
  // reviews,
  // videos,
}) => (
  <>
    <Box sx={{ height: '50vh', position: 'relative' }}>
      <Image
        src={
          getBackdropImage(tmdbMovie.backdrop_path) ||
          movie.background_image_original ||
          getBackdropImage(images.backdrops[0].file_path)
        }
        alt={`${movie.title_english}not found`}
        fill
        placeholder="blur"
        blurDataURL={pb.blurDataURL}
        priority
        style={{ objectFit: 'cover', objectPosition: 'top' }}
      />
      <Overlay opacity={0.9} color="#000" zIndex={5} />

      <Container pt="140px">
        <Grid pos="relative" sx={{ zIndex: 99 }}>
          <Grid.Col span={3}>
            <LegacyImage
              key={movie.id}
              layout="responsive"
              height={550}
              width={400}
              src={movie.large_cover_image}
              alt={`${movie.title} not found`}
            />
          </Grid.Col>
          <Grid.Col span={9}>
            <Title>{movie.title_english}</Title>
            <Text>
              <strong>Released Date:</strong> {tmdbMovie.release_date} - <strong>Run Time:</strong>{' '}
              {movie.runtime}{' '}
            </Text>
            <Text mt="md" lineClamp={3}>
              {tmdbMovie.overview || movie.synopsis}
            </Text>

            <MovieTorrents isTitle torrents={movie.torrents} />
          </Grid.Col>
        </Grid>
      </Container>
    </Box>
  </>
);
export default MovieDetail;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const [movieId] = context.query.slug as string[];

  const { movie } = await ytsFetch(movieDetailUrl(movieId));

  const { movie_results } = await tmdbFetch(getTmdbMovieDetail(movie.imdb_code));

  const tMovie = movie_results[0];

  const images = await tmdbFetch(getMovieImages(tMovie?.id));
  const reviews = await tmdbFetch(getMovieReviews(tMovie?.id));
  const videos = await tmdbFetch(getMovieVideos(tMovie?.id));

  return {
    props: { movie, tmdbMovie: movie_results[0], images, reviews, videos },
  };
};
