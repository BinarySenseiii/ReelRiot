import '@/styles/globals.css'
import { NextPage } from 'next'
import { AppProps } from 'next/app'

import { ReactElement, ReactNode } from 'react'

import { BaseLayout } from '@/layout'
import MantineThemeProvider from '@/providers/Mantine/ThemeProvider'
import QueryWrapper from '@/providers/ReactQuery/QueryWrapper'

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
	getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
	Component: NextPageWithLayout
}

export default function App(props: AppPropsWithLayout) {
	const { Component, pageProps } = props

	const getLayout =
		Component.getLayout ?? (page => <BaseLayout>{page}</BaseLayout>)

	return (
		<QueryWrapper dehydratedState={pageProps.dehydratedState}>
			<MantineThemeProvider>
				{getLayout(<Component {...pageProps} />)}
			</MantineThemeProvider>
		</QueryWrapper>
	)
}
