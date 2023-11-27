import { WalletScreen } from '@/modules/wallet';

import { NextPageWithLayout } from '../_app';

const Page: NextPageWithLayout = () => <WalletScreen />;

Page.getLayout = function getLayout(page) {
  return <>{page}</>;
};

export default Page;
