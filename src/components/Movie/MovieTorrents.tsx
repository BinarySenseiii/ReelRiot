import { Anchor, Button, Group, Text, Tooltip } from '@mantine/core';
import React from 'react';
import { ITorrent } from '@/types/Movie.types';
import uniqueVals from '@/helpers/getUnique';

type MovieTorrentsProps = {
  isTitle: boolean;
  torrents: ITorrent[];
};

const MovieTorrents: React.FC<MovieTorrentsProps> = ({ isTitle, torrents }) => (
  <Group spacing="xs" mt="lg" align="center">
    {isTitle && (
      <Text size="md" weight={500}>
        Download In
      </Text>
    )}

    {uniqueVals(torrents).map((torrent: any) => (
      <Tooltip
        label={torrent.size}
        color="brand"
        withArrow
        arrowSize={6}
        key={torrent.date_uploaded_unix}
        arrowOffset={20}
      >
        <Anchor href={torrent.url} target="_blank">
          <Button size="sm" compact variant="outline" sx={{ color: 'white' }}>
            {torrent.quality}
          </Button>
        </Anchor>
      </Tooltip>
    ))}
  </Group>
);
export default MovieTorrents;
