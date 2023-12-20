import { GetServerSideProps } from 'next';
import Head from 'next/head';
import { getToken } from 'next-auth/jwt';

import { DEFAULT_PRIVATE_FARMER_PAGE, DEFAULT_PRIVATE_MANAGER_PAGE } from '@/config';
import { LoginScreen } from '@/modules';

import { NextPageWithLayout } from '../_app';

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const token = await getToken(ctx);
  const privatePage =
    token?.user?.role === 'Manager' ? DEFAULT_PRIVATE_MANAGER_PAGE : DEFAULT_PRIVATE_FARMER_PAGE;
  const isAuthenticated = !!token?.user?.accessToken;

  if (isAuthenticated) {
    return {
      redirect: {
        destination: privatePage,
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
};

const Page: NextPageWithLayout = () => <LoginScreen />;

Page.getLayout = function getLayout(page) {
  return (
    <>
      <Head>
        <title>Entrar na plataforma - Top Multiplicadores</title>
      </Head>
      {page}
    </>
  );
};

export default Page;
