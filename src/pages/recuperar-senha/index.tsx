import { GetServerSideProps } from 'next';
import { getServerSession } from 'next-auth';

import { DEFAULT_PRIVATE_FARMER_PAGE, DEFAULT_PRIVATE_MANAGER_PAGE } from '@/config';
import { LayoutAuth } from '@/layouts';
import { authOptions } from '@/lib/next-auth';
import { ForgotPasswordScreen } from '@/modules';

import { NextPageWithLayout } from '../_app';

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  const session = await getServerSession(req, res, authOptions);
  const isManager = session?.user?.role === 'Manager';
  const isAuthenticated = !!session?.user?.accessToken;
  const privatePage = isManager ? DEFAULT_PRIVATE_MANAGER_PAGE : DEFAULT_PRIVATE_FARMER_PAGE;

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

const Page: NextPageWithLayout = () => <ForgotPasswordScreen />;

Page.getLayout = function getLayout(page) {
  return <LayoutAuth>{page}</LayoutAuth>;
};

export default Page;
