import { Group, Stack, Text, Title } from '@mantine/core';
import Image from 'next/legacy/image';
import React from 'react';
import MoviesActionBtns from '@/components/Movie/MovieActionBtns';
import { useMovieStyles } from '@/components/Movie/';
import { IMovie } from '@/types/Movie.types';

type MovieProps = {
  movie: IMovie;
};

const Movie: React.FC<MovieProps> = ({ movie }) => {
  const { classes } = useMovieStyles();

  return (
    <div className={classes.imageContainer}>
      <div className={classes.innerImage}>
        <Image
          layout="responsive"
          height={550}
          width={400}
          src={movie.large_cover_image}
          alt=" not found"
        />

        <div className={classes.overlay}>
          <MoviesActionBtns direction="column" slug="2" />
        </div>
      </div>

      <Stack spacing={0} mt="xs">
        <Group align="center" spacing={4}>
          <Text size={12}> 2023 - </Text>
          <Text size={12} lineClamp={1}>
            Action, Adventure
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
