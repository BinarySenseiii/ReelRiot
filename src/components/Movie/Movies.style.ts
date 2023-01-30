import { createStyles } from '@mantine/core';

const useMovieStyles = createStyles((theme) => ({
  imageContainer: {
    position: 'relative',
    cursor: 'pointer',
  },

  cover__image: {
    position: 'relative',
    height: 400,
    width: '100%',
  },

  main_content: {
    background: '#1a1b1e',
    position: 'relative',
    borderRadius: 8,
  },

  innerImage: {
    position: 'relative',
    width: '100%',
    transition: 'all 0.3s ease-in-out',
    borderRadius: '3px',

    '&:hover > div': {
      opacity: 1,
      outline: '3px solid red',
      background: 'rgb(168 24 24 / 23%)',
      borderRadius: '3px',
    },
  },

  image: {
    width: '100% !important',
  },

  listImage: {
    position: 'relative',
    height: 'max-content',
    width: '100%',
  },

  card: {
    display: 'grid',
    gridTemplateColumns: '160px 1fr',
    boxShadow: '3px 4px 10px rgba(0,0,0,0.5)',
    background: theme.colors.dark[8],
    '@media screen and (max-width: 500px)': {
      gridTemplateColumns: '1fr',
    },
  },

  overlay: {
    position: 'absolute',
    inset: 0,
    zIndex: 2,
    height: '100%',
    width: '100%',
  },

  overlay_info: {
    position: 'absolute',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-end',
    paddingBlock: theme.spacing.xs,
    paddingInline: theme.spacing.md,
    left: 0,
    bottom: 0,
    width: '100%',
    zIndex: 2,
    background: 'rgba(0,0,0,0.6)',

    '@media(max-width: 768px)': {
      paddingInline: '5px',
    },
  },

  bookmarked: {
    position: 'absolute',
    right: 10,
    top: 10,
  },

  // movie-details
  detail_grid: {
    display: 'grid',
    gridTemplateColumns: '1fr 2fr',
    gap: '1rem',

    background: '#1a1b1e',
    position: 'relative',
    borderRadius: 8,
  },
}));

export default useMovieStyles;
