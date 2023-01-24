/* eslint-disable no-console */
import { Box, Button, Select, SimpleGrid, TextInput } from '@mantine/core';
import React, { useState } from 'react';
import { Container } from '@/components/ui';
import { options } from './FilteringMovies.mock';
import { useStyles } from './FilteringMovies.styled';
import { IFilterOption, IFilters } from '@/types/Movie.types';

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

  const onMovieFilter = () => console.log('later api call will goes here!!');

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
        <Box className={classes.flex}>
          <TextInput
            classNames={{
              label: classes.label,
            }}
            placeholder=""
            label="Search Term:"
            size="md"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            radius="md"
            sx={{ flex: 1 }}
          />
        </Box>

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
              classNames={{
                label: classes.label,
              }}
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

        <Box className={classes.filter_btn}>
          <Button size="xs" onClick={onMovieFilter}>
            Search
          </Button>
        </Box>
      </Container>
    </Box>
  );
};
export default FilteringMovies;
