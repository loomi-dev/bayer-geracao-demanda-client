import { OnboardingScreen } from '@/modules/auth';

import { NextPageWithLayout } from '../_app';

const Page: NextPageWithLayout = () => <OnboardingScreen />;

Page.getLayout = function getLayout(page) {
  return <>{page}</>;
};

export default Page;
