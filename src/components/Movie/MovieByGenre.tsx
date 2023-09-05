import { useMovies } from '@/api/hooks'
import { dummyList } from '@/store/useMovieQueryStore'
import { MovieGenre } from '@/types/movie-types'
import { Carousel } from '@mantine/carousel'
import { AspectRatio, Skeleton, Stack, Text } from '@mantine/core'
import ms from 'ms'
import React from 'react'
import Carousal from '../Carousal'
import Movie from './Movie'

interface MovieByGenreProps {
	title: string
	genre: MovieGenre
}

const MovieByGenre: React.FC<MovieByGenreProps> = ({ title, genre }) => {
	const { data: result, isLoading } = useMovies({ genre, page: 1, quality: '2160p' })
	return (
		<Stack>
			<Text fw={500} fz="xl">
				{title}
			</Text>
			<Carousal
				slideSize="25%"
				delay={ms('2s')}
				breakpoints={[
					{ maxWidth: 'md', slideSize: '33.33%' },
					{ maxWidth: 'sm', slideSize: '50%', slideGap: 10 },
				]}
				key={Math.random()}
			>
				{isLoading
					? dummyList().map((_, index) => (
							<Carousel.Slide key={index}>
								<AspectRatio ratio={4 / 5}>
									<Skeleton visible h="100%" w="100%" />
								</AspectRatio>
							</Carousel.Slide>
					  ))
					: result?.data.movies.map(movie => (
							<Carousel.Slide key={movie.id}>
								<Movie movie={movie} withContent={false} />
							</Carousel.Slide>
					  ))}
			</Carousal>
		</Stack>
	)
}

export default MovieByGenre
