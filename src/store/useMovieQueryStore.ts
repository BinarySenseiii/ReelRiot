import { create } from 'zustand'

export interface IQuery {
	quality?: string
	genre?: string
	minimum_rating?: string
	sort_by?: string
	query_term?: string
}

interface iMovieQuery {
	query: IQuery

	actions: {
		onQueryChange: (
			queryValue: string,
			key: string,
			isQueryTerm?: boolean,
		) => void
	}
}

const useMovieQueryStore = create<iMovieQuery>(set => ({
	query: {},
	actions: {
		onQueryChange: (query, key, isQueryTerm) =>
			set(state => {
				const updatedQuery = isQueryTerm
					? { [key]: query }
					: { ...state.query, [key]: query }

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
