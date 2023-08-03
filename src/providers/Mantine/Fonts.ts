import { MantineThemeOverride } from '@mantine/core'
import { Open_Sans, Lato } from 'next/font/google'

const lato = Lato({
	subsets: ['latin'],
	weight: ['700', '400', '300', '900'],
})
const openSans = Open_Sans({ subsets: ['latin'], weight: ['400', '500'] })

const overRideFonts: MantineThemeOverride = {
	fontFamily: openSans.style.fontFamily,
	headings: {
		fontFamily: lato.style.fontFamily,
		fontWeight: 700,
	},
}

export default overRideFonts
