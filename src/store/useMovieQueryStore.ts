import { iMovieQuery } from '@/types/context/query-type'
import { create } from 'zustand'

export const MOVIES_LIMIT = 15

const useMovieQueryStore = create<iMovieQuery>(set => ({
	query: {},
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
	},
}))

export const useMovieQuery = () => useMovieQueryStore(state => state.query)
export const useMovieQueryActions = () =>
	useMovieQueryStore(state => state.actions)
