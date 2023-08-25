import { Anchor, Button, Grid } from '@mantine/core'
import React from 'react'
import { BsFillBookmarkFill } from 'react-icons/bs'
import CustomImage from '../CustomImage'

interface MovieLeftContentProps {
	title: string
	posterSrc: string
	imdb_code: string | undefined
}

const MovieLeftContent: React.FC<MovieLeftContentProps> = ({
	title,
	posterSrc,
	imdb_code,
}) => {
	return (
		<Grid.Col span={4} pos="sticky" top={15}>
			<CustomImage posterSrc={posterSrc} title={title} />
			<div className="flex mt-3 gap-2">
				<Button fullWidth leftIcon={<BsFillBookmarkFill />} size="xs">
					Bookmark
				</Button>

				<Anchor
					href={` https://www.imdb.com/title/${imdb_code}`}
					target="_blank"
					className="w-full hover:no-underline"
				>
					<Button size="xs" fullWidth variant="white" color="dark">
						View Details On IMDB
					</Button>
				</Anchor>
			</div>
		</Grid.Col>
	)
}

export default MovieLeftContent
