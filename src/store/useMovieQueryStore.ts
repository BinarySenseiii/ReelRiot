import { iMovieQuery } from '@/types/context/query-type'
import { create } from 'zustand'

export const MOVIES_LIMIT = 15

const useMovieQueryStore = create<iMovieQuery>(set => ({
	query: {
		page: 1,
	},
	actions: {
		onQueryChange: ({ query, key, isQueryTerm, page = 1 }) =>
			set(state => {
				const updatedQuery = isQueryTerm
					? { [key]: query, page }
					: { ...state.query, [key]: query, page }

				if (!isQueryTerm) delete updatedQuery.query_term

				return {
					query: updatedQuery,
				}
			}),

		onPaginationChange: (pageNumber: number) =>
			set(state => ({
				query: { ...state.query, page: pageNumber },
			})),
	},
}))

export const useMovieQuery = () => useMovieQueryStore(state => state.query)
export const useMovieQueryActions = () =>
	useMovieQueryStore(state => state.actions)
