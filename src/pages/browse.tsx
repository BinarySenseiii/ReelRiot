import { Movies } from '@/components/Movie';
import { MovieFilters } from '@/features';

const BrowsePage: React.FC = () => (
  <>
    <MovieFilters />
    <Movies />
  </>
);
export default BrowsePage;
