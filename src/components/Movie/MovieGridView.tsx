import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { SimpleGrid } from '@mantine/core';
import { MovieCard } from '@/components/Movie/Movie';
import { IGridView } from '@/types/Movie.types';

type MovieGridViewProps = {};
const URL = '';

const MovieGridView: React.FC<MovieGridViewProps> = () => {
  const [movies, setMovies] = useState<IGridView[]>([]);

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
    <SimpleGrid
      cols={5}
      breakpoints={[
        { maxWidth: 1200, cols: 5 },
        { maxWidth: 992, cols: 4 },
        { maxWidth: 768, cols: 3 },
        { maxWidth: 576, cols: 2 },
        { maxWidth: 400, cols: 1 },
      ]}
    >
      {/* {movies.map((movie) => {
        <MovieCard
          key={movie.id}
          name={movie.name}
          image={movie.image}
          year={movie.year}
          category={movie.category}
        />;
      })} */}

      {Array.from({ length: 20 }, (_, i) => (
        <MovieCard key={i} />
      ))}
    </SimpleGrid>
  );
};
export default MovieGridView;
