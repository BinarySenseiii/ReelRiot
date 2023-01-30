import { Box, Center, Skeleton, Stack, Title } from '@mantine/core';
import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import { MovieGridView, MoviePagination as Pagination } from '@/components/Movie';
import { Container } from '@/components/ui';
import { useMovieStore } from '@/context/store';
import { MovieFilters } from '@/features';
import { ytsFetch } from '@/services/client';
import { IMovieResult } from '@/types/Movie.types';

const BrowsePage: React.FC = () => {
  const [pageNumber, setPageNumber] = useState<number>(1);
  const { searchQuery } = useMovieStore();

  const { data, isLoading } = useQuery<IMovieResult, Error>([searchQuery], async () =>
    ytsFetch(`/list_movies.json?${searchQuery}`)
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

        <Box component="main" mt="3rem">
          <MovieGridView isLoading={isLoading} movies={data?.movies} />
        </Box>
      </Container>
    </>
  );
};
export default BrowsePage;
