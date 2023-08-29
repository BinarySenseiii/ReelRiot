import { Anchor, Box, Button, Grid, Stack } from '@mantine/core'
import React from 'react'
import { BsFillBookmarkFill } from 'react-icons/bs'
import CustomImage from '../CustomImage'

interface MovieLeftContentProps {
	title: string
	posterSrc: string
	imdb_code: string | undefined
}

const MovieLeftContent: React.FC<MovieLeftContentProps> = ({ title, posterSrc, imdb_code }) => {
	return (
		<Grid.Col md={3} pos={{ md: 'sticky' }} top={15} maw={500}>
			<CustomImage posterSrc={posterSrc} title={title} />
			<Stack mt="md" className="hidden md:flex">
				<Button fullWidth leftIcon={<BsFillBookmarkFill />}>
					Bookmark
				</Button>

				<Anchor href={` https://www.imdb.com/title/${imdb_code}`} target="_blank" className="w-full hover:no-underline">
					<Button fullWidth variant="white" color="dark">
						View Details On IMDB
					</Button>
				</Anchor>
			</Stack>
		</Grid.Col>
	)
}

export default MovieLeftContent
