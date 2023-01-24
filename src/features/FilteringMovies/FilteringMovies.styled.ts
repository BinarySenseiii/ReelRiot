import { createStyles } from '@mantine/core';

export const useStyles = createStyles((theme) => ({
  flex: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },

  label: {
    marginBottom: '5px',
    fontSize: '16px',
  },

  filter_btn: {
    display: 'flex',
    marginTop: theme.spacing.md,
    justifyContent: 'flex-end',
  },
}));
