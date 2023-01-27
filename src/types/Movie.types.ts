export interface IFilters {
  quality: string;
  genre: string;
  rating: string;
  orderBy: string;
  query?: string;
}

export interface IFilter {
  value: string;
  label: string;
}

export interface IFilterOption {
  id: number;
  label: string;
  filter: any;
  value: any;
}

export interface IGridView {
  id: string | number;
  name: string;
  image: string;
  year: number;
  category: string[];
}

export interface IListView extends IGridView {
  info: string;
}

export type TMovieView = 'list' | 'grid';
