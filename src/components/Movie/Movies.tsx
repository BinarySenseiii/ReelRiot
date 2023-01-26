import React, { useState } from 'react';
import { Box, Center, Group, Pagination } from '@mantine/core';
import { Container } from '@/components/ui';
import { TMovieView } from '@/types/Movie.types';
import { MovieListView, MovieViewToggler, MovieGridView } from '@/components/Movie/';

type MoviesProps = {};

const Movies: React.FC<MoviesProps> = () => {
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
        {view === 'grid' && <MovieGridView />}
        {view === 'list' && <MovieListView />}
      </Box>
    </Container>
  );
};
export default Movies;
