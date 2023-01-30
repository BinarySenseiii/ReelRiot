export const movieDetailUrl = (id?: string) =>
  `/movie_details.json?movie_id=${id}&with_images=true&with_cast=true`;

export const movieSuggestions = (id?: number) => `/movie_suggestions.json?movie_id=${id}`;
