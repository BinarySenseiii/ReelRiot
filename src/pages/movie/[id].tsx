import { Anchor, Box, Button, Group, Rating, Text, Title, Tooltip } from '@mantine/core';
import { IconDownload, IconPlayerPlay } from '@tabler/icons';
import Image from 'next/image';
import BreadCrumb from '@/components/BreadCrumb';
import { useMovieStyles } from '@/components/Movie/Movies.style';
import { Container } from '@/components/ui';

import poster from '@/assets/medium-cover.jpg';

import MovieCast from '@/components/Movie/MovieCast';
import MovieGallery from '@/components/Movie/MovieGallery';

const MovieDetail = () => {
  const { classes } = useMovieStyles();
  return (
    <Container>
      <BreadCrumb movieName="Spiderman" slug="/movie/spiderman" />

      <div className={classes.detail_grid}>
        <Box className={classes.innerImage}>
          <Box className={classes.info}>
            <Title order={1} weight={900}>
              2023
            </Title>
          </Box>
          <Image
            height={550}
            width={400}
            src={poster}
            alt="spiderman movie not found"
            placeholder="blur"
          />

          <Box className={classes.play}>
            <IconPlayerPlay />
          </Box>
        </Box>

        <div>
          <Title order={1}>The Batman</Title>
          <Text size="sm" mt="xs">
            Action / Crime / Drama / Mystery / Thriller / 198min{' '}
          </Text>

          <Group spacing="xs">
            <Rating mt="sm" readOnly value={5} count={10} fractions={2} />
            <Text size="sm" mt="xs" weight={500} color="yellow">
              5
            </Text>
          </Group>

          <Group spacing="xs" mt="lg" align="center">
            <Text size="md" weight={500}>
              Download In
            </Text>

            {['4k', '1080p'].map((torrent: any) => (
              <Tooltip label="1.2gb" color="brand" withArrow arrowSize={6} arrowOffset={20}>
                <Anchor href={torrent.url} target="_blank">
                  <Button size="sm" compact variant="outline" sx={{ color: 'white' }}>
                    {torrent}
                  </Button>
                </Anchor>
              </Tooltip>
            ))}
          </Group>

          <Text size="xs" mt={8}>
            WEB: same quality as BluRay
          </Text>

          <Anchor href="https://yifysubtitles.org/movie-imdb/" target="_blank">
            <Button
              size="xs"
              mt="lg"
              sx={(theme) => ({
                background: 'white',
                color: theme.colors.dark[9],
                '&:hover': { background: theme.colors.dark[0] },
              })}
              leftIcon={<IconDownload size={20} />}
            >
              Download Subtitles
            </Button>
          </Anchor>

          <MovieCast isTitle />

          <Title order={3} mt="lg">
            Synopsis
          </Title>
          <Text mt="xs">
            Batman ventures into Gotham Citys underworld when a sadistic killer leaves behind a
            trail of cryptic clues. As the evidence begins to lead closer to home and the scale of
            the perpetrators plans become clear, he must forge new relationships, unmask the culprit
            and bring justice to the abuse of power and corruption that has long plagued the
            metropolis.
          </Text>

          <MovieGallery />
        </div>
      </div>
    </Container>
  );
};
export default MovieDetail;
