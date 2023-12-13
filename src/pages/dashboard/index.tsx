import { Header, PackageIcon } from '@/components';
import { LayoutWithoutNotifications } from '@/layouts';
import { DashboardScreen } from '@/modules';

import { NextPageWithLayout } from '../_app';

const Page: NextPageWithLayout = () => <DashboardScreen />;

Page.getLayout = function getLayout(page) {
  return (
    <LayoutWithoutNotifications title="Dashboard - Top Multiplicadores">
      <Header label="Dashboard" icon={<PackageIcon />} />
      {page}
    </LayoutWithoutNotifications>
  );
};

export default Page;
