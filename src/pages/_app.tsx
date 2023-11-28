import { ChakraProvider } from '@chakra-ui/react';
import { Hydrate, QueryClientProvider } from '@tanstack/react-query';
import { NextPage } from 'next';
import type { AppProps } from 'next/app';
import localFont from 'next/font/local';
import Head from 'next/head';
import { useState, ReactNode, ReactElement } from 'react';

import { queryClient as defaultQueryClient } from '@/lib/react-query';
import { theme } from '@/styles';

export type NextPageWithLayout<P = Record<string, unknown>, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const arial = localFont({
  src: [
    { path: '../../public/fonts/Arial-Bold.ttf', weight: '600' },
    { path: '../../public/fonts/Arial-Regular.ttf', weight: '400' },
  ],
  preload: true,
  variable: '--font-arial',
  fallback: [
    '-apple-system',
    'BlinkMacSystemFont',
    'Segoe UI',
    'Helvetica',
    'sans-serif',
    'Apple Color Emoji',
    'Segoe UI Emoji',
    'Segoe UI Symbol',
  ],
});

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const [queryClient] = useState(defaultQueryClient);

  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <>
      {/* eslint-disable react/no-unknown-property */}
      <style jsx global>
        {`
          :root {
            --font-arial: ${arial.style.fontFamily};
          }
        `}
      </style>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
      </Head>

      <ChakraProvider theme={theme}>
        <QueryClientProvider client={queryClient}>
          <Hydrate state={pageProps.dehydratedState}>
            {getLayout(<Component {...pageProps} />)}
          </Hydrate>
        </QueryClientProvider>
      </ChakraProvider>
    </>
  );
}

export default MyApp;
