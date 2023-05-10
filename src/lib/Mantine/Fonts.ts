import { MantineThemeOverride } from '@mantine/core';
import { Open_Sans, Roboto_Condensed } from 'next/font/google';

const roboto = Roboto_Condensed({
  subsets: ['latin'],
  weight: ['700', '400', '300'],
});
const openSans = Open_Sans({ subsets: ['latin'], weight: ['400', '500'] });

const overRideFonts: MantineThemeOverride = {
  fontFamily: openSans.style.fontFamily,
  headings: {
    fontFamily: roboto.style.fontFamily,
    fontWeight: 700,
  },
};

export default overRideFonts;
