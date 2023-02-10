import { Box, Center, Skeleton, Stack, Title } from '@mantine/core';
import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import { MovieGridView, MoviePagination as Pagination } from '@/components/Movie';
import { Container } from '@/components/ui';
import { useMovieStore } from '@/context/store';
import { MovieFilters } from '@/features';
import { ytsMovie } from '@/services/api/yts';
import { IMoviesResponse } from '@/types/Movie.types';

const BrowsePage: React.FC = () => {
  const [pageNumber, setPageNumber] = useState<number>(1);
  const { query } = useMovieStore();

  const { data: result, isLoading } = useQuery<IMoviesResponse, Error>({
    queryKey: [query],
    queryFn: () => ytsMovie.search(query),
  });

  const totalPages = result?.data ? Math.ceil(result.data.movie_count / result.data.limit) : 0;

  return (
    <>
      <MovieFilters pageNumber={pageNumber} isLoading={isLoading} setPageNumber={setPageNumber} />

      <Container pt="xl">
        <Center>
          <Stack>
            <Skeleton visible={isLoading}>
              <Title align="center" fz="lg">
                {result?.data.movie_count} Movies Found
              </Title>
            </Skeleton>

            <Pagination pageNumber={pageNumber} total={totalPages} setPageNumber={setPageNumber} />
          </Stack>
        </Center>

        <Box component="main" mt="3rem">
          <MovieGridView isLoading={isLoading} movies={result?.data.movies} />
        </Box>
      </Container>
    </>
  );
};
export default BrowsePage;
