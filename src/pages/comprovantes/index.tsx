import { useSession } from 'next-auth/react';

import { LayoutWithoutNotifications } from '@/layouts';
import { ReceiptsScreenManager, ReceiptsScreenFarmer } from '@/modules';

import { NextPageWithLayout } from '../_app';
import { GetServerSideProps } from 'next';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/next-auth';
import { BigDocumentIcon, Header, ImageIcon } from '@/components';
import { Fragment } from 'react';

const Page: NextPageWithLayout = (props) => {
  const isManager = props?.role === 'Manager';

  if (isManager) {
    return (
      <Fragment>
        <Header label="Comprovantes" icon={<BigDocumentIcon color="white" />} />
        <ReceiptsScreenManager />;
      </Fragment>
    );
  }

  return (
    <Fragment>
      <Header label="Comprovações" icon={<ImageIcon color="white" width="30" height="30" />} />
      <ReceiptsScreenFarmer />
    </Fragment>
  );
};

Page.getLayout = function getLayout(page) {
  return (
    <LayoutWithoutNotifications title="Comprovantes - Top Multiplicadores">
      {page}
    </LayoutWithoutNotifications>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  const session = await getServerSession(req, res, authOptions);
  return {
    props: {
      role: session?.user.role,
    },
  };
};

export default Page;
