import { useMovie } from '@/api/hooks'
import useTmdbMovie from '@/api/hooks/useTmdbMovie'
import { TMDB_MOVIE_CACHE_KEY, YTS_MOVIE_CACHE_KEY } from '@/api/query-keys'
import { tmdbRequest, ytsRequest } from '@/api/request'
import { Container } from '@/components/ui'
import { ICredits } from '@/types/movie-types'
import { QueryClient, dehydrate, useQueries } from '@tanstack/react-query'
import { GetServerSideProps, NextPage } from 'next'
import { useRouter } from 'next/router'

const MovieDetailPage: NextPage = () => {
	const router = useRouter()
	const { id: imdbCode } = router.query

	const { data: ytsMovie } = useMovie(imdbCode as string)
	const { data: tMovie } = useTmdbMovie(imdbCode as string)

	const isTmdbMovie = !!tMovie && tMovie.length > 0

	const [credits, images, videos, reviews] = useQueries({
		queries: tmdbRequest.queries.map(query => ({
			queryKey: [TMDB_MOVIE_CACHE_KEY, { imdbCode, query: query.endpoint }],
			queryFn: () => query.fetcherFunc(imdbCode as string),
			enabled: isTmdbMovie,
		})),
	})

	const cred = credits.data as ICredits

	return (
		<Container className="w-full" py="xl">
			MovieDetailPage
		</Container>
	)
}

export default MovieDetailPage

export const getServerSideProps: GetServerSideProps = async context => {
	const { id: imdbCode } = context.query
	const queryClient = new QueryClient()

	await queryClient.prefetchQuery([YTS_MOVIE_CACHE_KEY, { imdbCode }], () =>
		ytsRequest.getMovie(imdbCode as string),
	)

	await queryClient.prefetchQuery([TMDB_MOVIE_CACHE_KEY, { imdbCode }], () =>
		tmdbRequest.getMovieDetails(imdbCode as string),
	)

	return {
		props: {
			dehydratedState: dehydrate(queryClient),
		},
	}
}
