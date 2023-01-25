import MoviesGridView from '@/components/Movie/MovieGridView';
import MovieListView from '@/components/Movie/MovieListView';

import { MovieFilters } from '@/features';

const BrowsePage: React.FC = () => (
  <>
    <>
      <MovieFilters />
      {/* <MoviesGridView /> */}
      <MovieListView />
    </Container>
  </>
);
export default BrowsePage;
