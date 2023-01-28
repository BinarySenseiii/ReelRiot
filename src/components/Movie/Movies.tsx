import { Box, Center, Group, Pagination, Skeleton, Stack, Title } from '@mantine/core';
import React, { useState } from 'react';
import { MovieGridView, MovieListView, MovieViewToggler } from '@/components/Movie/';
import { Container } from '@/components/ui';
import { TMovieView } from '@/types/Movie.types';
import { useMovieStore } from '@/context/store';

type MoviesProps = {};

const Movies: React.FC<MoviesProps> = () => {
  const [view, setView] = useState<TMovieView>('grid');
  const [pageNumber, sePageNumber] = useState<number>(1);
  const {
    searchedResult: { isLoading, movie_count, limit },
  } = useMovieStore();

  return (
    <Container pt="xl">
      <Center>
        <Stack>
          <Skeleton visible={isLoading}>
            <Title align="center" size="xs">
              {movie_count} Movies Found
            </Title>
          </Skeleton>

          <Skeleton visible={isLoading}>
            <Pagination
              page={pageNumber}
              total={Math.ceil(movie_count / limit)}
              size="sm"
              onChange={(nextPage) => sePageNumber(nextPage)}
            />
          </Skeleton>
        </Stack>
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
