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
    // height: 325,

    '&:hover > div': {
      opacity: 1,
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
    background: 'rgba(0,0,0,0.5)',
    zIndex: 1,
    display: 'grid',
    placeContent: 'center',
    opacity: 0,
    transition: 'all 0.3s ease-in-out',
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
