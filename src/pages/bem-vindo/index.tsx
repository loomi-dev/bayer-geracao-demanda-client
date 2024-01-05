import { GetServerSideProps } from 'next';
import Head from 'next/head';
import { getServerSession } from 'next-auth';

import { authOptions } from '@/lib/next-auth';
import { OnboardingScreen } from '@/modules';

import { NextPageWithLayout } from '../_app';

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  const session = await getServerSession(req, res, authOptions);

  return {
    props: {
      session,
    },
  };
};

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
