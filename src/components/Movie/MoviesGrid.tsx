import { useMovies } from '@/api/hooks'
import { dummyList } from '@/store/useMovieQueryStore'
import { MovieGenre } from '@/types/movie-types'
import { AspectRatio, LoadingOverlay, Paper, SimpleGrid, Skeleton, Stack, Text, Title } from '@mantine/core'
import Link from 'next/link'
import React, { useEffect } from 'react'
import Movie from './Movie'
interface MovieByGenreProps {
	genre: MovieGenre
	withCtx?: boolean
	moviesLimit?: number
	setIsDisabled?: React.Dispatch<React.SetStateAction<boolean>>
}
const MoviesGrid: React.FC<MovieByGenreProps> = ({ genre, withCtx = true, moviesLimit = 10, setIsDisabled }) => {
	const { data: result, isLoading } = useMovies({
		genre,
		page: 1,
		minimum_rating: withCtx ? '8' : '0',
		sort_by: withCtx ? 'download_count' : 'rating',
		quality: withCtx ? '2160p' : '480p',
	})

	useEffect(() => {
		if (typeof setIsDisabled === 'function' && setIsDisabled) {
			setIsDisabled(isLoading)
		}
	}, [isLoading, setIsDisabled])

	return (
		<SimpleGrid
			cols={2}
			breakpoints={[
				{ minWidth: 'sm', cols: 3 },
				{ minWidth: 'md', cols: 4 },
				{ minWidth: 'lg', cols: 6 },
			]}
			pos="relative"
		>
			<LoadingOverlay visible={isLoading} overlayBlur={2} />
			{withCtx && (
				<Paper className="col-span-2" shadow="md" p="lg" bg="dark.6">
					<Stack justify="space-between" h="100%">
						<Stack className="gap-4 md:gap-3">
							<Title className="italic sm:3xl md:text-5xl !leading-snug font-black">
								Popular Movies to <span className="relative accent_underline">Watch NOW</span>
							</Title>
							<Text className="tracking-wider" color="dimmed">
								Highly Popular and Widely Viewed Movies of the Moment
							</Text>
						</Stack>
						<Link
							href="/browse?genre=all&quality=2160p&sort_by=download_count&minimum_rating=8"
							className="text-base font-bold no-underline hover:underline"
							style={{ color: 'red' }}
						>
							View All
						</Link>
					</Stack>
				</Paper>
			)}

			{isLoading
				? dummyList(moviesLimit).map((_, i) => (
						<div key={i}>
							<AspectRatio ratio={4 / 5}>
								<Skeleton visible h="100%" w="100%" />
							</AspectRatio>
						</div>
				  ))
				: result?.data.movies.slice(0, moviesLimit).map(movie => (
						<div key={movie.id} className="w-full h-full">
							<Movie movie={movie} withContent={false} aspect={4 / 6} />
						</div>
				  ))}
		</SimpleGrid>
	)
}

export default MoviesGrid
