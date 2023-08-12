import { createStyles } from '@mantine/core'

const useMovieStyles = createStyles(() => ({
	innerImage: {
		borderRadius: '3px',
		'&:hover': {
			outline: `3px solid red`,
		},
	},

	root: {
		background: 'white',
		color: 'black',
		position: 'absolute',
		right: '4px',
		top: '4px',
	},
}))

export default useMovieStyles
