import { LayoutWithoutNotifications } from '@/layouts';
import { ReceiptsScreen } from '@/modules/receipts';

import { NextPageWithLayout } from '../_app';

const Page: NextPageWithLayout = () => <ReceiptsScreen />;

Page.getLayout = function getLayout(page) {
  return (
    <LayoutWithoutNotifications title="Comprovantes - Top Multiplicadores">
      {page}
    </LayoutWithoutNotifications>
  );
};

export default Page;
