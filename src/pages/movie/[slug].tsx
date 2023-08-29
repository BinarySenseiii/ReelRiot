import { getPosterImage } from '@/api/config'
import { useMovie } from '@/api/hooks'
import useTmdbMovie from '@/api/hooks/useTmdbMovie'
import { TMDB_MOVIE_CACHE_KEY, YTS_MOVIE_CACHE_KEY } from '@/api/query-keys'
import { tmdbRequest, ytsRequest } from '@/api/request'
import { MovieLeftContent, MovieRightContent } from '@/components/Movie'
import { Container } from '@/components/ui'
import { Button, Grid } from '@mantine/core'
import { QueryClient, dehydrate } from '@tanstack/react-query'
import { GetServerSideProps, NextPage } from 'next'
import { useRouter } from 'next/router'
import { FaArrowLeft } from 'react-icons/fa'

const MovieDetailPage: NextPage = () => {
	const router = useRouter()
	const { id: imdbCode } = router.query

	const { data: ytsMovie } = useMovie(imdbCode as string)
	const { data: tMovie } = useTmdbMovie(imdbCode as string)

	const isTmdbMovie = !!tMovie && tMovie.length > 0

	return (
		<Container className="w-full">
			<Button my="md" size="xs" variant="filled" color="dark" leftIcon={<FaArrowLeft />} onClick={() => router.back()}>
				Back
			</Button>

			<Grid className="items-start">
				<MovieLeftContent
					key={ytsMovie?.id}
					imdb_code={ytsMovie?.imdb_code}
					title={ytsMovie?.title_english ?? ''}
					posterSrc={isTmdbMovie ? getPosterImage(tMovie.at(0)?.poster_path ?? '') : ytsMovie?.large_cover_image ?? ''}
				/>

				<MovieRightContent isTmdbMovie={isTmdbMovie} ytsMovie={ytsMovie} tMovie={tMovie} />
			</Grid>
		</Container>
	)
}

export default MovieDetailPage

export const getServerSideProps: GetServerSideProps = async context => {
	const { id: imdbCode } = context.query
	const queryClient = new QueryClient()

	await queryClient.prefetchQuery([YTS_MOVIE_CACHE_KEY, { imdbCode }], () => ytsRequest.getMovie(imdbCode as string))

	await queryClient.prefetchQuery([TMDB_MOVIE_CACHE_KEY, { imdbCode }], () =>
		tmdbRequest.getMovieDetails(imdbCode as string),
	)

	return {
		props: {
			dehydratedState: dehydrate(queryClient),
		},
	}
}
