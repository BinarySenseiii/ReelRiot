import { MovieGenre } from '../movie-types'

export type QueryType = {
	quality?: string
	genre?: MovieGenre
	minimum_rating?: string
	sort_by?: string
	query_term?: string
	page?: number
}

export type QueryKey = 'quality' | 'genre' | 'minimum_rating' | 'sort_by' | 'query_term'

export interface QueryActionType {
	query: string
	key: QueryKey
	isQueryTerm?: boolean
	page: number
}

export interface iMovieQuery {
	query: QueryType
	actions: {
		onQueryChange: (queryAction: QueryActionType) => void
		resetState: () => void
		onPaginationChange: (pageNumber: number) => void
	}
}
