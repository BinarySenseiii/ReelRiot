/* eslint-disable no-console */
import { useQuery } from '@tanstack/react-query';
import { useEffect } from 'react';
import { Movies } from '@/components/Movie';
import { MovieFilters } from '@/features';
import { ACTIONS, useMovieStore } from '@/context/store';
import { basicFetch } from '@/services/client';
import { IMovieResult } from '@/types/Movie.types';

const BrowsePage: React.FC = () => {
  const { searchQuery, dispatch } = useMovieStore();
  const { data, isLoading } = useQuery<IMovieResult, Error>([searchQuery], async () =>
    basicFetch(`?${searchQuery}`)
  );

  useEffect(() => {
    dispatch({
      type: ACTIONS.searchedResult,
      payload: {
        ...data,
        isLoading,
      },
    });
  }, [data]);

  return (
    <>
      <MovieFilters />
      <Movies />
    </>
  );
};
export default BrowsePage;
