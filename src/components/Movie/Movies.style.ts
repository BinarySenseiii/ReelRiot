import { createStyles } from '@mantine/core';

const useMovieStyles = createStyles((theme) => ({
  main_content: {
    background: '#1a1b1e',
    position: 'relative',
    borderRadius: 8,
  },

  imageContainer: {
    position: 'relative',
    cursor: 'pointer',
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
}));

export default useMovieStyles;
