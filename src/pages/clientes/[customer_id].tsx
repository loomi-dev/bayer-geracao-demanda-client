import { LayoutWithoutNotifications } from '@/layouts';
import { CustomerDetailScreen } from '@/modules/customers';

import { NextPageWithLayout } from '../_app';

const Page: NextPageWithLayout = () => <CustomerDetailScreen />;

Page.getLayout = function getLayout(page) {
  return (
    <LayoutWithoutNotifications title="Clientes - Top Multiplicadores">
      {page}
    </LayoutWithoutNotifications>
  );
};

export default Page;
