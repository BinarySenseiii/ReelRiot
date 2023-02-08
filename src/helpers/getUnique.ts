import { ITorrent } from '@/types/Movie.types';

const uniqueVals = (array: ITorrent[]) => {
  const uniqueQualities = new Set();
  const filteredArray = array.filter((item: ITorrent) => {
    if (!uniqueQualities.has(item.quality)) {
      uniqueQualities.add(item.quality);
      return true;
    }
    return false;
  });

  return filteredArray;
};

export default uniqueVals;
