import React from 'react';
import { SimpleGrid, Skeleton, Title } from '@mantine/core';
import Image from 'next/legacy/image';

type MovieGalleryProps = {
  galleryImages: string[] | undefined;
  isLoading: boolean;
};

const MovieGallery: React.FC<MovieGalleryProps> = ({ galleryImages, isLoading }) => (
  <>
    <Title order={3} mt="lg">
      Gallery
    </Title>

    <SimpleGrid cols={3} spacing="xs" mt="sm">
      {isLoading
        ? Array.from({ length: 3 }, (_, i) => <Skeleton key={i} visible={isLoading} height={100} />)
        : galleryImages?.map((imageSrc) => (
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
