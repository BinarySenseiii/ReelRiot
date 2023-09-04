import ScrollToTop from '@/components/ScrollToTop'
import Meta from '@/components/Seo'
import React, { ReactNode } from 'react'
import NextNProgress from 'nextjs-progressbar'
import { Box, createStyles } from '@mantine/core'
import { Footer } from './Footer'
import { Navigation } from './Navigation'

type BaseLayoutProps = {
	children: ReactNode
}

const useBaseLayoutStyles = createStyles(() => ({
	layout__Wrapper: {
		display: 'flex',
		flexDirection: 'column',
		minHeight: '100vh',

		'& #__root': {
			paddingBottom: 32,
		},
	},
}))

const BaseLayout: React.FC<BaseLayoutProps> = ({ children }) => {
	const { classes } = useBaseLayoutStyles()
	return (
		<React.Fragment>
			<Meta />
			<NextNProgress color="#dd0913" />
			<ScrollToTop />
			<Box className={classes.layout__Wrapper}>
				<Navigation />
				{children}
				<Footer />
			</Box>
		</React.Fragment>
	)
}
export default BaseLayout
