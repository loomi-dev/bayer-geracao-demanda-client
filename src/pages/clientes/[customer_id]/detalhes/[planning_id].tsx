import { LayoutWithNotifications } from '@/layouts';
import { CustomerPlanningDetailScreen } from '@/modules';
import { NextPageWithLayout } from '@/pages/_app';

const Page: NextPageWithLayout = () => <CustomerPlanningDetailScreen />;

Page.getLayout = function getLayout(page) {
  return (
    <LayoutWithNotifications title="Clientes - Top Multiplicadores">{page}</LayoutWithNotifications>
  );
};

export default Page;
