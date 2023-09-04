import { createStyles, rem } from '@mantine/core'

export const HEADER_HEIGHT = 70

export const useStyles = createStyles(theme => ({
	root: {
		zIndex: 99,
		marginBottom: '0 !important',
		background: 'transparent',
		top: 0,
		backdropFilter: `blur(${rem('16px')})`,
		backgroundColor: 'rgb(17 24 39/0.2)',
	},

	dropdown: {
		position: 'absolute',
		top: HEADER_HEIGHT - 5,
		left: 0,
		right: 0,
		zIndex: 99,
		border: 0,
		backdropFilter: `blur(${rem('16px')})`,
		backgroundColor: 'rgb(17 24 39/0.2)',
		borderRadius: 0,

		[theme.fn.largerThan('sm')]: {
			display: 'none',
		},
	},

	header: {
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
		height: HEADER_HEIGHT,
	},

	links: {
		display: 'flex',
		gap: rem('20px'),
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
		position: 'relative',
		display: 'block',
		lineHeight: 1,
		borderRadius: theme.radius.sm,
		textDecoration: 'none',
		color: theme.colors.gray[1],
		fontSize: theme.fontSizes.md,
		fontWeight: 500,
		transition: 'all 0.5s ease-in-out',

		[theme.fn.largerThan('sm')]: {
			'&::before': {
				content: "''",
				position: 'absolute',
				bottom: -27,
				width: '100%',
				height: '4px',
				background: 'red',
				transition: 'all 0.3s ease-in-out',
				transform: 'scale(0, 1)',
			},
		},

		'&:hover': {
			'&::before': {
				transform: 'scale(1, 1)',
			},
		},

		[theme.fn.smallerThan('sm')]: {
			borderRadius: 0,
			padding: theme.spacing.md,
		},
	},

	linkActive: {
		fontWeight: 600,
		'&::before': {
			transform: 'scale(1, 1)',
		},
		[theme.fn.smallerThan('sm')]: {
			textDecoration: 'underline',
		},
	},

	logo: {
		display: 'inline-block',
		textDecoration: 'none',
		fontStyle: 'italic',
	},
}))
