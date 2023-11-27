import { LayoutWithNotifications } from '@/layouts';
import { Landing } from '@/modules/misc/pages/Landing';

import { NextPageWithLayout } from './_app';

const Page: NextPageWithLayout = () => <Landing />;

Page.getLayout = function getLayout(page) {
  return <LayoutWithNotifications>{page}</LayoutWithNotifications>;
};
export default Page;
