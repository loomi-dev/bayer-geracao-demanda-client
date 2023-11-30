import { GetServerSideProps } from 'next';
import { getToken } from 'next-auth/jwt';

import { DEFAULT_PRIVATE_PAGE } from '@/config';
import { LoginScreen } from '@/modules/auth';

import { NextPageWithLayout } from '../_app';

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const token = await getToken(ctx);

  const isAuthenticated = !!token?.user.accessToken;

  if (isAuthenticated) {
    return {
      redirect: {
        destination: DEFAULT_PRIVATE_PAGE,
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
  return <>{page}</>;
};

export default Page;
