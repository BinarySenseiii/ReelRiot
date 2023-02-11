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
  Spoiler,
  Tabs,
  Text,
  Title,
} from '@mantine/core';

import {
  IconArrowLeft,
  IconDownload,
  IconMessageCircle,
  IconPhoto,
  IconVideo,
} from '@tabler/icons';
import { useQueries } from '@tanstack/react-query';
import Image from 'next/image';
import Link from 'next/link';
import { IMovie, ITmdbMovie } from '@/types/Movie.types';
import { ytsMovie } from '@/services/api/yts';
import { tmdbMovie } from '@/services/api/tmdb';

import poster from '@/assets/blur.jpg';
import { MovieCast, MovieTorrents } from '@/components/Movie';
import { Container } from '@/components/ui';
import { getPosterImage } from '@/services/config';

interface IMovieDetailProps {
  movie: IMovie;
  tMovie: ITmdbMovie;
}

const MovieDetail: React.FC<IMovieDetailProps> = ({ movie, tMovie }) => {
  const [credits, images, videos, reviews] = useQueries({
    queries: tmdbMovie.queries.map((query) => ({
      queryKey: [`${tMovie.id}/${query}`],
      enabled: !!tMovie,
    })),
  }) as any;

  console.log(images, videos, reviews);

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
                src={tMovie ? getPosterImage(tMovie.poster_path) : movie.large_cover_image}
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

            <Tabs defaultValue="gallery" mt="xl">
              <Tabs.List>
                <Tabs.Tab value="gallery" icon={<IconMessageCircle size={14} />}>
                  Overview
                </Tabs.Tab>
                <Tabs.Tab value="messages" icon={<IconPhoto size={14} />}>
                  Images
                </Tabs.Tab>
                <Tabs.Tab value="settings" icon={<IconVideo size={14} />}>
                  Videos
                </Tabs.Tab>
              </Tabs.List>

              <Tabs.Panel value="gallery" pt="xs">
                <Spoiler maxHeight={110} showLabel="Show more" hideLabel="Hide">
                  <Text color="white" fz="sm">
                    {movie.description_full.length > 0
                      ? movie.description_full
                      : tMovie && tMovie.overview}
                  </Text>
                </Spoiler>
              </Tabs.Panel>

              <Tabs.Panel value="messages" pt="xs">
                Messages tab content
              </Tabs.Panel>

              <Tabs.Panel value="settings" pt="xs">
                Settings tab content
              </Tabs.Panel>
            </Tabs>
          </Grid.Col>
        </Grid>
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
