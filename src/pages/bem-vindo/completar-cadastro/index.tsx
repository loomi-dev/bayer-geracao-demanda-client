import Head from 'next/head';

import { RegisterScreen } from '@/modules/auth';
import { NextPageWithLayout } from '@/pages/_app';

const Page: NextPageWithLayout = () => <RegisterScreen />;

Page.getLayout = function getLayout(page) {
  return (
    <>
      <Head>
        <title>Complete seu Cadastro na plataforma - Top Multiplicadores</title>
      </Head>
      {page}
    </>
  );
};

export default Page;
