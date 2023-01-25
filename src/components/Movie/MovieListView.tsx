import { Button, Container, Grid, Image, Space, Stack, Text } from '@mantine/core';
import React from 'react';

type MovieListViewProps = {};

const MovieListView: React.FC<MovieListViewProps> = () => (
  <Stack>
    <Container>
      <Grid>
        <Grid.Col sm={2} lg={1}>
          <Image
            radius="xs"
            src="https://s.studiobinder.com/wp-content/uploads/2017/12/Movie-Poster-Template-Dark-with-Image.jpg?x81279"
            alt="movie-grid-image"
            withPlaceholder
            placeholder={<Text align="center">This image contained the poster of movie</Text>}
          />
        </Grid.Col>
        <Grid.Col fw={700} sm={10} lg={9}>
          <Text fz="lg">Movie Title</Text>
          <Text fw={300} fz="xs">
            Category1, Category2
          </Text>
          <Text fw={500} fz="sm">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio accusamus atque
            vitae. Amet reprehenderit fugit ea asperiores, tenetur, minima nesciunt dolorum quia
            dolore aperiam quibusdam molestiae alias. Quasi, quae nulla!
          </Text>
          <Button mt="md" mr="sm" compact>
            Watch Trailer
          </Button>
          <Button compact>Details</Button>
        </Grid.Col>
      </Grid>
    </Container>
  </Stack>
);
export default MovieListView;
