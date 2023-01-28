import { Box, Group, Skeleton, Stack, Text, Title } from '@mantine/core';
import Image from 'next/legacy/image';
import MoviesActionBtns from '@/components/Movie/MovieActionBtns';
import useMovieStyles from '@/components/Movie/Movies.style';
import { IMovie } from '@/types/Movie.types';

type MovieListViewProps = {
  isLoading?: boolean;
  movies: IMovie[] | undefined;
};

const MovieListView: React.FC<MovieListViewProps> = ({ isLoading, movies }) => {
  const { classes } = useMovieStyles();
  return (
    <Stack>
      {isLoading
        ? Array.from({ length: 10 }, (_, i: number) => (
            <Skeleton visible={isLoading} width="100%" height="200px" key={i} />
          ))
        : movies?.map((movie) => (
            <Box className={classes.card} key={movie.id}>
              <div className={classes.listImage}>
                <Image
                  layout="responsive"
                  height={550}
                  width={400}
                  src={movie.large_cover_image ?? movie.medium_cover_image}
                  alt={`${movie.title_long} movie not found`}
                  placeholder="blur"
                  blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z8BQDwAEhQGAhKmMIQAAAABJRU5ErkJggg=="
                  priority
                />
              </div>

              <Box p="lg" sx={{ position: 'relative' }}>
                <Title order={3} weight={900} lineClamp={1}>
                  {movie.title}
                </Title>
                <Group spacing={2} mt={6}>
                  <Text size="xs"> Action, Adventure</Text>
                </Group>
                <Text lineClamp={3} fz="md" mt="xs">
                  {movie.description_full || movie.summary || movie.synopsis}
                </Text>

                <Box sx={(theme) => ({ marginTop: theme.spacing.lg })}>
                  <MoviesActionBtns slug="2" direction="row" youtubeId={movie.yt_trailer_code} />
                </Box>
              </Box>
            </Box>
          ))}
    </Stack>
  );
};
export default MovieListView;
