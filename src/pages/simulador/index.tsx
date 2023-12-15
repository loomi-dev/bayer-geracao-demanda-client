import { ComputerBigIcon, Header } from '@/components';
import { LayoutWithNotifications } from '@/layouts';
import { SimulatorScreen } from '@/modules';

import { NextPageWithLayout } from '../_app';

const Page: NextPageWithLayout = () => <SimulatorScreen />;

Page.getLayout = function getLayout(page) {
  return (
    <LayoutWithNotifications title="Simulador - Top Multiplicadores" gap="1.2rem">
      <Header label="Simulador" icon={<ComputerBigIcon />} mb="5rem" />
      {page}
    </LayoutWithNotifications>
  );
};

export default Page;
