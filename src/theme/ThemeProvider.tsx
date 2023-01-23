import { MantineProvider } from '@mantine/core';
import React, { ReactNode } from 'react';
import { Open_Sans, Roboto_Condensed } from '@next/font/google';
import { customColors } from './Colors';

type ThemeProviderProps = {
  children: ReactNode;
  colorScheme: 'light' | 'dark';
};

const roboto = Roboto_Condensed({
  subsets: ['latin'],
  weight: ['700', '400', '300'],
});

const openSans = Open_Sans({
  subsets: ['latin'],
});

const MantineThemeProvider: React.FC<ThemeProviderProps> = ({ children, colorScheme }) => (
  <MantineProvider
    theme={{
      colorScheme,
      colors: {
        ...customColors,
      },
      fontFamily: openSans.style.fontFamily,
      headings: { fontFamily: roboto.style.fontFamily, fontWeight: 700 },
      primaryColor: 'brand',
      primaryShade: 5,
    }}
    withGlobalStyles
    withNormalizeCSS
  >
    {children}
  </MantineProvider>
);
export default MantineThemeProvider;
