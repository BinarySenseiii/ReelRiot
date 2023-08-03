import { Badge, Box } from '@mantine/core'
import React from 'react'

import { IMovie } from '@/types/movie-types'
import { checkQuality } from '@/utils'
import CustomImage from '../CustomImage'
import useMovieStyles from './movieSyles'
import { useDisclosure } from '@mantine/hooks'
import MovieDrawer from './MovieDrawer'

type MovieProps = {
	movie: IMovie
}

const Movie: React.FC<MovieProps> = ({ movie }) => {
	const { classes } = useMovieStyles()
	const [opened, { open, close }] = useDisclosure(false)

	return (
		<div>
			<MovieDrawer opened={opened} close={close} movie={movie} />
			<Box pos="relative" className={classes.innerImage} onClick={open}>
				<CustomImage
					posterSrc={movie.large_cover_image}
					title={movie.title_english}
				/>
				<Badge
					className={classes.badge}
					variant="filled"
					radius="xs"
					size="md"
					styles={{
						root: {
							background: 'white',
							color: 'black',
						},
					}}
				>
					{checkQuality(movie.torrents)}
				</Badge>
			</Box>
		</div>
	)
}

export default Movie
