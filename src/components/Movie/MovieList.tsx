import { dummyList } from '@/store/useMovieQueryStore'
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
		<Container className="w-full" py="xl">
			<div className="grid gap-3 sm:gap-6 grid-cols-2 sm:grid-cols-auto-fit">
				{isLoading
					? dummyList.map((_, i) => <Skeleton key={i} visible={isLoading} height={300} />)
					: movies?.map(movie => <Movie key={movie.id} movie={movie} />)}
			</div>
		</Container>
	)
}

export default MovieList
