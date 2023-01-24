/* eslint-disable @typescript-eslint/no-unused-vars */
import { Avatar, Title, Tooltip } from '@mantine/core';
import React from 'react';

type MovieCastProps = {
  isTitle: boolean;
};

const MovieCast: React.FC<MovieCastProps> = ({ isTitle }) => (
  <>
    {isTitle && (
      <Title order={3} mt="lg">
        The Cast
      </Title>
    )}
    <Avatar.Group spacing="sm" mt="xs">
      {[1, 2, 3, 4, 5, 6].map((t: any) => (
        <Tooltip key={t} color="brand" label="Andrew Tate" withArrow arrowSize={10}>
          <Avatar
            sx={{ cursor: 'pointer' }}
            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=250&q=80"
            radius="xl"
          />
        </Tooltip>
      ))}
    </Avatar.Group>
  </>
);
export default MovieCast;
