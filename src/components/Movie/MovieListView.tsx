import { Box, Group, Stack, Text, Title } from '@mantine/core';
import Image from 'next/legacy/image';
import MoviesActionBtns from '@/components/Movie/MovieActionBtns';
import useMovieStyles from '@/components/Movie/Movies.style';
import BatmanImage from '../../assets/medium-cover.jpg';

type MovieListViewProps = {};

const MovieListView: React.FC<MovieListViewProps> = () => {
  const { classes } = useMovieStyles();
  return (
    <Stack>
      {Array.from({ length: 20 }, (_, i) => (
        <Box className={classes.card} key={i}>
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
            </Title>
            <Group spacing={2} mt={6}>
              <Text size="xs"> Action, Adventure</Text>
            </Group>
            <Text lineClamp={3} fz="md" mt="xs">
              Batman ventures into Gotham Citys underworld when a sadistic killer leaves behind a
              trail of cryptic clues. As the evidence begins to lead closer to home and the scale of
              the perpetrators plans become clear, he must forge new relationships, unmask the
              culprit and bring justice to the abuse of power and corruption that has long plagued
              the metropolis.
            </Text>

            <Box sx={(theme) => ({ marginTop: theme.spacing.lg })}>
              <MoviesActionBtns slug="2" direction="row" />
            </Box>
          </Box>
        </Box>
      ))}
    </Stack>
  );
};
export default MovieListView;
