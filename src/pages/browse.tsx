import MoviesGridView from '@/components/Movie/MovieGridView';
import { MovieFilters } from '@/features';

const BrowsePage: React.FC = () => (
  <>
    <>
      <MovieFilters />
      <MoviesGridView />
      {/* <MovieListView /> */}
    </>
  </>
);
export default BrowsePage;
