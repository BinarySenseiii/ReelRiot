import { Box, Center, SegmentedControl } from '@mantine/core';
import { IconGridDots, IconList } from '@tabler/icons';
import React, { Dispatch, SetStateAction } from 'react';
import { TMovieView } from '@/types/Movie.types';

type MovieViewTogglerProps = {
  view: TMovieView;
  setView: Dispatch<SetStateAction<TMovieView>>;
};

const MovieViewToggler: React.FC<MovieViewTogglerProps> = ({ view, setView }) => (
  <SegmentedControl
    size="sm"
    color="brand"
    value={view}
    onChange={(t) => setView(t as TMovieView)}
    data={[
      {
        label: (
          <Center>
            <IconGridDots size={16} />
            <Box ml={4}>GRID</Box>
          </Center>
        ),
        value: 'grid',
      },
      {
        label: (
          <Center>
            <IconList strokeWidth={3} size={17} />
            <Box ml={4}>LIST</Box>
          </Center>
        ),
        value: 'list',
      },
    ]}
  />
);
export default MovieViewToggler;
