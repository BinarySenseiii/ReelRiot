import { Pagination, PaginationItemProps } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import React, { Dispatch, SetStateAction } from 'react';

type MoviePaginationProps = {
  setPageNumber: Dispatch<SetStateAction<number>>;
  pageNumber: number;
  total: number;
};

const icons: Record<string, React.ReactNode> = {
  dots: '...',
  next: 'Next',
  prev: 'Prev',
  first: 'First',
  last: 'Last',
};

export function ItemComponent({ page, active, onClick, ...others }: PaginationItemProps) {
  const Icon = icons[page];
  const children = Icon || page;

  return (
    <button type="button" onClick={onClick} {...others}>
      {children}
    </button>
  );
}

const MoviePagination: React.FC<MoviePaginationProps> = ({ setPageNumber, pageNumber, total }) => {
  const matches = useMediaQuery('(max-width: 768px)');
  return (
    <Pagination
      page={pageNumber}
      total={total}
      size={matches ? 'xs' : 'sm'}
      itemComponent={ItemComponent}
      onChange={(pn) => setPageNumber(pn)}
    />
  );
};
export default MoviePagination;
