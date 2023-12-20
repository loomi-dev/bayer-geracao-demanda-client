import { useSession } from 'next-auth/react';

import { LayoutWithoutNotifications } from '@/layouts';
import { ProducerProofsScreen, ReceiptsScreen } from '@/modules';

import { NextPageWithLayout } from '../_app';

const Page: NextPageWithLayout = () => {
  const user = useSession();

  const role = user.data?.user.role;

  if (role === 'Manager') {
    return <ReceiptsScreen />;
  }

  return <ProducerProofsScreen />;
};

Page.getLayout = function getLayout(page) {
  return (
    <LayoutWithoutNotifications title="Comprovantes - Top Multiplicadores">
      {page}
    </LayoutWithoutNotifications>
  );
};

export default Page;
