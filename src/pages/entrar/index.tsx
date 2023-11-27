import { LoginScreen } from '@/modules/auth';

import { NextPageWithLayout } from '../_app';

const Page: NextPageWithLayout = () => <LoginScreen />;

Page.getLayout = function getLayout(page) {
  return <>{page}</>;
};

export default Page;
