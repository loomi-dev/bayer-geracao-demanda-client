import { LayoutWithNotifications } from '@/layouts';
import { SimulatorScreen } from '@/modules/simulator';

import { NextPageWithLayout } from '../_app';

const Page: NextPageWithLayout = () => <SimulatorScreen />;

Page.getLayout = function getLayout(page) {
  return (
    <LayoutWithNotifications title="Simulador - Top Multiplicadores">
      {page}
    </LayoutWithNotifications>
  );
};

export default Page;
