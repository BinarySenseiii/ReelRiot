import { create } from 'zustand';
import { devtools, redux } from 'zustand/middleware';
import { IMovieResult } from '../types/Movie.types';

interface IMovieState {
  searchQuery: string;
  searchedResult: IMovieResult;
}

export enum ACTIONS {
  searchQuery = 'SEARCH_MOVIES_QUERY',
  searchedResult = 'MOVIES_SEARCHED_RESULT',
}

interface IActions {
  type: ACTIONS;
  payload: any;
}

const initialState: IMovieState = {
  searchQuery: 'quality=all&genre=all&minimum_rating=0&sort_by=date_added',
  searchedResult: {
    limit: 20,
    movie_count: 0,
    movies: [],
    page_number: 0,
    isLoading: false,
  },
};

const reducer = (state: IMovieState, { type, payload }: IActions): IMovieState => {
  switch (type) {
    case 'SEARCH_MOVIES_QUERY':
      return {
        ...state,
        searchQuery: `query_term=${payload.query}&quality=${payload.quality}&genre=${payload.genre}&minimum_rating=${payload.rating}&sort_by=${payload.orderBy}`,
      };

    case 'MOVIES_SEARCHED_RESULT':
      return {
        ...state,
        searchedResult: payload,
      };
    default:
      return state;
  }
};

export const useMovieStore = create(devtools(redux(reducer, initialState)));
