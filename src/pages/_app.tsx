import { ChakraProvider, ToastProviderProps } from '@chakra-ui/react';
import { Hydrate, QueryClientProvider } from '@tanstack/react-query';
import dayjs from 'dayjs';
import ptBR from 'dayjs/locale/pt-br';
import updateLocale from 'dayjs/plugin/updateLocale';
import { AnimatePresence } from 'framer-motion';
import { NextPage } from 'next';
import type { AppProps } from 'next/app';
import localFont from 'next/font/local';
import Head from 'next/head';
import Router, { useRouter } from 'next/router';
import { SessionProvider } from 'next-auth/react';
import NProgress from 'nprogress';
import { useState, ReactNode, ReactElement } from 'react';

import { CustomToast } from '@/components';
import { queryClient as defaultQueryClient } from '@/lib/react-query';
import { theme } from '@/styles';

Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

dayjs.locale(ptBR);
dayjs.extend(updateLocale);
dayjs.updateLocale('pt-br', {
  months: [
    'Janeiro',
    'Fevereiro',
    'Março',
    'Abril',
    'Maio',
    'Junho',
    'Julho',
    'Agosto',
    'Setembro',
    'Outubro',
    'Novembro',
    'Dezembro',
  ],
  monthsShort: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
});

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
  const { pathname } = useRouter();
  const getLayout = Component.getLayout ?? ((page) => page);

  const toastOptions: ToastProviderProps = {
    defaultOptions: {
      position: 'bottom-right',
      render: ({ description, status, onClose }) => (
        <CustomToast description={description} onClose={onClose} status={status} />
      ),
    },
  };

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

      <ChakraProvider theme={theme} toastOptions={toastOptions}>
        <QueryClientProvider client={queryClient}>
          <SessionProvider session={pageProps.session}>
            <Hydrate state={pageProps.dehydratedState}>
              {getLayout(
                <AnimatePresence mode="wait">
                  <Component {...pageProps} key={pathname} />
                </AnimatePresence>,
              )}
            </Hydrate>
          </SessionProvider>
        </QueryClientProvider>
      </ChakraProvider>
    </>
  );
}

export default MyApp;
