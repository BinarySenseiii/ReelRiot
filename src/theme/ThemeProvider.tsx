import { MantineProvider } from '@mantine/core';
import React, { ReactNode } from 'react';
import { customColors } from './Colors';

type ThemeProviderProps = {
  children: ReactNode;
  colorScheme: 'light' | 'dark';
};

const MantineThemeProvider: React.FC<ThemeProviderProps> = ({ children, colorScheme }) => (
  <MantineProvider
    theme={{
      colorScheme,
      colors: {
        ...customColors,
      },
      fontFamily: 'Open Sans',
      headings: { fontFamily: 'Roboto Condensed', fontWeight: 800 },
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
