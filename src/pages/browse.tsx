import MoviesGridView from '@/components/Movie/MovieGridView';
import MovieListView from '@/components/Movie/MovieListView';

import { Container } from '@/components/ui';
import { MovieFilters } from '@/features';

const BrowsePage: React.FC = () => (
  <>
    <Container>
      <MovieFilters />
      {/* <MoviesGridView /> */}
      <MovieListView />
    </Container>
  </>
);
export default BrowsePage;
