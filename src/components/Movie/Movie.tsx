import { Box } from '@mantine/core';
import Link from 'next/link';
import React from 'react';

import { IMovie } from '@/types/element/movie-types';
import CustomImage from '../CustomImage';
import useMovieStyles from './movieSyles';

type MovieProps = {
  movie: IMovie;
};

const Movie: React.FC<MovieProps> = ({ movie }) => {
  const { classes } = useMovieStyles();

  return (
    <Link href={`/movie/${movie.id}/${movie.slug}`}>
      <Box pos="relative" className={classes.innerImage}>
        <CustomImage
          posterSrc={movie.large_cover_image}
          title={movie.title_english}
        />
      </Box>
    </Link>
  );
};

export default Movie;
