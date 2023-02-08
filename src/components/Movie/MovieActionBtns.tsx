import { Button, Stack } from '@mantine/core';
import { useRouter } from 'next/router';
import React from 'react';

type MoviesActionBtnsProps = {
  slug: string;
  direction: 'column' | 'row';
  movieid: number;
};

const MoviesActionBtns: React.FC<MoviesActionBtnsProps> = ({ slug, direction, movieid }) => {
  const router = useRouter();

  return (
    <>
      <Stack sx={{ flexDirection: direction }} spacing={6}>
        <Button size="xs">Watch Trailer</Button>

        <Button
          size="xs"
          variant="white"
          color="dark"
          onClick={() => router.push(`/movie/${movieid}/${slug}`)}
        >
          Movie Details
        </Button>
      </Stack>
    </>
  );
};
export default MoviesActionBtns;
