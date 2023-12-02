import { Anchor, Button, Grid, Stack } from '@mantine/core'
import React from 'react'
import { FaDownload } from 'react-icons/fa'
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
		<Grid.Col md={3} pos={{ md: 'sticky' }} top={15} maw={500}>
			<CustomImage posterSrc={posterSrc} title={title} />
			<Stack mt="md" className="hidden md:flex">
				<Anchor href="https://www.qbittorrent.org/download" target="_blank">
					<Button fullWidth leftIcon={<FaDownload />}>
						Download Torent Client
					</Button>
				</Anchor>

				<Anchor
					href={` https://www.imdb.com/title/${imdb_code}`}
					target="_blank"
					className="w-full hover:no-underline"
				>
					<Button fullWidth variant="white" color="dark">
						View Details On IMDB
					</Button>
				</Anchor>
			</Stack>
		</Grid.Col>
	)
}

export default MovieLeftContent
