import { ActionIcon, AspectRatio, Rating, Stack, Text, Title } from '@mantine/core';
import { IconPlus } from '@tabler/icons';
import Image from 'next/image';
import React, { useState } from 'react';
import Link from 'next/link';
import blurUri from '@/assets/blur.jpg';
import noPoster from '@/assets/no-poster.png';
import { useMovieStyles } from '@/components/Movie/';
import { IMovie } from '@/types/Movie.types';

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
              sizes="(max-width: 768px) 100vw,
            (max-width: 1200px) 50vw,
            33vw"
              onError={() => setImgSrc(noPoster.src)}
              style={{ borderRadius: '5px' }}
            />
          </AspectRatio>

          <div className={classes.overlay}>
            <ActionIcon
              variant="filled"
              className={classes.bookmarked}
              bg="white"
              sx={{ color: 'black', '&:hover': { background: 'white' } }}
            >
              <IconPlus />
            </ActionIcon>
          </div>
          <span className={classes.overlay_info}>
            <Stack spacing={5} align="center">
              <Title order={5} color="white" lineClamp={1} align="center">
                {movie.title_english}
              </Title>
              <Rating size="xs" readOnly defaultValue={movie.rating / 2} fractions={2} />
              <Text fz="xs" lineClamp={2} align="center" color="white">
                {movie.description_full ||
                  "It looks like we don't have a Description for this title yet"}
                {/* {arrayToString(movie.genres)} */}
              </Text>
            </Stack>
          </span>
        </div>
      </div>
    </Link>
  );
};

export default Movie;
