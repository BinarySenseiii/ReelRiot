import Meta from '@/components/Seo'

import dynamic from 'next/dynamic'

import { Container } from '@/components/ui'
import { useMovies } from '@/api/hooks'
import { useMovieQuery } from '@/store/useMovieQueryStore'
import { useState } from 'react'
import BrowseBanner from '@/components/BrowseBanner'
import MovieList from '../components/movie/MovieList'

const MovieFilters = dynamic(() =>
	import('@/components/movie').then(mod => mod.MovieFilters),
)

const BrowsePage = () => {
	const query = useMovieQuery()
	const [page, setPage] = useState<number>(1)
	const { data: result, isLoading } = useMovies(query, page)

	return (
		<div>
			<Meta title="The Official Home Of Reel Riot - Browse Movies" />
			<BrowseBanner />
			<MovieFilters isLoading={isLoading} />
			<Container>
				<MovieList isLoading={isLoading} movies={result?.data.movies} />
			</Container>
		</div>
	)
}

export default BrowsePage
