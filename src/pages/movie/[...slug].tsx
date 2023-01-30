import {
  Anchor,
  Box,
  Button,
  Group,
  Rating,
  SimpleGrid,
  Skeleton,
  Stack,
  Text,
  Title,
} from '@mantine/core';
import { IconDownload } from '@tabler/icons';
import Image from 'next/legacy/image';
import { GetServerSideProps } from 'next';
import { useQuery } from '@tanstack/react-query';
import { Container } from '@/components/ui';
import placeholder from '@/assets/blur.jpg';

import { MovieCast, MovieGallery, MovieTorrents, useMovieStyles } from '@/components/Movie/';
import { ytsFetch } from '@/services/client';
import { movieDetailUrl, movieSuggestions } from '@/services/config';
import { IMovie } from '@/types/Movie.types';
import Movie from '@/components/Movie/Movie';

const MovieDetail = ({ movie }: { movie: IMovie }) => {
  const { classes } = useMovieStyles();

  const { data, isLoading } = useQuery<any, Error>(
    [`suggested__movie/${movie.title_english}`],
    async () => ytsFetch(movieSuggestions(movie.id))
  );

  return (
    <>
      <Box className={classes.cover__image}>
        <Image
          src={movie.background_image_original || movie.background_image}
          alt=" not found"
          placeholder="blur"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z8BQDwAEhQGAhKmMIQAAAABJRU5ErkJggg=="
          priority
          layout="fill"
          objectFit="cover"
        />
      </Box>

      <Container mt="-250px">
        <Box className={classes.detail_grid}>
          <Box className={classes.innerImage}>
            <Stack>
              <Image
                height={550}
                width={400}
                src={movie.large_cover_image}
                alt="spiderman movie not found"
                placeholder="blur"
                blurDataURL={placeholder.blurDataURL}
                priority
              />

              <Button
                fullWidth
                size="md"
                fz="lg"
                sx={(theme) => ({ fontFamily: theme.headings.fontFamily })}
              >
                Watch Trailer
              </Button>

              <Anchor href={`https://www.imdb.com/title/${movie.imdb_code}/`} target="_blank">
                <Button
                  fullWidth
                  size="md"
                  variant="white"
                  color="dark"
                  fz="lg"
                  sx={(theme) => ({ fontFamily: theme.headings.fontFamily })}
                >
                  View on IMDB
                </Button>
              </Anchor>
            </Stack>
          </Box>

          <Box component="main" pt="lg" pr={2}>
            <Title order={1}>{movie.title_english}</Title>

            <Text size="sm" mt="xs">
              {movie.genres.join(' / ')} / {movie.runtime}min{' '}
            </Text>

            <Group spacing="xs">
              <Rating mt="sm" readOnly value={movie.rating} count={10} fractions={2} />
              <Text size="sm" mt="xs" weight={500} color="yellow">
                {movie.rating}
              </Text>
            </Group>

            <MovieTorrents isTitle torrents={movie.torrents} />

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
                variant="white"
                color="dark"
                leftIcon={<IconDownload size={20} />}
              >
                Download Subtitles
              </Button>
            </Anchor>

            <MovieCast isTitle casts={movie.cast} />

            <Title order={3} mt="lg">
              Synopsis
            </Title>

            <Text mt="xs">{movie.description_full || movie.synopsis}</Text>

            <MovieGallery
              galleryImages={[
                movie.large_screenshot_image1,
                movie.large_screenshot_image2,
                movie.large_screenshot_image3,
              ]}
            />
          </Box>
        </Box>

        <Title order={3} mt="xl">
          Similar Movies
        </Title>

        <SimpleGrid
          mt="lg"
          cols={4}
          breakpoints={[
            { maxWidth: 1150, cols: 4, spacing: 'md' },
            { maxWidth: 980, cols: 3, spacing: 'md' },
            { maxWidth: 768, cols: 2, spacing: 'sm' },
          ]}
        >
          {isLoading
            ? Array.from({ length: 4 }, (_, i) => (
                <Skeleton key={i} visible={isLoading} height={300} />
              ))
            : data.movies.map((suggestion: IMovie) => <Movie key={movie.id} movie={suggestion} />)}
        </SimpleGrid>
      </Container>
    </>
  );
};
export default MovieDetail;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const [movieId] = context.query.slug as string[];

  const { movie } = await ytsFetch(movieDetailUrl(movieId));

  return {
    props: { movie },
  };
};
