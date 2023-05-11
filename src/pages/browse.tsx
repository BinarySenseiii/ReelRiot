import Meta from '@/components/Seo';

import dynamic from 'next/dynamic';

import BrowseBanner from './BrowseBanner';
import { Box } from '@mantine/core';

const MovieFilters = dynamic(() =>
  import('@/components/Movie').then((mod) => mod.MovieFilters),
);

const BrowsePage = () => {
  return (
    <div>
      <Meta title="The Official Home Of Reel Riot - Browse Movies" />
      <BrowseBanner />
      <MovieFilters />
      <Box h="400px" />
    </div>
  );
};

export default BrowsePage;
