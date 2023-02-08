/* eslint-disable no-console */
import { GetServerSideProps } from 'next';

import {
  Anchor,
  AspectRatio,
  Badge,
  Box,
  Button,
  Grid,
  Group,
  Overlay,
  Paper,
  Stack,
  Text,
  Title,
} from '@mantine/core';
import { useQuery } from '@tanstack/react-query';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { IconDownload } from '@tabler/icons';
import {
  IImages,
  IMovie,
  IReviewResult,
  ITmdbMovieResult,
  IVideoResult,
} from '@/types/Movie.types';
import {
  getBackdropImage,
  getMovieImages,
  getMovieReviews,
  getMovieVideos,
  getPosterImage,
  getTmdbMovieDetail,
  movieDetailUrl,
} from '@/services/config';
import { tmdbFetch, ytsFetch } from '@/services/client';

import pb from '@/assets/bg.jpg';
import poster from '@/assets/blur.jpg';
import { MovieTorrents, useMovieStyles } from '@/components/Movie';
import { Container } from '@/components/ui';

interface IMovieDetailProps {
  movie: IMovie;
  tmdbMovie: ITmdbMovieResult;
  images: IImages;
  reviews: IReviewResult;
  videos: IVideoResult;
}

const MovieDetail: React.FC<IMovieDetailProps> = ({
  movie,
  tmdbMovie,
  // images,
  // reviews,
  // videos,
}) => {
  const [isMovie, setIsMovie] = useState<boolean>();
  const { classes } = useMovieStyles();

  useEffect(() => setIsMovie(tmdbMovie.movie_results.length > 0), []);

  const images = useQuery(
    [`${movie.title_english}/images`],
    () => tmdbFetch(getMovieImages(tmdbMovie.movie_results[0].id)),
    {
      enabled: isMovie,
    }
  );

  const videos = useQuery(
    [`${movie.title_english}/videos`],
    () => tmdbFetch(getMovieVideos(tmdbMovie.movie_results[0].id)),
    {
      enabled: isMovie,
    }
  );

  const reviews = useQuery(
    [`${movie.title_english}/reviews`],
    () => tmdbFetch(getMovieReviews(tmdbMovie.movie_results[0].id)),
    {
      enabled: isMovie,
    }
  );

  console.log(images, reviews, videos);

  return (
    <>
      <Box className={classes.backgroundContainer}>
        <Image
          src={
            isMovie
              ? getBackdropImage(tmdbMovie.movie_results[0].backdrop_path)
              : movie.background_image
          }
          alt={`${movie.title_long} background not found`}
          fill
          className={classes.backgroundImage}
          placeholder="blur"
          blurDataURL={pb.blurDataURL}
        />

        <Overlay opacity={0.6} color="#000" blur={2} />
      </Box>

      <Container>
        <Paper
          shadow="sm"
          p="md"
          withBorder
          mt="-48px"
          component="main"
          className={classes.mainWrapper}
        >
          <Grid>
            <Grid.Col span={4}>
              <AspectRatio ratio={720 / 1080}>
                <Image
                  src={
                    isMovie
                      ? getPosterImage(tmdbMovie.movie_results[0].poster_path)
                      : movie.large_cover_image
                  }
                  fill
                  alt={`${movie.title_english} poster not found`}
                  placeholder="blur"
                  blurDataURL={poster.blurDataURL}
                  sizes="(max-width: 768px) 100vw,
                  (max-width: 1200px) 50vw,
                  33vw"
                />
              </AspectRatio>
            </Grid.Col>
            <Grid.Col span={8}>
              <Title color="white">{movie.title_english ?? tmdbMovie.movie_results[0].title}</Title>

              <Group spacing={6} mt="sm">
                {movie.genres.map((genre) => (
                  <Badge key={genre} variant="filled">
                    <Text color="white">{genre}</Text>
                  </Badge>
                ))}
              </Group>

              <Group spacing="xs" mt="sm">
                <Text fz="md">
                  <Text component="strong">Release Date: </Text>
                  {isMovie ? tmdbMovie.movie_results[0].release_date : movie.date_uploaded}
                </Text>

                <Text fz="md">
                  <Text component="strong">Runtime: </Text>
                  {movie.runtime} Mins
                </Text>
                <Text fz="md">
                  <Text component="strong">Language: </Text>
                  {movie.language}
                </Text>
              </Group>

              <MovieTorrents torrents={movie.torrents} isTitle />

              <Text size="xs" mt={8}>
                WEB: same quality as BluRay
              </Text>

              <Anchor
                href={`https://yifysubtitles.org/movie-imdb/${movie.imdb_code}`}
                target="_blank"
              >
                <Button
                  size="xs"
                  mt="lg"
                  sx={(theme) => ({
                    background: 'white',
                    color: theme.colors.dark[9],
                    '&:hover': { background: theme.colors.dark[0] },
                  })}
                  leftIcon={<IconDownload size={20} />}
                >
                  Download Subtitles
                </Button>
              </Anchor>

              <Stack spacing={2} mt="md">
                <Title order={2}>Overview</Title>
                <Text color="white" fz="sm">
                  {isMovie ? tmdbMovie.movie_results[0].overview : movie.description_full}
                </Text>
              </Stack>
            </Grid.Col>
          </Grid>
        </Paper>
      </Container>
    </>
  );
};
export default MovieDetail;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const [movieId] = context.query.slug as string[];

  const { movie } = await ytsFetch(movieDetailUrl(movieId));
  const tmdbMovie = await tmdbFetch(getTmdbMovieDetail(movie.imdb_code));

  return {
    props: { movie, tmdbMovie },
  };
};
