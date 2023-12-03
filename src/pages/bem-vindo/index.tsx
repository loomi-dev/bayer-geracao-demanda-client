import Head from 'next/head';

import { OnboardingScreen } from '@/modules/auth';

import { NextPageWithLayout } from '../_app';

const Page: NextPageWithLayout = () => <OnboardingScreen />;

Page.getLayout = function getLayout(page) {
  return (
    <>
      <Head>
        <title>Boas vindas ao Programa da Bayer - Top Multiplicadores</title>
      </Head>
      {page}
    </>
  );
};

export default Page;
