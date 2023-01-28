/* eslint-disable @typescript-eslint/no-unused-vars */
import { SimpleGrid, Skeleton } from '@mantine/core';
import React from 'react';
import Movie from '@/components/Movie/Movie';
import { IMovie } from '@/types/Movie.types';

type MovieGridViewProps = {
  isLoading?: boolean;
  movies: IMovie[] | undefined;
  movieCount: number | undefined;
};

const MovieGridView: React.FC<MovieGridViewProps> = ({ isLoading, movies, movieCount }) => (
  <SimpleGrid
    cols={5}
    breakpoints={[
      { maxWidth: 1200, cols: 5 },
      { maxWidth: 992, cols: 4 },
      { maxWidth: 768, cols: 3 },
      { maxWidth: 576, cols: 2 },
      { maxWidth: 400, cols: 1 },
    ]}
  >
    {isLoading
      ? Array.from({ length: 20 }, (_, i) => <Skeleton key={i} visible={isLoading} height={300} />)
      : movies?.map((movie) => <Movie key={movie.id} movie={movie} />)}
  </SimpleGrid>
);
export default MovieGridView;
