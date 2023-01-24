import { Button, Group, Select, TextInput } from '@mantine/core';
import React from 'react';
import { movieGenres, movieOrder, movieQuality, movieRatings } from './FilteringMovies.mock';
import { useStyles } from './FilteringMovies.styled';

type FilteringMoviesProps = {};

const FilteringMovies: React.FC<FilteringMoviesProps> = () => {
  const { classes } = useStyles();
  return (
    <div className={classes.wrapper}>
    <TextInput label="Search Movie:" className={classes.search} />
    <Group position="center" className={classes.filters}>
      <Select label="Quality:" defaultValue="All" placeholder="All" className={classes.dropdown} data={movieQuality} />
      <Select label="Genre:" defaultValue="All" placeholder="All" className={classes.dropdown} data={movieGenres} />
      <Select label="Rating:" defaultValue="All" placeholder="All" className={classes.dropdown} data={movieRatings} />
      <Select label="Order by:" defaultValue="Date added" placeholder="Date added" className={classes.dropdown} data={movieOrder} />
    </Group>
    <Button color="brand" className={classes.searchbtn}>
      Search
    </Button>
    </div>
  );
};
export default FilteringMovies;
