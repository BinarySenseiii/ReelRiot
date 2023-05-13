import {
  Badge,
  Box,
  Button,
  Grid,
  Group,
  Popover,
  Rating,
  Stack,
  Text,
  Title,
} from '@mantine/core';
import React from 'react';

import { checkQuality } from '@/helpers';
import { IMovie } from '@/types/element/movie-types';
import { useDisclosure } from '@mantine/hooks';
import { AiFillHeart } from 'react-icons/ai';
import CustomImage from '../CustomImage';
import useMovieStyles from './movieSyles';

type MovieProps = {
  movie: IMovie;
};

const Movie: React.FC<MovieProps> = ({ movie }) => {
  const { classes } = useMovieStyles();
  const [opened, { close, open }] = useDisclosure(false);

  return (
    <Popover
      width={280}
      arrowSize={15}
      position="right"
      withArrow
      shadow="lg"
      radius="sm"
      opened={opened}
      withinPortal
      styles={{
        dropdown: {
          background: 'white',
        },
      }}
    >
      <Popover.Target>
        <Box
          pos="relative"
          className={classes.innerImage}
          onMouseEnter={open}
          onMouseLeave={close}
        >
          <CustomImage
            posterSrc={movie.large_cover_image}
            title={movie.title_english}
          />
          <Badge
            className={classes.badge}
            variant="filled"
            radius="xs"
            size="md"
            styles={{
              root: {
                background: 'white',
                color: 'black',
              },
            }}
          >
            {checkQuality(movie.torrents)}
          </Badge>
        </Box>
      </Popover.Target>

      <Popover.Dropdown>
        <Stack spacing="xs">
          <Title color="dark" order={5}>
            {movie.title_long}
          </Title>
          <Group>
            <Group spacing={1}>
              <Rating defaultValue={2} count={1} />
              <Text color="dark" fw={600} fz="xs">
                {movie.rating}
              </Text>
            </Group>

            <Text color="dark" fw={600} fz="xs">
              {movie.year}
            </Text>

            <Text color="dark" fw={600} fz="xs">
              {movie.runtime >= 0 ? movie.runtime : '120'} Min
            </Text>

            <Badge
              variant="filled"
              radius="xs"
              size="md"
              ml="auto"
              styles={{
                root: {
                  background: 'black',
                  color: 'white',
                },
              }}
            >
              {checkQuality(movie.torrents)}
            </Badge>
          </Group>
          <Text lineClamp={4} color="dark" fz="xs">
            {movie.description_full || movie.summary || movie.synopsis}
          </Text>
          <Grid>
            <Grid.Col span={9}>
              <Button bg="black" fullWidth>
                View Details
              </Button>
            </Grid.Col>
            <Grid.Col span={3}>
              <Button fullWidth>
                <AiFillHeart />
              </Button>
            </Grid.Col>
          </Grid>
        </Stack>
      </Popover.Dropdown>
    </Popover>
  );
};

export default Movie;
