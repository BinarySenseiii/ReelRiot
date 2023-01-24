import { createStyles } from '@mantine/core';

const useMovieStyles = createStyles((theme) => ({
  imageContainer: {
    position: 'relative',
    cursor: 'pointer',
  },

  innerImage: {
    position: 'relative',
    height: 'max-content',
    width: '100%',
    background: 'red',
    // overflow: 'hidden',
    transition: 'all 0.3s ease-in-out',

    '&:hover > div': {
      opacity: 1,
    },
  },

  info: {
    position: 'absolute',
    top: '20px',
    left: '-45px',
    height: 100,
    width: 100,
    background: theme.colors.brand[5],
    zIndex: 9,
    display: 'grid',
    placeContent: 'center',
    color: 'white',
    borderRadius: 2,
  },

  play: {
    position: 'absolute',
    bottom: '30px',
    right: '-21px',
    background: theme.colors.brand[5],
    height: 50,
    width: 50,
    display: 'grid',
    placeContent: 'center',
    color: 'white',
    cursor: 'pointer',
    borderRadius: '50%',
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
    gap: '2rem',
  },
}));

export default useMovieStyles;
