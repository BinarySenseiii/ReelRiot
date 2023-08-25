import { IMovie } from '@/types/movie-types'
import { Skeleton, Stack, Title } from '@mantine/core'
import Movie from './Movie'

const MovieSuggestions = ({ isLoading, movies }: { isLoading: boolean; movies: IMovie[] | undefined }) => {
	return (
		<Stack spacing={'sm'}>
			<Title order={4}>Similar Movies</Title>

			{isLoading ? (
				<div className="grid grid-cols-2 gap-3">
					{Array.from({ length: 4 }, (_, i) => (
						<Skeleton key={i} visible={isLoading} height={130} width="100%" />
					))}
				</div>
			) : (
				<div className="grid grid-cols-2 gap-3">
					{movies?.map(movie => (
						<Movie key={movie.id} movie={movie} isSuggestionList withContent={false} />
					))}
				</div>
			)}
		</Stack>
	)
}

export default MovieSuggestions
