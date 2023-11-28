import { Header, BigCard } from '@/components';
import { LayoutWithNotifications } from '@/layouts';
import { WalletScreen } from '@/modules';

import { NextPageWithLayout } from '../_app';

const Page: NextPageWithLayout = () => <WalletScreen />;

Page.getLayout = function getLayout(page) {
  return (
    <LayoutWithNotifications>
      <Header label="Carteira">
        <BigCard />
      </Header>
      {page}
    </LayoutWithNotifications>
  );
};

export default Page;
