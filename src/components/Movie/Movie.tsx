import { AspectRatio, Rating, Stack, Text, Title } from '@mantine/core';
import { IconStar } from '@tabler/icons';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import blurUri from '@/assets/blur.jpg';
import noPoster from '@/assets/no-poster.png';
import { useMovieStyles } from '@/components/Movie/';
import { arrayToString } from '@/helpers';
import { IMovie } from '@/types/Movie.types';
import { IMAGE_SIZE } from '@/constants';

type MovieProps = {
  movie: IMovie;
};

const Movie: React.FC<MovieProps> = ({ movie }) => {
  const { classes } = useMovieStyles();
  const [imgSrc, setImgSrc] = useState(movie.large_cover_image ?? movie.medium_cover_image);

  return (
    <Link href={`/movie/${movie.id}/${movie.slug}`}>
      <div className={classes.imageContainer}>
        <div className={classes.innerImage}>
          <AspectRatio ratio={0.7}>
            <Image
              src={imgSrc}
              alt=" not found"
              placeholder="blur"
              blurDataURL={blurUri.blurDataURL}
              priority
              fill
              sizes={IMAGE_SIZE}
              onError={() => setImgSrc(noPoster.src)}
              style={{ borderRadius: '5px' }}
            />
          </AspectRatio>

          <span className={classes.overlay_info}>
            <Stack spacing={5} align="center">
              <Title order={5} color="white" lineClamp={1} align="center">
                {movie.title_english}
              </Title>
              <Rating
                size="xs"
                readOnly
                defaultValue={movie.rating / 2}
                fractions={2}
                emptySymbol={<IconStar size={14} fill="white" stroke={0} />}
              />
              <Text size="xs" color="white">
                {arrayToString(movie.genres)}
              </Text>
            </Stack>
          </span>
        </div>
      </div>
    </Link>
  );
};

export default Movie;
