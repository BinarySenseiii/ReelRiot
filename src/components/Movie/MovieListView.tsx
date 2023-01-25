import { Box, Button, Image, Grid, Stack, Text } from '@mantine/core';
import React from 'react';

type MovieListViewProps = {};

const MovieListView: React.FC<MovieListViewProps> = () => {
  const onClickTrailerHandler = () => { };
  const onClickDetailsHandler = () => { };

return (
  <Stack>
    <Box
      sx={(theme) => ({ background: theme.colors.dark[8], paddingBottom: '35px !important' })}
      p="xl"
      mt="md"
    >
      <Grid>
        <Grid.Col xs={4} sm={3} md={2}>
          <Image
            radius="xs"
            src="https://s.studiobinder.com/wp-content/uploads/2017/12/Movie-Poster-Template-Dark-with-Image.jpg?x81279"
            alt="movie-grid-image"
            withPlaceholder
            placeholder={<Text align="center">This image contained the poster of movie</Text>}
          />
        </Grid.Col>
        <Grid.Col pl="sm" fw={700} xs={8} sm={9} md={10}>
          <Text fz="lg">Movie Title</Text>
          <Text fw={300} fz="xs">
            Category1, Category2
          </Text>
          <Text align="justify" fw={500} fz="sm">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio accusamus atque
            vitae. Amet reprehenderit fugit ea asperiores, tenetur, minima nesciunt dolorum quia
            dolore aperiam quibusdam molestiae alias. Quasi, quae nulla! Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Exercitationem rem natus tenetur eos, libero eius ratione
            quam assumenda vero nesciunt id vel impedit voluptas maxime ipsa similique a nostrum
            repudiandae.
          </Text>
          <Button mt="md" mr="sm" compact onClick={onClickTrailerHandler}>
            Watch Trailer
          </Button>
          <Button mt="md" c="black" bg="white" compact onClick={onClickDetailsHandler}>
            Details
          </Button>
        </Grid.Col>
      </Grid>
    </Box>
  </Stack>
);
};
export default MovieListView;
