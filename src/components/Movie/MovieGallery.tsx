/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import { SimpleGrid, Title } from '@mantine/core';
import ss01 from '../../assets/ss01.jpg';
import ss02 from '../../assets/ss02.jpg';
import ss03 from '../../assets/ss03.jpg';

type MovieGalleryProps = {};

const MovieGallery: React.FC<MovieGalleryProps> = () => (
  <>
    <Title order={3} mt="lg">
      Gallery
    </Title>

    <SimpleGrid cols={3} spacing="xs" mt="sm">
      <img src={ss01.src} width="100%" />
      <img src={ss02.src} width="100%" />
      <img src={ss03.src} width="100%" />
    </SimpleGrid>
  </>
);
export default MovieGallery;
