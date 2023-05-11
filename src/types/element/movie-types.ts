export type TMovieView = 'list' | 'grid';

export interface IFilters {
  quality: string;
  genre: string;
  rating: string;
  orderBy: string;
}

export interface ISearchQuery extends IFilters {
  query: string;
  pageNumber: number;
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
  ariaLabel: string;
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
  organizer_count: number;
  limit: number;
  movie_count: number;
  movies: IMovie[];
  page_number: number;
  isLoading?: boolean;
}

export interface IMoviesResponse {
  status: string;
  data: IMovieResult;
}

export interface IMovieDetailResponse {
  status: string;
  data: {
    movie: IMovie;
  };
}

export interface IMovieDetail {
  movie: IMovie;
}

export interface ITmdbMovie {
  vote_average: number;
  vote_count: number;
  video: boolean;
  title: string;
  release_date: string;
  poster_path: string;
  popularity: number;
  overview: string;
  original_title: string;
  original_language: string;
  media_type: string;
  id: number;
  genre_ids: number[];
  backdrop_path: string;
  adult: boolean;
}

export interface ITmdbMovieResult {
  movie_results: ITmdbMovie[];
}

export interface ICommon {
  aspect_ratio: number;
  file_path: string;
  height: number;
  iso_639_1: string;
  vote_average: number;
  vote_count: number;
  width: number;
}

export interface IImages {
  backdrops: ICommon[];
  logos: ICommon[];
  posters: ICommon[];
}

export interface IAuthor {
  avatar_path: string;
  name: string;
  rating: number;
  username: string;
}

export interface IReview {
  author_details: IAuthor;
  author: string;
  content: string;
  created_at: string;
  id: string;
  updated_at: string;
  url: string;
}

export interface IReviewResult {
  id: number;
  page: number;
  total_pages: number;
  total_results: number;
  results: IReview[];
}

export interface IVideo {
  id: string;
  iso_639_1: string;
  iso_3166_1: string;
  key: string;
  name: string;
  official: boolean;
  published_at: string;
  site: string;
  size: number;
  type: string;
}

export interface IVideoResult {
  id: number;
  results: IVideo[];
}

export interface ICredits {
  id: number;
  cast: ImdbCast[];
  crew: ImdbCast[];
}

export interface ImdbCast {
  adult: boolean;
  gender: number;
  id: number;
  known_for_department: string;
  name: string;
  original_name: string;
  popularity: number;
  profile_path: null | string;
  cast_id?: number;
  character?: string;
  credit_id: string;
  order?: number;
  department?: string;
  job?: string;
}

export interface IVideos {
  id: number;
  results: ITmdbVideosResult[];
}

export interface ITmdbVideosResult {
  iso_639_1: string;
  iso_3166_1: string;
  name: string;
  key: string;
  site: string;
  size: number;
  type: string;
  official: boolean;
  published_at: Date;
  id: string;
}

export type MovieMetaData = ICredits | IVideos;

export interface IGalleryBackdrops {
  aspect_ratio: number;
  height: number;
  iso_639_1: null;
  file_path: string;
  vote_average: number;
  vote_count: number;
  width: number;
}
