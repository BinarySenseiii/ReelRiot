import { createStyles } from '@mantine/core';

export const useFooterStyles = createStyles((theme) => ({
  root: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    background: theme.colors.dark[8],
    marginTop: 'auto',
    padding: '20px 0',
  },
}));
