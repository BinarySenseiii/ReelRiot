import { Stack } from '@mantine/core';
import React from 'react';
import { MovieListCard } from '@/components/Movie/Movie';

type MovieListViewProps = {};

const MovieListView: React.FC<MovieListViewProps> = () => (
  <Stack>
    {Array.from({ length: 20 }, (_, i) => (
      <MovieListCard key={i} />
    ))}
  </Stack>
);
export default MovieListView;
