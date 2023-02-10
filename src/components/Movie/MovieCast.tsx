import { Anchor, Avatar, Box, Flex, ScrollArea, Title, Tooltip } from '@mantine/core';
import React from 'react';
import { getPosterImage } from '@/services/config';
import { ICast } from '@/types/Movie.types';

type MovieCastProps = {
  isTitle: boolean;
  casts?: ICast[];
  credits?: any;
};

const MovieCast: React.FC<MovieCastProps> = ({ isTitle, casts, credits }) => (
  <Box>
    {isTitle && (
      <Title order={3} mt="lg">
        Movie Cast
      </Title>
    )}
    {typeof casts !== 'undefined' ? (
      <>
        <Avatar.Group spacing="xs" mt={4}>
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
    ) : (
      <ScrollArea mt="xs">
        <Flex gap="md">
          {credits?.map((cast: any) => (
            <Tooltip
              color="brand"
              label={cast.original_name}
              withArrow
              arrowSize={10}
              key={cast.id}
            >
              <Anchor href={`https://www.imdb.com/name/nm${cast.id}/?ref_=ls_mv`} target="_blank">
                <Avatar
                  sx={{ cursor: 'pointer' }}
                  src={getPosterImage(cast.profile_path)}
                  // radius="xl"
                  size="xl"
                />
              </Anchor>
            </Tooltip>
          ))}
        </Flex>
      </ScrollArea>
    )}
  </Box>
);
export default MovieCast;
