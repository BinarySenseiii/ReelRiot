import { createStyles } from '@mantine/core';

export const useStyles = createStyles((theme) => ({
  wrapper: {
    width: '80%',
    display: 'flex',
    flexDirection: 'column',
    gap: 10,
    margin: 'auto',
   },
  search: {
    width: '100%',
  },
  filters: {
    width: '100%',
  },
  dropdown: {
    '&[data-selected]': {
      '&, &:hover': {
        color: theme.colors.brand[5],
      },
    },
  },
  searchbtn: {
    marginLeft: 'auto',
  },
}));
