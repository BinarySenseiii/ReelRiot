import MoviesGridView from '@/components/Movies/MoviesGridView';
import { Container } from '@/components/ui';
import { MovieFilters } from '@/features';

const BrowsePage: React.FC = () => (
  <>
    <Container>
      <MovieFilters />
      <MoviesGridView />
      {/* <MovieListView /> */}
    </Container>
  </>
);
export default BrowsePage;
