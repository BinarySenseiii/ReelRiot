import { IMovie } from '@/types/movie-types'
import { Skeleton } from '@mantine/core'
import React from 'react'
import { Container } from '../ui'
import Movie from './Movie'

interface MovieListProps {
	isLoading: boolean
	movies: IMovie[] | undefined
}

const MovieList: React.FC<MovieListProps> = ({ isLoading, movies }) => {
	return (
		<Container className="w-full">
			<div className="grid gap-6 grid-cols-1 sm:grid-cols-auto-fit">
				{isLoading
					? Array.from({ length: 18 }, (_, i) => (
							<Skeleton key={i} visible={isLoading} height={300} />
					  ))
					: movies?.map(movie => <Movie key={movie.id} movie={movie} />)}
			</div>
		</Container>
	)
}

export default MovieList
