import { Checkbox } from '@chakra-ui/react';

import { LayoutWithoutNotifications } from '@/layouts';

import { NextPageWithLayout } from './_app';

const Page: NextPageWithLayout = () => (
  <>
    <Checkbox>Aceitar termos</Checkbox>
  </>
);

Page.getLayout = function getLayout(page) {
  return <LayoutWithoutNotifications>{page}</LayoutWithoutNotifications>;
};
export default Page;
