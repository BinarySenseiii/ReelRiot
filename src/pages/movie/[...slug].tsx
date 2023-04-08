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
  ScrollArea,
  Spoiler,
  Stack,
  Tabs,
  Text,
  Title,
} from '@mantine/core';

import { IconArrowLeft, IconDownload, IconMessageCircle, IconPhoto } from '@tabler/icons';
import { useQueries } from '@tanstack/react-query';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { IMovie, ITmdbMovie } from '@/types/Movie.types';
import { ytsMovie } from '@/services/api/yts';
import { tmdbMovie } from '@/services/api/tmdb';
import noPoster from '@/assets/no-poster.png';

import poster from '@/assets/blur.jpg';
import { MovieCast, MovieImages, MovieTorrents } from '@/components/Movie';
import { Container } from '@/components/ui';
import { IMAGE_SIZE } from '@/constants';
import { getPosterImage } from '@/services/config';

interface IMovieDetailProps {
  movie: IMovie;
  tMovie: ITmdbMovie;
}

const MovieDetail: React.FC<IMovieDetailProps> = ({ movie, tMovie }) => {
  const [imgSrc, setImgSrc] = useState(
    tMovie ? getPosterImage(tMovie.poster_path) : movie.large_cover_image
  );
  const [credits, images, videos, reviews] = useQueries({
    queries: tmdbMovie.queries.map((query) => ({
      queryKey: [`${tMovie?.id}/${query}`],
      enabled: !!tMovie,
    })),
  }) as any;

  console.log(videos, reviews);

  return (
    <Container mt="xl">
      <Link href="/browse">
        <Button
          mb="xl"
          leftIcon={<IconArrowLeft size={14} />}
          size="xs"
          variant="light"
          color="gray"
        >
          Back
        </Button>
      </Link>
      <Box component="main">
        <Grid>
          <Grid.Col span={4}>
            <AspectRatio ratio={720 / 1080}>
              <Image
                src={imgSrc}
                fill
                alt={`${movie.title_english} poster not found`}
                placeholder="blur"
                blurDataURL={poster.blurDataURL}
                sizes={IMAGE_SIZE}
                onError={() => setImgSrc(noPoster.src)}
              />
            </AspectRatio>
          </Grid.Col>
          <Grid.Col span={8}>
            <Title color="white">{tMovie ? tMovie.title : movie.title_english}</Title>

            <Group spacing={6} mt="sm">
              {movie.genres.map((genre) => (
                <Badge key={genre} variant="filled">
                  <Text color="white">{genre}</Text>
                </Badge>
              ))}
            </Group>

            <Group spacing="xs" mt="sm">
              <Text fz="md">
                <Text component="strong">Release Year: </Text>
                {tMovie ? tMovie.release_date : movie.year}
              </Text>

              <Text fz="md">
                <Text component="strong">Runtime: </Text>
                {movie.runtime === 0 ? '120' : movie.runtime} Mins
              </Text>
              <Text fz="md">
                <Text component="strong">Language: </Text>
                {tMovie ? tMovie.original_language : movie.language}
              </Text>
            </Group>

            <MovieTorrents torrents={movie.torrents} isTitle />

            <Text size="xs" mt={8}>
              WEB: same quality as BluRay
            </Text>

            <Group mt="lg" spacing="xs">
              <Anchor
                href={`https://yifysubtitles.org/movie-imdb/${movie.imdb_code}`}
                target="_blank"
              >
                <Button
                  size="xs"
                  variant="white"
                  color="dark"
                  leftIcon={<IconDownload size={16} />}
                >
                  Download Subtitles
                </Button>
              </Anchor>

              <Anchor href={` https://www.imdb.com/title/${movie.imdb_code}`} target="_blank">
                <Button size="xs" color="yellow">
                  <Text color="dark">View Details On IMDB</Text>
                </Button>
              </Anchor>
            </Group>

            <MovieCast
              isLoading={credits.isLoading}
              credits={credits.data?.cast}
              cast={movie.cast}
              tmdbMovie={tMovie}
            />

            <Stack mt="xl" spacing="xs">
              <Title order={3}>Overview</Title>

              <ScrollArea style={{ height: 97 }}>
                <Spoiler maxHeight={70} showLabel="Show more" hideLabel="Hide">
                  <Box>
                    {movie.description_full !== '' ? (
                      <Text color="white" fz="sm">
                        {movie.description_full.length > 0
                          ? movie.description_full
                          : tMovie && tMovie.overview}
                      </Text>
                    ) : (
                      <Text color="white" fz="sm">
                        We apologize, but it appears that a description for this movie is not
                        currently available. Our team is working hard to gather all of the relevant
                        information for each movie in our database, and we appreciate your
                        understanding and patience while we work to complete this task. In the
                        meantime, you can visit the official website or other reliable sources to
                        learn more about the movie and its story.
                      </Text>
                    )}
                  </Box>
                </Spoiler>
              </ScrollArea>
            </Stack>
          </Grid.Col>
        </Grid>

        <Tabs
          defaultValue="gallery"
          mt="sm"
          styles={{ tabsList: { border: 0, marginBottom: '.5rem' } }}
        >
          <Tabs.List>
            <Tabs.Tab value="gallery" icon={<IconPhoto size={14} />}>
              Gallery
            </Tabs.Tab>
            <Tabs.Tab value="messages" icon={<IconMessageCircle size={14} />}>
              Trailers
            </Tabs.Tab>
          </Tabs.List>

          <Tabs.Panel value="gallery" pt="xs">
            <MovieImages
              isLoading={images.isLoading}
              backdrops={images.data?.backdrops}
              images={[
                movie.large_screenshot_image1,
                movie.large_screenshot_image2,
                movie.large_screenshot_image3,
              ]}
              tmdbMovie={tMovie}
              MovieName={movie.title_long}
            />
          </Tabs.Panel>

          <Tabs.Panel value="messages" pt="xs">
            Messages tab content
          </Tabs.Panel>
        </Tabs>
      </Box>
    </Container>
  );
};
export default MovieDetail;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const [movieId] = context.query.slug as string[];

  const { data } = await ytsMovie.getMovieDetails(movieId);
  const { movie_results } = await tmdbMovie.getMovieDetails(data.movie.imdb_code);

  return {
    props: { movie: data.movie, tMovie: movie_results.length > 0 ? movie_results[0] : null },
  };
};
