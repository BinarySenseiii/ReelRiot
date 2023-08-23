import { useMovieQuery, useMovieQueryActions } from '@/store/useMovieQueryStore'
import { Box, Pagination, Skeleton, Stack, Text, Title } from '@mantine/core'
import { useMediaQuery } from '@mantine/hooks'
import React from 'react'
import { BiSolidCameraMovie } from 'react-icons/bi'

type MoviePaginationProps = {
	total: number
	isLoading: boolean
	movieCount: number | undefined
	withCount?: boolean
}

const MoviePagination: React.FC<MoviePaginationProps> = ({
	total,
	isLoading,
	movieCount,
	withCount = false,
}) => {
	const matches = useMediaQuery('(max-width: 768px)')
	const { page } = useMovieQuery()
	const { onPaginationChange } = useMovieQueryActions()

	return (
		<>
			{isLoading ? (
				<Box mt="xl" className="flex flex-col justify-center space-y-3">
					{withCount && (
						<Skeleton height={30} visible width={200} mx={'auto'}></Skeleton>
					)}
					<Skeleton visible height={40} width={300} mx={'auto'} />
				</Box>
			) : (
				<Stack align="center" mt={withCount ? 'xl' : 'xs'}>
					{withCount &&
						(movieCount !== undefined && movieCount > 0 ? (
							<Title align="center" fz="lg">
								{movieCount} Movies Found
							</Title>
						) : (
							<Stack align="center">
								<BiSolidCameraMovie size={70} opacity={0.4} />
								<Text className="max-w-2xl text-center">
									Oops, 0 Movies Found 🎬. It looks like the movie you&apos;re
									searching for isn&apos;t in our collection. Maybe you could
									try searching with a different title. How about checking out
									some popular movies?
								</Text>
							</Stack>
						))}
					<Pagination
						value={page}
						total={total}
						size={matches ? 'xs' : 'sm'}
						onChange={pn => onPaginationChange(pn)}
						disabled={isLoading}
					/>
				</Stack>
			)}
		</>
	)
}
export default MoviePagination
