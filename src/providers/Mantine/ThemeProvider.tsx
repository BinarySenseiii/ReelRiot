import { MantineProvider } from '@mantine/core'
import React, { ReactNode } from 'react'
import { Toaster } from 'react-hot-toast'
import customColors from './Colors'
import overRideFonts from './Fonts'

type ThemeProviderProps = {
	children: ReactNode
}

const MantineThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
	return (
		<MantineProvider
			theme={{
				colorScheme: 'dark',
				components: {
					Text: {
						defaultProps: () => ({
							size: 'md',
							color: 'white',
						}),
					},
				},
				colors: {
					...customColors,
				},
				primaryColor: 'brand',
				primaryShade: 5,
				...overRideFonts,
			}}
			withGlobalStyles
			withNormalizeCSS
		>
			<Toaster />
			{children}
		</MantineProvider>
	)
}
export default MantineThemeProvider
