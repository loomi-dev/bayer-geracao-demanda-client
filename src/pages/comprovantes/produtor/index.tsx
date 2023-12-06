import { LayoutWithoutNotifications } from '@/layouts';
import { ProducerProofsScreen } from '@/modules/receipts';
import { NextPageWithLayout } from '@/pages/_app';

const Page: NextPageWithLayout = () => <ProducerProofsScreen />;

Page.getLayout = function getLayout(page) {
  return (
    <LayoutWithoutNotifications title="Comprovantes - Top Multiplicadores">
      {page}
    </LayoutWithoutNotifications>
  );
};

export default Page;
