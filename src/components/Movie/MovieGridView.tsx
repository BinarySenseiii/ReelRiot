import React from 'react';
import { Grid, Image, Text } from '@mantine/core';

type MoviesGridViewProps = {};

const MoviesGridView: React.FC<MoviesGridViewProps> = () => (
  <>
    <Grid>
      <Grid.Col sm={6} lg={3}>
        <Image
          radius="xs"
          src="https://s.studiobinder.com/wp-content/uploads/2017/12/Movie-Poster-Template-Dark-with-Image.jpg?x81279"
          alt="movie-grid-image"
          withPlaceholder
          placeholder={<Text align="center">This image contained the poster of movie</Text>}
        />
        <Text fz="xs">Year - Category1 Category2 </Text>
        <Text fw={700}>Movie Title</Text>
      </Grid.Col>
    </Grid>
  </>
);
export default MoviesGridView;
