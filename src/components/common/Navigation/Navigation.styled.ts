/* eslint-disable linebreak-style */
import { createStyles } from '@mantine/core';

export const HEADER_HEIGHT = 70;

export const useStyles = createStyles((theme) => ({
  root: {
    position: 'relative',
    zIndex: 1,
    marginBottom: '0 !important',
    borderBottom: 0,
    // background: '#232429',
  },

  dropdown: {
    position: 'absolute',
    top: HEADER_HEIGHT,
    left: 0,
    right: 0,
    zIndex: 0,
    borderTopRightRadius: 0,
    borderTopLeftRadius: 0,
    borderTopWidth: 0,
    overflow: 'hidden',

    [theme.fn.largerThan('sm')]: {
      display: 'none',
    },
  },

  header: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    padding: '1rem',
    // height: HEADER_HEIGHT,
    // background: '#232429',
  },

  links: {
    [theme.fn.smallerThan('sm')]: {
      display: 'none',
    },
  },

  burger: {
    [theme.fn.largerThan('sm')]: {
      display: 'none',
    },
  },

  link: {
    display: 'block',
    lineHeight: 1,
    padding: '8px 12px',
    borderRadius: theme.radius.sm,
    textDecoration: 'none',
    color: theme.colors.gray[1],
    fontSize: theme.fontSizes.md,
    fontWeight: 500,
    // fontFamily: 'Roboto Condensed',

    '&:hover': {
      backgroundColor: theme.colors.brand[5],
    },

    [theme.fn.smallerThan('sm')]: {
      borderRadius: 0,
      padding: theme.spacing.md,
    },
  },

  linkActive: {
    '&, &:hover': {
      backgroundColor: 'white',
      color: theme.colors.dark[9],
    },
  },

  logo: {
    display: 'inline-block',
    textDecoration: 'none',
    fontStyle: 'italic',
  },

  flex: {
    display: 'flex',
  },

  navlist: {
    listStyle: 'none',
  },

  unorderedList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '14px',
  },
  navLinks: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginRight: 'auto',
    textDecoration: 'none',
    fontSize: '18px',
    gap: '10px',
    color: 'grey',
    transition: '.3s ease',
    '&:hover ': {
      color: 'white',
    },
  },
}));
