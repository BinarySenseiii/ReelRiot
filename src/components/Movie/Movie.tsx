import { AspectRatio, Group, Stack, Text, Title } from '@mantine/core';
import Image from 'next/image';
import React from 'react';
import { useMovieStyles } from '@/components/Movie/';
import MoviesActionBtns from '@/components/Movie/MovieActionBtns';
import { arrayToString } from '@/helpers';
import { IMovie } from '@/types/Movie.types';

type MovieProps = {
  movie: IMovie;
};

const Movie: React.FC<MovieProps> = ({ movie }) => {
  const { classes } = useMovieStyles();

  return (
    <div className={classes.imageContainer}>
      <div className={classes.innerImage}>
        <AspectRatio ratio={0.7}>
          <Image
            src={movie.large_cover_image ?? movie.medium_cover_image}
            alt=" not found"
            placeholder="blur"
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z8BQDwAEhQGAhKmMIQAAAABJRU5ErkJggg=="
            priority
            fill
            sizes="(max-width: 768px) 100vw,
            (max-width: 1200px) 50vw,
            33vw"
          />
        </AspectRatio>

        <div className={classes.overlay}>
          <MoviesActionBtns
            movieid={movie.id}
            direction="column"
            slug={movie.slug}
            youtubeId={movie.yt_trailer_code}
          />
        </div>
      </div>

      <Stack spacing={0} mt="xs">
        <Group align="center" spacing={4}>
          <Text size={12}> {movie.year} - </Text>
          <Text size={12} lineClamp={1}>
            {arrayToString(movie.genres)}
          </Text>
        </Group>
        <Title fz="md" weight={700} lineClamp={1} mt={1}>
          {movie.title}
        </Title>
      </Stack>
    </div>
  );
};

export default Movie;
