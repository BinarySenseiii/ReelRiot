import { MantineThemeOverride } from '@mantine/core'
import { Poppins, Roboto } from 'next/font/google'

const roboto = Roboto({
	subsets: ['latin'],
	weight: ['700', '900'],
})
const poppins = Poppins({ subsets: ['latin'], weight: ['400', '500'] })

const overRideFonts: MantineThemeOverride = {
	fontFamily: poppins.style.fontFamily,
	headings: {
		fontFamily: roboto.style.fontFamily,
		fontWeight: 700,
	},
}

export default overRideFonts
