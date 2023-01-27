import { Stack } from '@mantine/core';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { MovieListCard } from '@/components/Movie/Movie';
import { IListView } from '@/types/Movie.types';

const URL = '';

type MovieListViewProps = {};

const MovieListView: React.FC<MovieListViewProps> = () => {
  const [movies, setMovies] = useState<IListView[]>([]);

  useEffect(() => {
    axios
      .get(URL)
      .then((data) => {
        console.log(data);
        // setMovies(data);
      })
      .catch((err) => {
        console.log(err);
      });
  });
  return (
    <Stack>
      {/* {movies.map((movie) => {
        <MovieListCard
          key={movie.id}
          name={movie.name}
          image={movie.image}
          info={movie.info}
          year={movie.year}
          category={movie.category}
        />;
      })} */}
      {Array.from({ length: 20 }, (_, i) => (
        <MovieListCard key={i} />
      ))}
    </Stack>
  );
};
export default MovieListView;
