import { MovieFilters } from '@/components/Movie';
import Meta from '@/components/Seo';
import React from 'react';

const BrowsePage = () => {
  return (
    <div>
      <Meta title="The Official Home Of Reel Riot - Browse Movies" />
      <MovieFilters />
    </div>
  );
};

export default BrowsePage;
