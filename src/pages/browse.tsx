import { MovieFilters } from '@/components/Movie';
import Meta from '@/components/Seo';

import BrowseBanner from './BrowseBanner';
import { Box } from '@mantine/core';

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
