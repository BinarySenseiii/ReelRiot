/* eslint-disable no-console */
import { Box, Button, Group, Select, SimpleGrid, TextInput } from '@mantine/core';
import React, { useState } from 'react';
import axios from 'axios';
import { Container } from '@/components/ui';
import { IFilterOption, IFilters } from '@/types/Movie.types';
import { options } from './FilteringMovies.mock';
import { useStyles } from './FilteringMovies.styled';

type FilteringMoviesProps = {};

const FilteringMovies: React.FC<FilteringMoviesProps> = () => {
  const { classes } = useStyles();
  const [query, setQuery] = useState('');
  const [state, setState] = useState<IFilters>({
    quality: 'all',
    genre: 'all',
    rating: '0',
    orderBy: 'date_added',
  });

  const url = `https://yts.mx/api/v2/list_movies.json?query_term=${query}&quality=${state.quality}&genre=${state.genre}&minimum_rating=${state.rating}&sort_by=${state.orderBy}`;
  const onMovieFilter = () => {
    //api call.
    axios.get(url)
    .then((response) => {
      console.log(response.data);
    });
  };

  const onFilterChange = (filteredValue: string | null, key: string) => {
    if (filteredValue !== null) {
      setState((prevState) => ({
        ...prevState,
        [key]: filteredValue,
      }));
    }
  };

  return (
    <Box
      sx={(theme) => ({ background: theme.colors.dark[8], paddingBottom: '35px !important' })}
      py="xl"
    >
      <Container size="sm">
        <TextInput
          classNames={{ label: classes.label }}
          label="Search Term:"
          size="md"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          radius="md"
        />

        <SimpleGrid
          cols={4}
          spacing="sm"
          mt="xs"
          breakpoints={[
            { maxWidth: 980, cols: 4, spacing: 'md' },
            { maxWidth: 768, cols: 3, spacing: 'sm' },
            { maxWidth: 600, cols: 2, spacing: 'xs' },
          ]}
        >
          {options.map(({ id, label, filter, value }: IFilterOption) => (
            <Select
              key={id}
              label={label}
              classNames={{ label: classes.label }}
              styles={{
                label: {
                  fontSize: '14px !important',
                },
              }}
              size="xs"
              value={state[value as keyof IFilters]}
              onChange={(e) => onFilterChange(e, value)}
              data={filter}
            />
          ))}
        </SimpleGrid>

        <Group position="right" mt="md">
          <Button size="xs" onClick={onMovieFilter}>
            Search
          </Button>
        </Group>
      </Container>
    </Box>
  );
};
export default FilteringMovies;
