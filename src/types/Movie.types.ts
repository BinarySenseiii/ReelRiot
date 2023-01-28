export type TMovieView = 'list' | 'grid';

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

export interface ITorrent {
  url: string;
  type: string;
  size_bytes: number;
  seeds: number;
  size: string;
  quality: string;
  peers: number;
  hash: string;
  date_uploaded_unix: number;
  date_uploaded: string;
}

export interface ICast {
  name: string;
  character_name: string;
  url_small_image: string;
  imdb_code: string;
}

export interface IMovie {
  background_image: string;
  background_image_original: string;
  date_uploaded: string;
  date_uploaded_unix: number;
  description_full: string;
  genres: string[];
  torrents: ITorrent[];
  id: number;
  imdb_code: string;
  language: string;
  large_cover_image: string;
  medium_cover_image: string;
  small_cover_image: string;
  mpa_rating: string;
  rating: number;
  runtime: number;
  slug: string;
  summary: string;
  synopsis: string;
  title: string;
  title_english: string;
  title_long: string;
  url: string;
  year: number;
  yt_trailer_code: string;
  cast: ICast[];

  large_screenshot_image1: string;
  large_screenshot_image2: string;
  large_screenshot_image3: string;
}
export interface IMovieResult {
  limit: number;
  movie_count: number;
  movies: IMovie[];
  page_number: number;
}

export interface IMovieDetail {
  movie: IMovie;
}
