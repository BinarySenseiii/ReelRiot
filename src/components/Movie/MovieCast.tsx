import { Anchor, Avatar, Box, Title, Tooltip } from '@mantine/core';
import React from 'react';
import { ICast } from '@/types/Movie.types';

type MovieCastProps = {
  isTitle: boolean;
  casts: ICast[];
};

const MovieCast: React.FC<MovieCastProps> = ({ isTitle, casts }) => (
  <Box>
    {casts.length > 0 && typeof casts !== 'undefined' && (
      <>
        {isTitle && (
          <Title order={3} mt="lg">
            The Cast
          </Title>
        )}
        <Avatar.Group spacing="sm" mt="xs">
          {casts?.map((cast: ICast) => (
            <Tooltip color="brand" label={cast.name} withArrow arrowSize={10} key={cast.name}>
              <Anchor
                href={`https://www.imdb.com/name/nm${cast.imdb_code}/?ref_=ls_mv`}
                target="_blank"
              >
                <Avatar sx={{ cursor: 'pointer' }} src={cast.url_small_image} radius="xl" />
              </Anchor>
            </Tooltip>
          ))}
        </Avatar.Group>
      </>
    )}
  </Box>
);
export default MovieCast;
