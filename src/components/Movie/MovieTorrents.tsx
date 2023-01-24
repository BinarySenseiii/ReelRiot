import { Anchor, Button, Group, Text, Tooltip } from '@mantine/core';
import React from 'react';

type MovieTorrentsProps = {
  isTitle: boolean;
};

const MovieTorrents: React.FC<MovieTorrentsProps> = ({ isTitle }) => (
  <Group spacing="xs" mt="lg" align="center">
    {isTitle && (
      <Text size="md" weight={500}>
        Download In
      </Text>
    )}

    {['4k', '1080p'].map((torrent: any) => (
      <Tooltip label="1.2gb" color="brand" withArrow arrowSize={6} arrowOffset={20}>
        <Anchor href={torrent.url} target="_blank">
          <Button size="sm" compact variant="outline" sx={{ color: 'white' }}>
            {torrent}
          </Button>
        </Anchor>
      </Tooltip>
    ))}
  </Group>
);
export default MovieTorrents;
