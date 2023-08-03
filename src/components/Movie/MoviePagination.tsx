import { IMovieResult } from '@/types/movie-types'
import { Pagination, Skeleton, Stack, Title } from '@mantine/core'
import React, { Dispatch, SetStateAction } from 'react'

type MoviePaginationProps = {
	isLoading: boolean
	data: IMovieResult
	page: number
	setPage: Dispatch<SetStateAction<number>>
}

const MoviePagination: React.FC<MoviePaginationProps> = ({
	isLoading,
	data,
	page,
	setPage,
}) => {
	const totalPages = data ? Math.ceil(data.movie_count / data.limit) : 0
	return (
		<Skeleton visible={isLoading} maw="400px" my="xl" mx="auto">
			<Stack spacing="md" my="xl" align="center">
				<Title align="center" fz="lg">
					{data.movie_count} Movies Found
				</Title>
				<Pagination
					value={page}
					total={totalPages}
					onChange={setPage}
					size="sm"
				/>
			</Stack>
		</Skeleton>
	)
}
export default MoviePagination
