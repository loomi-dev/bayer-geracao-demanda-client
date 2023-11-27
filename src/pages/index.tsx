import type { NextPage } from 'next';

import { LayoutWithoutNotifications } from '@/layouts';
import { Landing } from '@/modules/misc/pages/Landing';

const Home: NextPage = () => (
  <LayoutWithoutNotifications>
    <Landing />
  </LayoutWithoutNotifications>
);
export default Home;
