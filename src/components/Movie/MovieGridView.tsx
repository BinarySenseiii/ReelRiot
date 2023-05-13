import { SimpleGrid, Skeleton } from '@mantine/core';
import React from 'react';
import Movie from '@/components/Movie/Movie';
import { IMovie } from '@/types/element/movie-types';

type MovieGridViewProps = {
  isLoading: boolean;
  movies: IMovie[] | undefined;
};

const MovieGridView: React.FC<MovieGridViewProps> = ({ isLoading, movies }) => (
  <SimpleGrid
    mt="xl"
    cols={6}
    breakpoints={[
      { maxWidth: 1200, cols: 5 },
      { maxWidth: 768, cols: 4 },
      { maxWidth: 576, cols: 3 },
      { maxWidth: 400, cols: 2 },
    ]}
    spacing="md"
  >
    {isLoading
      ? Array.from({ length: 18 }, (_, i) => (
          <Skeleton key={i} visible={isLoading} height={300} />
        ))
      : movies?.map((movie) => <Movie key={movie.id} movie={movie} />)}
  </SimpleGrid>
);
export default MovieGridView;
