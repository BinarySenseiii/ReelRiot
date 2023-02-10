import { AppProps } from 'next/app';
import Head from 'next/head';
import { ReactElement, ReactNode } from 'react';
import { NextPage } from 'next/types';
import { MasterLayout } from '@/layout';
import { QueryWrapper } from '@/lib';
import MantineThemeProvider from '@/theme/ThemeProvider';

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function App(props: AppPropsWithLayout) {
  const { Component, pageProps } = props;

  const getLayout = Component.getLayout ?? ((page) => <MasterLayout>{page}</MasterLayout>);

  return (
    <>
      <Head>
        <title>The Official Home Of Reel Riot Movies - Torrent Downloads </title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>

      <QueryWrapper dehydratedState={pageProps.dehydratedState}>
        <MantineThemeProvider colorScheme="dark">
          {getLayout(<Component {...pageProps} />)}
        </MantineThemeProvider>
      </QueryWrapper>
    </>
  );
}
