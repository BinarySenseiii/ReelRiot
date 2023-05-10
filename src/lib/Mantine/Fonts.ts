import { MantineThemeOverride } from '@mantine/core';
import { Open_Sans, Roboto_Condensed, Space_Mono } from 'next/font/google';

const spaceMono = Space_Mono({ subsets: ['latin'], display: 'block', weight: ['400'] });
const roboto = Roboto_Condensed({ subsets: ['latin'], weight: ['700', '400', '300'] });
const openSans = Open_Sans({ subsets: ['latin'] });

const overRideFonts: MantineThemeOverride = {
  fontFamily: openSans.style.fontFamily,
  fontFamilyMonospace: spaceMono.style.fontFamily,
  headings: {
    fontFamily: roboto.style.fontFamily,
    fontWeight: 700,
    sizes: {},
  },
};

export default overRideFonts;
