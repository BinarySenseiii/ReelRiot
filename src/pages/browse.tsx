import Meta from '@/components/Seo';

import dynamic from 'next/dynamic';

import BrowseBanner from './BrowseBanner';
import { Box, Pagination } from '@mantine/core';
import { useMovies } from '@/hooks/api/yts';
import { useMovieQuery } from '@/store/useMovieQueryStore';
import { Container } from '@/components/ui';
import MovieGridView from '@/components/Movie/MovieGridView';

const MovieFilters = dynamic(() =>
  import('@/components/Movie').then((mod) => mod.MovieFilters),
);

const BrowsePage = () => {
  const query = useMovieQuery();
  const { data: result, isLoading } = useMovies(query);

  console.log(result?.data.movies);

  return (
    <div>
      <Meta title="The Official Home Of Reel Riot - Browse Movies" />
      <BrowseBanner />
      <MovieFilters />
      <Container pt="xl">
        <Box component="main" mt="3rem">
          <MovieGridView isLoading={isLoading} movies={result?.data.movies} />
        </Box>
      </Container>
    </div>
  );
};

export default BrowsePage;
