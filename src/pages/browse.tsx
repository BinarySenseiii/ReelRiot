/* eslint-disable no-console */
import { useQuery } from '@tanstack/react-query';
import { Movies } from '@/components/Movie';
import { MovieFilters } from '@/features';
import { useMovieStore } from '@/context/store';
import { basicFetch } from '@/services/client';
import { IMovieResult } from '@/types/Movie.types';

const BrowsePage: React.FC = () => {
  const { searchQuery } = useMovieStore();
  const { data, isLoading } = useQuery<IMovieResult, Error>([searchQuery], async () =>
    basicFetch(`?${searchQuery}`)
  );

  console.log(data?.movies);

  return (
    <>
      <MovieFilters isLoading={isLoading} />
      <Movies isLoading={isLoading} />
    </>
  );
};
export default BrowsePage;
