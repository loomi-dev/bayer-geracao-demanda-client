import { ReceiptsScreen } from '@/modules/receipts';

import { NextPageWithLayout } from '../_app';

const Page: NextPageWithLayout = () => <ReceiptsScreen />;

Page.getLayout = function getLayout(page) {
  return <>{page}</>;
};

export default Page;
