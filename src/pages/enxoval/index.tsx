import { Header, PackageIcon } from '@/components';
import { LayoutWithNotifications } from '@/layouts';
import { TrousseauScreen } from '@/modules';

import { NextPageWithLayout } from '../_app';

const Page: NextPageWithLayout = () => (
  <>
    <TrousseauScreen />
  </>
);

Page.getLayout = function getLayout(page) {
  return (
    <LayoutWithNotifications title="Enxoval - Top Multiplicadores">
      <Header icon={<PackageIcon />} label="Enxoval" />
      {page}
    </LayoutWithNotifications>
  );
};

export default Page;
