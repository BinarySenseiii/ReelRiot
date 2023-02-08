import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { AppProps } from 'next/app';
import Head from 'next/head';
import MantineThemeProvider from '@/theme/ThemeProvider';
import { MasterLayout } from '@/layout';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: false,
    },
  },
});

export default function App(props: AppProps) {
  const { Component, pageProps } = props;

  return (
    <>
      <Head>
        <title>The Official Home Of Reel Riot Movies - Torrent Downloads </title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>

      <MantineThemeProvider colorScheme="dark">
        <QueryClientProvider client={queryClient}>
          <MasterLayout>
            <Component {...pageProps} />
          </MasterLayout>
          <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
      </MantineThemeProvider>
    </>
  );
}
