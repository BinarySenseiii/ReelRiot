import '@/styles/globals.css';
import { ColorScheme } from '@mantine/core';
import { getCookie } from 'cookies-next';
import { NextPage } from 'next';
import NextApp, { AppContext, AppProps } from 'next/app';

import { ReactElement, ReactNode, useState } from 'react';

import { BaseLayout } from '@/layout';
import MantineThemeProvider from '@/providers/Mantine/ThemeProvider';
import QueryWrapper from '@/providers/ReactQuery/QueryWrapper';

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function App(
  props: AppPropsWithLayout & { colorScheme: ColorScheme },
) {
  const { Component, pageProps } = props;
  const [colorScheme, setColorScheme] = useState<ColorScheme>(
    props.colorScheme,
  );

  const getLayout =
    Component.getLayout ?? ((page) => <BaseLayout>{page}</BaseLayout>);

  return (
    <QueryWrapper dehydratedState={pageProps.dehydratedState}>
      <MantineThemeProvider
        colorScheme={colorScheme}
        setColorScheme={setColorScheme}
      >
        {getLayout(<Component {...pageProps} />)}
      </MantineThemeProvider>
    </QueryWrapper>
  );
}

App.getInitialProps = async (appContext: AppContext) => {
  const appProps = await NextApp.getInitialProps(appContext);
  return {
    ...appProps,
    colorScheme: getCookie('mantine-color-scheme', appContext.ctx) || 'dark',
  };
};
