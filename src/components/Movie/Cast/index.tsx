import { Flex, ScrollArea, Skeleton, Title } from '@mantine/core'
import React from 'react'
import Cast from './Cast'
import { ICast, ITmdbMovie, ImdbCast } from '@/types/movie-types'

type MovieCastProps = {
	isLoading: boolean
	credits: ImdbCast[]
	cast: ICast[]
	tmdbMovie: ITmdbMovie
}

const MovieCast: React.FC<MovieCastProps> = ({
	isLoading,
	credits,
	cast,
	tmdbMovie,
}) => (
	<>
		<Title order={3} mt="lg">
			Movie Cast
		</Title>

		{tmdbMovie !== null && isLoading ? (
			<ScrollArea mt="xl">
				<Flex gap="20px">
					{Array.from({ length: 10 }, (_, i) => (
						<Skeleton key={i} visible height={80} width={80} />
					))}
				</Flex>
			</ScrollArea>
		) : tmdbMovie && credits.length > 0 ? (
			<Cast credits={credits} />
		) : (
			<Cast casts={cast} />
		)}
	</>
)
export default MovieCast
