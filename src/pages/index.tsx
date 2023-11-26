import type { NextPage } from 'next';

import { Layout } from '@/layout';
import { Landing } from '@/modules/misc/pages/Landing';

const Home: NextPage = () => (
  <Layout>
    <Landing />
  </Layout>
);
export default Home;
