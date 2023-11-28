import { Header, BigCardIcon } from '@/components';
import { LayoutWithNotifications } from '@/layouts';
import { WalletScreen } from '@/modules';

import { NextPageWithLayout } from '../_app';

const Page: NextPageWithLayout = () => <WalletScreen />;

Page.getLayout = function getLayout(page) {
  return (
    <LayoutWithNotifications>
      <Header label="Carteira" icon={<BigCardIcon />} />
      {page}
    </LayoutWithNotifications>
  );
};

export default Page;
