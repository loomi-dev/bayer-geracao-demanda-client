import { LayoutWithoutNotifications } from '@/layouts';

import { NextPageWithLayout } from './_app';

const Page: NextPageWithLayout = () => <></>;

Page.getLayout = function getLayout(page) {
  return <LayoutWithoutNotifications>{page}</LayoutWithoutNotifications>;
};
export default Page;
