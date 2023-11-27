import { SimulatorScreen } from '@/modules/simulator';

import { NextPageWithLayout } from '../_app';

const Page: NextPageWithLayout = () => <SimulatorScreen />;

Page.getLayout = function getLayout(page) {
  return <>{page}</>;
};

export default Page;
