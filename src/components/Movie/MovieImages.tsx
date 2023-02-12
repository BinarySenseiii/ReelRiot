import { Carousel } from '@mantine/carousel';
import { AspectRatio, ScrollArea, SimpleGrid, Skeleton, Stack } from '@mantine/core';
import Image from 'next/image';
import React from 'react';
import ph from '@/assets/blur.jpg';
import { IMAGE_SIZE } from '@/constants';
import { getBackdropImage } from '@/services/config';
import { IGalleryBackdrops, ITmdbMovie } from '@/types/Movie.types';

type MovieImagesProps = {
  isLoading: boolean;
  images: string[];
  tmdbMovie: ITmdbMovie;
  backdrops: IGalleryBackdrops[];
  MovieName: string;
};

const MovieImages: React.FC<MovieImagesProps> = ({
  isLoading,
  images,
  tmdbMovie,
  backdrops,
  MovieName,
}) => {
  const isImagesLength = backdrops ? backdrops.length + images.length > 3 : false;
  return (
    <Stack>
      {tmdbMovie !== null && isLoading ? (
        <ScrollArea>
          <SimpleGrid cols={4}>
            {Array.from({ length: 4 }, (_, i) => (
              <Skeleton key={i} visible height={151} width="100%" />
            ))}
          </SimpleGrid>
        </ScrollArea>
      ) : (
        <Carousel
          slideSize="25%"
          slideGap="sm"
          loop
          align="start"
          slidesToScroll={3}
          withControls={isImagesLength}
          draggable={isImagesLength}
        >
          {backdrops?.map((backdrop) => (
            <Carousel.Slide key={backdrop.file_path}>
              <AspectRatio ratio={16 / 9}>
                <Image
                  src={getBackdropImage(backdrop.file_path)}
                  fill
                  alt={`${MovieName} not found`}
                  placeholder="blur"
                  blurDataURL={ph.blurDataURL}
                  sizes={IMAGE_SIZE}
                />
              </AspectRatio>
            </Carousel.Slide>
          ))}

          {images?.map((img, i) => (
            <Carousel.Slide key={i}>
              <AspectRatio ratio={16 / 9}>
                <Image
                  src={img}
                  fill
                  alt={`${MovieName} not found`}
                  placeholder="blur"
                  blurDataURL={ph.blurDataURL}
                  sizes={IMAGE_SIZE}
                />
              </AspectRatio>
            </Carousel.Slide>
          ))}
        </Carousel>
      )}
    </Stack>
  );
};
export default MovieImages;
