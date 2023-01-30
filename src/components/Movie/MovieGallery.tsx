import { SimpleGrid, Title } from '@mantine/core';
import Image from 'next/legacy/image';
import React from 'react';

type MovieGalleryProps = {
  galleryImages: string[] | undefined;
};

const MovieGallery: React.FC<MovieGalleryProps> = ({ galleryImages }) => (
  <>
    <Title order={3} mt="lg">
      Gallery
    </Title>

    <SimpleGrid cols={3} spacing="xs" mt="sm">
      {galleryImages?.map((imageSrc) => (
        <Image
          key={imageSrc}
          src={imageSrc}
          width={400}
          height={200}
          layout="responsive"
          alt="movie screen shot not found"
        />
      ))}
    </SimpleGrid>
  </>
);
export default MovieGallery;
