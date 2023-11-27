import { EvidenceScreen } from '@/modules/evidence';

import { NextPageWithLayout } from '../_app';

const Page: NextPageWithLayout = () => <EvidenceScreen />;

Page.getLayout = function getLayout(page) {
  return <>{page}</>;
};

export default Page;
