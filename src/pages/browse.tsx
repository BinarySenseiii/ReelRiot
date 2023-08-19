import { useInfiniteMovies } from '@/api/hooks'
import BrowseBanner from '@/components/BrowseBanner'
import MovieList from '@/components/Movie/MovieList'
import Meta from '@/components/Seo'
import { useMovieQuery } from '@/store/useMovieQueryStore'
import dynamic from 'next/dynamic'

const MovieFilters = dynamic(() =>
	import('@/components/Movie').then(mod => mod.MovieFilters),
)

const BrowsePage = () => {
	const query = useMovieQuery()
	const { data, isLoading, isFetching, hasNextPage, fetchNextPage } =
		useInfiniteMovies(query)

	return (
		<div className="mb-6">
			<Meta title="The Official Home Of Reel Riot - Browse Movies" />
			<BrowseBanner />
			<MovieFilters isLoading={isLoading} />

			<div className="min-h-screen">
				<MovieList
					isLoading={isLoading || isFetching}
					data={data?.pages}
					hasNextPage={hasNextPage}
					fetchNextPage={fetchNextPage}
				/>
			</div>
		</div>
	)
}

export default BrowsePage
