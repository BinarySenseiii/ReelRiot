import { Box, Center, Group, Skeleton, Stack, Title } from '@mantine/core';
import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import {
  MovieGridView,
  MovieListView,
  MovieViewToggler,
  MoviePagination as Pagination,
} from '@/components/Movie';
import { Container } from '@/components/ui';
import { useMovieStore } from '@/context/store';
import { MovieFilters } from '@/features';
import { fetch } from '@/services/client';
import { IMovieResult, TMovieView } from '@/types/Movie.types';

const BrowsePage: React.FC = () => {
  const [view, setView] = useState<TMovieView>('grid');
  const [pageNumber, setPageNumber] = useState<number>(1);
  const { searchQuery } = useMovieStore();

  const { data, isLoading } = useQuery<IMovieResult, Error>([searchQuery], async () =>
    fetch(`?${searchQuery}`)
  );

  return (
    <>
      <MovieFilters pageNumber={pageNumber} isLoading={isLoading} setPageNumber={setPageNumber} />

      <Container pt="xl">
        <Center>
          <Stack>
            <Skeleton visible={isLoading}>
              <Title align="center" fz="lg">
                {data?.movie_count} Movies Found
              </Title>
            </Skeleton>

            <Pagination
              pageNumber={pageNumber}
              total={data ? Math.ceil(data.movie_count / data.limit) : 0}
              setPageNumber={setPageNumber}
            />
          </Stack>
        </Center>

        <Group position="right" mt="xl" display={{ base: 'none', sm: 'flex' }}>
          <MovieViewToggler view={view} setView={setView} />
        </Group>

        <Box component="main" mt="xl">
          {view === 'grid' && <MovieGridView isLoading={isLoading} movies={data?.movies} />}
          {view === 'list' && <MovieListView isLoading={isLoading} movies={data?.movies} />}
        </Box>
      </Container>
    </>
  );
};
export default BrowsePage;
