import { IVideo } from '@/types/movie-types'
import { Anchor, AspectRatio, Group, Text } from '@mantine/core'
import React from 'react'
import { BiLinkExternal } from 'react-icons/bi'
import ReactPlayer from 'react-player/youtube'

interface MovieVideosProps {
	videos: IVideo[]
	title: string
}

const MovieVideos: React.FC<MovieVideosProps> = ({ videos, title }) => {
	return (
		<>
			{videos && videos.length > 0 ? (
				<div className="grid grid-cols-auto-fit-video gap-4">
					{videos.map((video, i) => (
						<AspectRatio key={video.id} ratio={16 / 9}>
							<ReactPlayer
								url={`https://www.youtube.com/watch?v=${video.key}`}
								width="100%"
								height="100%"
								light
								controls
							/>
						</AspectRatio>
					))}
				</div>
			) : (
				<div>
					<Text>No Videos available for {title}</Text>
					<Anchor
						href={`https://www.youtube.com/results?search_query=${encodeURIComponent(
							title,
						)}`}
						target="_blank"
						className="inline-block items-center gap-1 mt-2"
					>
						<Group spacing={4}>
							<BiLinkExternal />
							<span>Search on YouTube</span>
						</Group>
					</Anchor>
				</div>
			)}
		</>
	)
}

export default MovieVideos
