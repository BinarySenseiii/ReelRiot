export const SEARCH_BASE_URL = (
  query: string,
  quality: string,
  genre: string,
  rating: string,
  orderBy: string
) =>
  `?query_term=${query}&quality=${quality}&genre=${genre}&minimum_rating=${rating}&sort_by=${orderBy}`;
