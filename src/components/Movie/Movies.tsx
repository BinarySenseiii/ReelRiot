import { Box, Center, Group, Pagination } from '@mantine/core';
import React, { useState } from 'react';
import { MovieGridView, MovieListView, MovieViewToggler } from '@/components/Movie/';
import { Container } from '@/components/ui';
import { TMovieView } from '@/types/Movie.types';

type MoviesProps = {
  isLoading: boolean;
};

const Movies: React.FC<MoviesProps> = ({ isLoading }) => {
  const [view, setView] = useState<TMovieView>('grid');

  return (
    <Container pt="xl">
      <Center>
        <Pagination total={5} size="sm" />
      </Center>

      <Group position="right" mt="xl" display={{ base: 'none', sm: 'flex' }}>
        <MovieViewToggler view={view} setView={setView} />
      </Group>

      <Box component="main" mt="xl">
        {view === 'grid' && <MovieGridView isLoading={isLoading} />}
        {view === 'list' && <MovieListView />}
      </Box>
    </Container>
  );
};
export default Movies;
