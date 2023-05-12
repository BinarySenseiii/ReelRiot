import { createStyles } from '@mantine/core';

const useMovieStyles = createStyles((theme) => ({
  label: {
    marginBottom: theme.spacing.xs,
  },

  rightSection: {
    right: '23px',
  },

  innerImage: {
    borderRadius: '3px',
    '&:hover': {
      outline: `3px solid red`,
    },
  },
}));

export default useMovieStyles;
