/* eslint-disable @typescript-eslint/no-unused-vars */
import { Avatar, Group, Skeleton, Title, Tooltip } from '@mantine/core';
import React from 'react';
import { ICast } from '@/types/Movie.types';

type MovieCastProps = {
  isTitle: boolean;
  casts: ICast[];
  isLoading: boolean;
};

const MovieCast: React.FC<MovieCastProps> = ({ isTitle, casts, isLoading }) => (
  <>
    {isTitle && (
      <Title order={3} mt="lg">
        The Cast
      </Title>
    )}
    <Avatar.Group spacing="sm" mt="xs">
      {isLoading ? (
        <Group spacing={0}>
          {Array.from({ length: 3 }, (_, i) => (
            <Skeleton key={i} visible={isLoading} circle height={50} />
          ))}
        </Group>
      ) : (
        casts?.map((cast: ICast) => (
          <Tooltip color="brand" label={cast.name} withArrow arrowSize={10} key={cast.name}>
            <Avatar sx={{ cursor: 'pointer' }} src={cast.url_small_image} radius="xl" />
          </Tooltip>
        ))
      )}
    </Avatar.Group>
  </>
);
export default MovieCast;
