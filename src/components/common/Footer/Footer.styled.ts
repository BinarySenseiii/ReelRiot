import { createStyles } from '@mantine/core';

export const useStyles = createStyles((theme) => ({
  root: {
    height: 70,
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    background: theme.colors.dark[8],
    marginTop: 'auto',
  },
}));
