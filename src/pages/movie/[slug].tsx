import { tmdbRequest, ytsRequest } from '@/api/request'
import { IMovieResponse } from '@/api/request/tmdb'
import { IMovie, ITmdbMovie, ITmdbMovieResult } from '@/types/movie-types'
import { GetServerSideProps } from 'next'

interface IMovieDetailProps {
	movie: IMovie
	tMovie: ITmdbMovie
}

const MovieDetailPage: React.FC<IMovieDetailProps> = ({ movie, tMovie }) => {
	console.log('tMovie::: ', tMovie)
	console.log('movie::: ', movie)
	return <div>MovieDetailPage</div>
}

export default MovieDetailPage

export const getServerSideProps: GetServerSideProps = async context => {
	const { id } = context.query

	const { movie_results } = await tmdbRequest.getMovieDetails<ITmdbMovieResult>(
		id as string,
	)
	const { data } = await ytsRequest.getMovie<IMovieResponse>(id as string)

	return {
		props: {
			movie: data.movie,
			tMovie: movie_results.length > 0 ? movie_results[0] : null,
		},
	}
}
