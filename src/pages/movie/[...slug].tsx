// @ts-nocheck

import { Anchor, Box, Button, Group, Rating, Skeleton, Stack, Text, Title } from '@mantine/core';
import { IconDownload } from '@tabler/icons';
import { useQuery } from '@tanstack/react-query';
import { GetStaticPaths, GetStaticProps } from 'next';
import Image from 'next/legacy/image';
import { Container } from '@/components/ui';
import placeholder from '@/assets/blur.jpg';

import { MovieCast, MovieGallery, MovieTorrents, useMovieStyles } from '@/components/Movie/';
import { fetch } from '@/services/client';
import { movieDetailUrl } from '@/services/config';
import { IMovie } from '@/types/Movie.types';

const MovieDetail = ({ id, movie_name }: { id: string; movie_name: string }) => {
  const { classes } = useMovieStyles();

  const { data, isLoading } = useQuery<IMovie, Error>(
    [`movie/${movie_name}`],
    async () => {
      const { movie } = await fetch(movieDetailUrl(id));
      return movie;
    },
    {
      enabled: !!id,
    }
  );

  return (
    <>
      <Skeleton visible={isLoading} width="100%">
        <Box className={classes.cover__image}>
          <Image
            src={data?.background_image_original || data?.background_image}
            alt=" not found"
            placeholder="blur"
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z8BQDwAEhQGAhKmMIQAAAABJRU5ErkJggg=="
            priority
            layout="fill"
            objectFit="cover"
          />
        </Box>
      </Skeleton>

      <Container mt="-250px">
        <Box className={classes.detail_grid}>
          <Box className={classes.innerImage}>
            <Stack>
              <Skeleton visible={isLoading}>
                <Image
                  height={550}
                  width={400}
                  src={data?.large_cover_image}
                  alt="spiderman movie not found"
                  placeholder="blur"
                  blurDataURL={placeholder.blurDataURL}
                  priority
                />
              </Skeleton>

              <Button fullWidth size="lg">
                Watch Trailer
              </Button>
            </Stack>
          </Box>

          <Box component="main" pt="lg" pr={2}>
            {isLoading ? (
              <Skeleton height={30} width={300} />
            ) : (
              <Title order={1}>{data?.title_english}</Title>
            )}

            {isLoading ? (
              <Skeleton height={20} width={400} mt="2rem" />
            ) : (
              <Text size="sm" mt="xs">
                {data?.genres.join(' / ')} / {data?.runtime}min{' '}
              </Text>
            )}

            <Group spacing="xs">
              <Rating mt="sm" readOnly value={data?.rating} count={10} fractions={2} />
              <Text size="sm" mt="xs" weight={500} color="yellow">
                {data?.rating}
              </Text>
            </Group>

            <MovieTorrents isTitle torrents={data?.torrents} />

            <Text size="xs" mt={8}>
              WEB: same quality as BluRay
            </Text>

            <Anchor
              href={`https://yifysubtitles.org/movie-imdb/${data?.imdb_code}`}
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

            <MovieCast isTitle casts={data?.cast} isLoading={isLoading} />

            <Title order={3} mt="lg">
              Synopsis
            </Title>

            {isLoading ? (
              <Skeleton height={120} width="80%" mt="2rem" />
            ) : (
              <Text mt="xs">{data?.description_full || data?.synopsis}</Text>
            )}

            <MovieGallery
              isLoading={isLoading}
              galleryImages={[
                data?.large_screenshot_image1,
                data?.large_screenshot_image2,
                data?.large_screenshot_image3,
              ]}
            />
          </Box>
        </Box>
      </Container>
    </>
  );
};
export default MovieDetail;

export const getStaticProps: GetStaticProps = async (context) => {
  const [id, movie_name] = context.params?.slug as string[];

  return {
    props: { id, movie_name },
    revalidate: 60 * 60 * 24, // Re-build page every 24 hours
  };
};

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: [],
  fallback: true,
});
