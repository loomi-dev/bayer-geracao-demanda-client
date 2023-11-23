import { QueryClient, dehydrate } from '@tanstack/react-query';
import type { GetServerSideProps, NextPage } from 'next';

import { getRandomUsers } from '@/api/endpoints/example';
import { Landing } from '@/modules/misc/pages/Landing';

const Home: NextPage = () => (
  // exemplo de como fazer com o prefetch. o QueryClient.getQueryCache só mostra que está cacheado a request
  // const { data } = useGetRandomUsers();

  // console.log('aa', data, queryClient.getQueryCache());

  <Landing />
);
export default Home;

export const getServerSideProps: GetServerSideProps = async () => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(['random-user'], getRandomUsers);

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};
