import { Box, Flex, ScrollArea, Skeleton } from '@mantine/core';
import React from 'react';
import { ICast, ITmdbMovie, ImdbCast } from '@/types/Movie.types';
import Cast from './Cast';

type MovieCastProps = {
  isLoading: boolean;
  credits: ImdbCast[];
  cast: ICast[];
  tmdbMovie: ITmdbMovie;
};

const MovieCast: React.FC<MovieCastProps> = ({ isLoading, credits, cast, tmdbMovie }) => (
  <>
    {isLoading ? (
      <ScrollArea mt="xl">
        <Flex gap="20px">
          {Array.from({ length: 10 }, (_, i) => (
            <Skeleton key={i} visible height={80} width={80} />
          ))}
        </Flex>
      </ScrollArea>
    ) : (
      <>
        {credits.length !== 0 && typeof cast !== 'undefined' && (
          <Box>
            {tmdbMovie && credits.length > 0 ? (
              <Cast isTitle credits={credits} />
            ) : (
              <Cast isTitle casts={cast} />
            )}
          </Box>
        )}
      </>
    )}
  </>
);
export default MovieCast;
