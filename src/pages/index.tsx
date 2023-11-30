import { LayoutWithNotifications } from '@/layouts';

import { NextPageWithLayout } from './_app';

const Page: NextPageWithLayout = () => <></>;

Page.getLayout = function getLayout(page) {
  return <LayoutWithNotifications>{page}</LayoutWithNotifications>;
};

export default Page;
