import Meta from '@/components/Seo';

import dynamic from 'next/dynamic';

import MovieGridView from '@/components/Movie/MovieGridView';
import { Container } from '@/components/ui';
import { useMovies } from '@/hooks/api/yts';
import { useMovieQuery } from '@/store/useMovieQueryStore';
import { Box, Pagination, Stack, Title, Skeleton } from '@mantine/core';
import BrowseBanner from './BrowseBanner';
import { useState } from 'react';

const MovieFilters = dynamic(() =>
  import('@/components/Movie').then((mod) => mod.MovieFilters),
);

const BrowsePage = () => {
  const query = useMovieQuery();
  const [page, setPage] = useState<number>(1);
  const { data: result, isLoading } = useMovies(query, page);

  const totalPages = result?.data
    ? Math.ceil(result.data.movie_count / result.data.limit)
    : 0;

  return (
    <div>
      <Meta title="The Official Home Of Reel Riot - Browse Movies" />
      <BrowseBanner />
      <MovieFilters isLoading={isLoading} />
      <Container>
        <Skeleton visible={isLoading} maw="400px" mx="auto">
          <Stack spacing="md" my="xl" align="center">
            <Title align="center" fz="lg">
              {result?.data.movie_count} Movies Found
            </Title>
            <Pagination
              value={page}
              total={totalPages}
              onChange={setPage}
              size="sm"
            />
          </Stack>
        </Skeleton>
        <MovieGridView isLoading={isLoading} movies={result?.data.movies} />
      </Container>
    </div>
  );
};

export default BrowsePage;
