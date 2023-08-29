import { ITmdbVideosResult } from '@/types/movie-types'
import { Carousel } from '@mantine/carousel'
import { Anchor, AspectRatio, Group, Skeleton, Text } from '@mantine/core'
import React from 'react'
import { BiLinkExternal } from 'react-icons/bi'
import ReactPlayer from 'react-player/youtube'
import Carousal from '../Carousal'

interface MovieVideosProps {
	videos: ITmdbVideosResult[] | undefined
	title: string
	isLoading: boolean
}

const MovieVideos: React.FC<MovieVideosProps> = ({ videos, title, isLoading }) => {
	return (
		<>
			{isLoading ? (
				<Carousal>
					{Array(10)
						.fill(null)
						.map((_, index) => (
							<Carousel.Slide key={index}>
								<AspectRatio ratio={16 / 9}>
									<Skeleton visible />
								</AspectRatio>
							</Carousel.Slide>
						))}
				</Carousal>
			) : videos && videos.length > 0 ? (
				<Carousal>
					{videos.map((video, i) => (
						<Carousel.Slide key={video.id}>
							<AspectRatio ratio={16 / 9}>
								<ReactPlayer
									url={`https://www.youtube.com/watch?v=${video.key}`}
									width="100%"
									height="100%"
									light
									controls
								/>
							</AspectRatio>
						</Carousel.Slide>
					))}
				</Carousal>
			) : (
				<div>
					<Text>No Videos available for {title}</Text>
					<Anchor
						href={`https://www.youtube.com/results?search_query=${encodeURIComponent(title)}`}
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
