import { create } from 'zustand';
import { devtools, redux } from 'zustand/middleware';
import { ISearchQuery } from '@/types/Movie.types';

interface IMovieState {
  searchQuery: string;
}

export enum ACTIONS {
  searchQuery = 'SEARCH_MOVIES_QUERY',
}

interface IActions {
  type: ACTIONS;
  payload: ISearchQuery;
}

const initialState: IMovieState = {
  searchQuery: 'quality=all&genre=all&minimum_rating=0&sort_by=date_added&limit=20&page=1',
};

const reducer = (state: IMovieState, { type, payload }: IActions): IMovieState => {
  switch (type) {
    case 'SEARCH_MOVIES_QUERY':
      return {
        ...state,
        searchQuery: `query_term=${payload.query}&quality=${payload.quality}&genre=${payload.genre}&minimum_rating=${payload.rating}&sort_by=${payload.orderBy}&page=${payload.pageNumber}`,
      };
    default:
      return state;
  }
};

export const useMovieStore = create(devtools(redux(reducer, initialState)));
