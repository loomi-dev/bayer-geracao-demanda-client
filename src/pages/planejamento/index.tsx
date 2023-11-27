import { PlanningScreen } from '@/modules/planning';

import { NextPageWithLayout } from '../_app';

const Page: NextPageWithLayout = () => <PlanningScreen />;

Page.getLayout = function getLayout(page) {
  return <>{page}</>;
};

export default Page;
