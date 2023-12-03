import { Header, UserGroupBigIcon } from '@/components';
import { LayoutWithoutNotifications } from '@/layouts';
import { CustomersScreen } from '@/modules/customers';

import { NextPageWithLayout } from '../_app';

const Page: NextPageWithLayout = () => <CustomersScreen />;

Page.getLayout = function getLayout(page) {
  return (
    <LayoutWithoutNotifications title="Clientes - Top Multiplicadores">
      <Header label="Clientes" icon={<UserGroupBigIcon />} />
      {page}
    </LayoutWithoutNotifications>
  );
};

export default Page;
