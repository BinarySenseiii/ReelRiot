import {
  ColorScheme,
  ColorSchemeProvider,
  MantineProvider,
} from '@mantine/core';
import { Notifications } from '@mantine/notifications';
import React, { Dispatch, ReactNode, SetStateAction } from 'react';
import { setCookie } from 'cookies-next';
import customColors from './Colors';
import overRideFonts from './Fonts';

type ThemeProviderProps = {
  children: ReactNode;
  colorScheme: 'light' | 'dark';
  setColorScheme: Dispatch<SetStateAction<ColorScheme>>;
};

const MantineThemeProvider: React.FC<ThemeProviderProps> = ({
  children,
  setColorScheme,
  colorScheme,
}) => {
  const toggleColorScheme = (value?: ColorScheme) => {
    const nextColorScheme =
      value || (colorScheme === 'dark' ? 'light' : 'dark');
    setColorScheme(nextColorScheme);
    setCookie('mantine-color-scheme', nextColorScheme, {
      maxAge: 60 * 60 * 24 * 30,
    });
  };
  return (
    <ColorSchemeProvider
      colorScheme={colorScheme}
      toggleColorScheme={toggleColorScheme}
    >
      <MantineProvider
        theme={{
          colorScheme,
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
        <Notifications />
        {children}
      </MantineProvider>
    </ColorSchemeProvider>
  );
};
export default MantineThemeProvider;
