import Meta from '@/components/Seo'
import dynamic from 'next/dynamic'
import { useMovies } from '@/api/hooks'
import BrowseBanner from '@/components/BrowseBanner'
import MovieList from '@/components/Movie/MovieList'
import { useMovieQuery } from '@/store/useMovieQueryStore'
import { Group, Skeleton, Title } from '@mantine/core'
import { Container } from '@/components/ui'

const MovieFilters = dynamic(() =>
	import('@/components/Movie').then(mod => mod.MovieFilters),
)

const BrowsePage = () => {
	const query = useMovieQuery()
	const { data: result, isLoading } = useMovies(query)

	return (
		<div className="mb-6">
			<Meta title="The Official Home Of Reel Riot - Browse Movies" />
			<BrowseBanner />
			<MovieFilters isLoading={isLoading} />
			<MovieList isLoading={isLoading} movies={result?.data.movies} />
		</div>
	)
}

export default BrowsePage
