import { useMovies } from '@/api/hooks'
import BrowseBanner from '@/components/BrowseBanner'
import { MoviePagination } from '@/components/Movie'
import MovieList from '@/components/Movie/MovieList'
import Meta from '@/components/Seo'
import { MOVIES_LIMIT, useMovieQuery, useMovieQueryActions } from '@/store/useMovieQueryStore'
import { QueryKey } from '@/types/context/query-type'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'
import { useEffect, useMemo } from 'react'

const MovieFilters = dynamic(() => import('@/components/Movie').then(mod => mod.MovieFilters))

const BrowsePage = () => {
	const query = useMovieQuery()
	const { onQueryChange, resetState } = useMovieQueryActions()

	const router = useRouter()
	const { data: result, isLoading } = useMovies(query)

	const totalPages = result?.data ? Math.ceil(result.data.movie_count / MOVIES_LIMIT) : 0

	useEffect(() => {
		if (router.query.genre) {
			for (const [key, value] of Object.entries(router.query)) {
				onQueryChange({ query: value as string, key: key as QueryKey, page: 1 })
			}
		} else {
			resetState()
		}
	}, [onQueryChange, resetState, router.query])

	const moviePaginationProps = useMemo(
		() => ({
			isLoading,
			total: totalPages,
			movieCount: result?.data.movie_count,
		}),
		[isLoading, totalPages, result?.data.movie_count],
	)

	return (
		<div className="mb-6">
			<Meta title="The Official Home Of Reel Riot - Browse Movies" />
			<BrowseBanner />
			<MovieFilters isLoading={isLoading} />
			<MoviePagination {...moviePaginationProps} withCount />
			<MovieList isLoading={isLoading} movies={result?.data.movies} />
			<MoviePagination {...moviePaginationProps} />
		</div>
	)
}

export default BrowsePage
