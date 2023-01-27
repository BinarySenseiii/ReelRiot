import { Box, Group, Stack, Text, Title } from '@mantine/core';
import Image from 'next/legacy/image';
import React from 'react';
import { useMovieStyles } from '@/components/Movie/';
import MoviesActionBtns from '@/components/Movie/MovieActionBtns';
import BatmanImage from '../../assets/medium-cover.jpg';

type MovieProps = {
  name: string;
  info: string | null;
  image: string;
  year: number;
  category: string[];
};

export const MovieCard: React.FC<MovieProps> = ({ name, image, year, category }) => {
  const { classes } = useMovieStyles();

  return (
    <div className={classes.imageContainer}>
      <div className={classes.innerImage}>
        <Image
          layout="responsive"
          height={550}
          width={400}
          src={BatmanImage}
          // src={image}
          alt=" not found"
          placeholder="blur"
        />

        <div className={classes.overlay}>
          <MoviesActionBtns direction="column" slug="2" />
        </div>
      </div>

      <Stack spacing={0} mt="xs">
        <Group align="center" spacing={4}>
          <Text size={12}> 2023 - </Text>
          {/* <Text size={12}> {year} </Text> */}
          <Text size={12} lineClamp={1}>
            Action, Adventure
            {/* {category
              .map((cat) => `${cat},`)
              .join('')
              .slice(0, -1)} */}
          </Text>
        </Group>
        <Title fz="md" weight={700} lineClamp={1} mt={1}>
          Designed For Death
          {/* {name} */}
        </Title>
      </Stack>
    </div>
  );
};

export const MovieListCard: React.FC<MovieProps> = ({ name, image, info, year, category }) => {
  const { classes } = useMovieStyles();

  return (
    <Box className={classes.card}>
      <div className={classes.listImage}>
        <Image
          layout="responsive"
          height={550}
          width={400}
          src={BatmanImage}
          // src={image}
          alt=" not found"
          placeholder="blur"
        />
      </div>

      <Box p="lg" sx={{ position: 'relative' }}>
        <Title order={3} weight={900} lineClamp={1}>
          Designed For Death
          {/* {name} */}
        </Title>
        <Group spacing={2} mt={6}>
          <Text size="xs"> Action, Adventure</Text>
        </Group>
        <Text lineClamp={3} fz="md" mt="xs">
          Batman ventures into Gotham Citys underworld when a sadistic killer leaves behind a trail
          of cryptic clues. As the evidence begins to lead closer to home and the scale of the
          perpetrators plans become clear, he must forge new relationships, unmask the culprit and
          bring justice to the abuse of power and corruption that has long plagued the metropolis.
          {/* {category
              .map((cat) => `${cat},`)
              .join('')
              .slice(0, -1)} */}
        </Text>

        <Box sx={(theme) => ({ marginTop: theme.spacing.lg })}>
          <MoviesActionBtns slug="2" direction="row" />
        </Box>
      </Box>
    </Box>
  );
};
