import { Container } from '@/components/ui';
import { IFilterOption, IFilters } from '@/types/element/movie-types';
import { Box, Button, Select, SimpleGrid, TextInput } from '@mantine/core';
import React, { useState } from 'react';
import useMovieStyles from './movieSyles';
import { filterOptions } from '@/mock';

const FilteringMovies: React.FC = () => {
  const { classes } = useMovieStyles();
  const [query, setQuery] = useState('');
  const [state, setState] = useState<IFilters>({
    quality: 'all',
    genre: 'all',
    rating: '0',
    orderBy: 'date_added',
  });

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
      sx={(theme) => ({
        background: theme.colors.dark[8],
        paddingBottom: '35px !important',
      })}
      py="xl"
    >
      <Container size="sm">
        <TextInput
          classNames={{
            label: classes.label,
            rightSection: classes.rightSection,
          }}
          label="Search Term:"
          size="md"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          radius="md"
          autoComplete="off"
          rightSection={
            <Button
              size="sm"
              uppercase
              compact
              sx={(theme) => ({ fontFamily: theme.headings.fontFamily })}
              loaderPosition="center"
            >
              Search
            </Button>
          }
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
          {filterOptions.map((option: IFilterOption) => (
            <Select
              key={option.id}
              label={option.label}
              classNames={{ label: classes.label }}
              styles={{
                label: {
                  fontSize: '14px !important',
                },
              }}
              size="xs"
              value={state[option.value as keyof IFilters]}
              onChange={(e) => onFilterChange(e, option.value)}
              data={option.filter}
              aria-label={option.ariaLabel}
            />
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
};
export default FilteringMovies;
