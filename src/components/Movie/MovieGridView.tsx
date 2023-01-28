import { SimpleGrid, Skeleton } from '@mantine/core';
import React from 'react';
import { MovieCard } from '@/components/Movie/Movie';

type MovieGridViewProps = {
  isLoading: boolean;
};

const MovieGridView: React.FC<MovieGridViewProps> = ({ isLoading }) => (
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
    {Array.from({ length: 20 }, (_, i) => (
      <Skeleton key={i} visible={isLoading}>
        <MovieCard />
      </Skeleton>
    ))}
  </SimpleGrid>
);
export default MovieGridView;
