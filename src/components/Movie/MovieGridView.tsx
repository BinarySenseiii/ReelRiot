import React from 'react';
import { SimpleGrid, Image, Text, Box } from '@mantine/core';

type MoviesGridViewProps = {};

const MoviesGridView: React.FC<MoviesGridViewProps> = () => {
  const movieOnClickHandler = () => {
    console.log('Code for movie on click handler');
  };
  return (
    <>
      <Box
        sx={(theme) => ({ background: theme.colors.dark[8], paddingBottom: '35px !important' })}
        p="xl"
        mt="md"
      >
        <SimpleGrid
          cols={4}
          spacing="sm"
          mt="xs"
          breakpoints={[
            { maxWidth: 980, cols: 4, spacing: 'md' },
            { maxWidth: 768, cols: 3, spacing: 'sm' },
            { maxWidth: 600, cols: 2, spacing: 'xs' },
            { maxWidth: 480, cols: 1, spacing: 'xs' },
          ]}
        >
          <div>
            <Image
              radius="xs"
              src="https://s.studiobinder.com/wp-content/uploads/2017/12/Movie-Poster-Template-Dark-with-Image.jpg?x81279"
              alt="movie-grid-image"
              withPlaceholder
              placeholder={<Text align="center">This image contained the poster of movie</Text>}
              onClick={movieOnClickHandler}
            />
            <Text pt="xs" fz="xs">
              Year - Category1 Category2{' '}
            </Text>
            <Text pb="xs" fw={600}>
              Movie Title
            </Text>
          </div>
          <div>
            <Image
              radius="xs"
              src="https://s.studiobinder.com/wp-content/uploads/2017/12/Movie-Poster-Template-Dark-with-Image.jpg?x81279"
              alt="movie-grid-image"
              withPlaceholder
              placeholder={<Text align="center">This image contained the poster of movie</Text>}
              onClick={movieOnClickHandler}
            />
            <Text pt="xs" fz="xs">
              Year - Category1 Category2{' '}
            </Text>
            <Text pb="xs" fw={600}>
              Movie Title
            </Text>
          </div>
          <div>
            <Image
              radius="xs"
              src="https://s.studiobinder.com/wp-content/uploads/2017/12/Movie-Poster-Template-Dark-with-Image.jpg?x81279"
              alt="movie-grid-image"
              withPlaceholder
              placeholder={<Text align="center">This image contained the poster of movie</Text>}
              onClick={movieOnClickHandler}
            />
            <Text pt="xs" fz="xs">
              Year - Category1 Category2{' '}
            </Text>
            <Text pb="xs" fw={600}>
              Movie Title
            </Text>
          </div>
          <div>
            <Image
              radius="xs"
              src="https://s.studiobinder.com/wp-content/uploads/2017/12/Movie-Poster-Template-Dark-with-Image.jpg?x81279"
              alt="movie-grid-image"
              withPlaceholder
              placeholder={<Text align="center">This image contained the poster of movie</Text>}
              onClick={movieOnClickHandler}
            />
            <Text pt="xs" fz="xs">
              Year - Category1 Category2{' '}
            </Text>
            <Text pb="xs" fw={600}>
              Movie Title
            </Text>
          </div>
        </SimpleGrid>
      </Box>
    </>
  );
};
export default MoviesGridView;
