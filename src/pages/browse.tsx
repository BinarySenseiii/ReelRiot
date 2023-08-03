import Meta from '@/components/Seo'

import dynamic from 'next/dynamic'

import { useMovies } from '@/api/hooks'
import BrowseBanner from '@/components/BrowseBanner'
import MovieGridView from '@/components/Movie/MovieGridView'
import { Container } from '@/components/ui'
import { useMovieQuery } from '@/store/useMovieQueryStore'
import { useState } from 'react'

const MovieFilters = dynamic(() =>
	import('@/components/Movie').then(mod => mod.MovieFilters),
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
				<MovieGridView isLoading={isLoading} movies={result?.data.movies} />
			</Container>
		</div>
	)
}

export default BrowsePage
