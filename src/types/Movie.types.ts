export interface IFilters {
  quality: string;
  genre: string;
  rating: string;
  orderBy: string;
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

export type TMovieView = 'list' | 'grid';
