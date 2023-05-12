import { Container } from '@/components/ui';
import { filterOptions } from '@/mock';
import {
  useMovieQuery,
  useMovieQueryActions,
} from '@/store/useMovieQueryStore';
import { IFilterOption, IFilters } from '@/types/element/movie-types';
import { Box, Button, Select, SimpleGrid, TextInput } from '@mantine/core';
import { getHotkeyHandler } from '@mantine/hooks';
import React, { useRef } from 'react';
import useMovieStyles from './movieSyles';

const FilteringMovies: React.FC<{ isLoading: boolean }> = ({ isLoading }) => {
  const ref = useRef<HTMLInputElement>(null);
  const { onQueryChange } = useMovieQueryActions();
  const query = useMovieQuery();
  const { classes } = useMovieStyles();

  const onQuerySubmit = () => {
    if (typeof ref !== 'undefined' && ref.current) {
      if (!ref.current.value) return;
      onQueryChange(ref.current.value, 'query_term', true);
    }
  };

  const onOptionSelect = (option: IFilterOption, value: string) => {
    onQueryChange(value, option.value);

    if (ref.current) {
      ref.current.value = '';
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
          ref={ref}
          onKeyDown={getHotkeyHandler([['Enter', onQuerySubmit]])}
          classNames={{
            label: classes.label,
            rightSection: classes.rightSection,
          }}
          label="Search Term:"
          size="md"
          radius="md"
          autoComplete="off"
          placeholder="Search Movie By  Movie Title Or IMDB Code"
          rightSection={
            <Button
              size="sm"
              uppercase
              compact
              loaderPosition="center"
              onClick={onQuerySubmit}
              loading={isLoading}
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
              value={
                query.query_term ? '' : query[option.value as keyof IFilters]
              }
              onChange={(e) => onOptionSelect(option, e ?? '')}
              data={option.filter}
              aria-label={option.ariaLabel}
              placeholder="Choose"
            />
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default FilteringMovies;
