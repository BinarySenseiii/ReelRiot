import { Button, Stack } from '@mantine/core';
import { useRouter } from 'next/router';
import React from 'react';

type MoviesActionBtnsProps = {
  slug: string;
  direction: 'column' | 'row';
};

const MoviesActionBtns: React.FC<MoviesActionBtnsProps> = ({ slug, direction }) => {
  const router = useRouter();

  return (
    <>
      <Stack sx={{ flexDirection: direction }} spacing={6}>
        <Button size="xs">Watch Trailer</Button>

        <Button
          size="xs"
          variant="white"
          color="dark"
          onClick={() => router.push(`/movie/${slug}`)}
        >
          Movie Details
        </Button>
      </Stack>
    </>
  );
};
export default MoviesActionBtns;
