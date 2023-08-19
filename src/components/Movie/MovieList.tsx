import { IMoviesResponse } from '@/api/hooks/useMovies'
import { MOVIES_LIMIT } from '@/store/useMovieQueryStore'
import { Skeleton } from '@mantine/core'
import React, { useCallback, useRef } from 'react'
import { Container } from '../ui'
import Movie from './Movie'
import { FetchNextPageOptions } from '@tanstack/react-query'

interface MovieListProps {
	isLoading: boolean
	data: IMoviesResponse[] | undefined
	hasNextPage: boolean | undefined
	fetchNextPage: (options?: FetchNextPageOptions | undefined) => void
}

const MovieList: React.FC<MovieListProps> = ({
	isLoading,
	data,
	hasNextPage,
	fetchNextPage,
}) => {
	const observer = useRef<IntersectionObserver | null>(null)

	const callback = useCallback(
		(node: HTMLDivElement | null) => {
			if (isLoading) return
			if (observer.current) observer.current.disconnect()
			observer.current = new IntersectionObserver(
				entries => {
					if (entries[0].isIntersecting && hasNextPage) {
						fetchNextPage()
					}
				},
				{
					rootMargin: '0px',
				},
			)
			if (node) observer.current.observe(node)
		},
		[isLoading, hasNextPage, fetchNextPage],
	)

	return (
		<Container className="w-full" py="xl">
			{isLoading ? (
				<div className="grid gap-6 grid-cols-1 sm:grid-cols-auto-fit">
					{Array.from({ length: MOVIES_LIMIT }, (_, i) => (
						<Skeleton key={i} visible={isLoading} height={350} />
					))}
				</div>
			) : (
				data?.map((d, index) => (
					<div
						key={index}
						className="grid gap-6 grid-cols-1 sm:grid-cols-auto-fit"
					>
						{d.data.movies.map((movie, index) => (
							<div
								key={movie.id}
								ref={index === d.data.movies.length - 1 ? callback : null}
							>
								<Movie movie={movie} />
							</div>
						))}
					</div>
				))
			)}
		</Container>
	)
}

export default MovieList
