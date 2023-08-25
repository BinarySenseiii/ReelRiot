import { ITorrent } from '@/types/movie-types'
import { Anchor, Button, Group, Stack, Text, Title } from '@mantine/core'
import React from 'react'
import { BiDownload } from 'react-icons/bi'
import { CustomTooltip } from '../ui'

type MovieTorrentsProps = {
	isTitle: boolean
	torrents: ITorrent[]
	imdb_code: string
}

const MovieTorrents: React.FC<MovieTorrentsProps> = ({
	isTitle,
	torrents,
	imdb_code,
}) => (
	<Stack spacing="xs">
		{isTitle && <Title order={4}>Download Movie In</Title>}

		<Group>
			{torrents.map(torrent => (
				<CustomTooltip label={torrent.size} key={torrent.date_uploaded_unix}>
					<Anchor href={torrent.url}>
						<Button size="sm" compact variant="white" color="dark" fw={500}>
							{torrent.quality}.
							<span className="uppercase">{torrent.type}</span>{' '}
							{Number(torrent.bit_depth) > 9 && (
								<span
									className="text-xs ml-1 font-bold"
									style={{ color: 'red' }}
								>
									{torrent.video_codec}
								</span>
							)}
						</Button>
					</Anchor>
				</CustomTooltip>
			))}
		</Group>

		<Text size="xs" mt={8}>
			WEB: same quality as BluRay
		</Text>

		<Anchor
			href={`https://yifysubtitles.org/movie-imdb/${imdb_code}`}
			target="_blank"
		>
			<Button size="xs" leftIcon={<BiDownload size={16} />}>
				Download Subtitles
			</Button>
		</Anchor>
	</Stack>
)
export default MovieTorrents
