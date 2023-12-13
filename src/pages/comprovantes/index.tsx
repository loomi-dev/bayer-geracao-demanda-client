import { DocumentIcon, Header } from '@/components';
import { LayoutWithoutNotifications } from '@/layouts';
import { ReceiptsScreen } from '@/modules';

import { NextPageWithLayout } from '../_app';

const Page: NextPageWithLayout = () => <ReceiptsScreen />;

Page.getLayout = function getLayout(page) {
  return (
    <LayoutWithoutNotifications title="Comprovantes - Top Multiplicadores">
      <Header icon={<DocumentIcon />} label="Comprovantes" />
      {page}
    </LayoutWithoutNotifications>
  );
};

export default Page;
