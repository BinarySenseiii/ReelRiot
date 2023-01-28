import { Button, Portal, Stack } from '@mantine/core';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import ModalVideo from 'react-modal-video';

type MoviesActionBtnsProps = {
  slug: string;
  direction: 'column' | 'row';
  youtubeId: string;
};

const MoviesActionBtns: React.FC<MoviesActionBtnsProps> = ({ slug, direction, youtubeId }) => {
  const router = useRouter();
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      {isOpen && (
        <Portal>
          <ModalVideo
            // @ts-ignore
            autoPlay
            channel="youtube"
            isOpen={isOpen}
            videoId={youtubeId}
            onClose={() => setOpen(false)}
          />
        </Portal>
      )}

      <Stack sx={{ flexDirection: direction }} spacing={6}>
        <Button size="xs" onClick={() => setOpen(true)}>
          Watch Trailer
        </Button>

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
