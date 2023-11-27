import { RegisterScreen } from '@/modules/auth';

import { NextPageWithLayout } from '../_app';

const Page: NextPageWithLayout = () => <RegisterScreen />;

Page.getLayout = function getLayout(page) {
  return <>{page}</>;
};

export default Page;
