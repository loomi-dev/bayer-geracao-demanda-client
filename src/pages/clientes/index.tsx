import { CustomersScreen } from '@/modules/customers';

import { NextPageWithLayout } from '../_app';

const Page: NextPageWithLayout = () => <CustomersScreen />;

Page.getLayout = function getLayout(page) {
  return <>{page}</>;
};

export default Page;
