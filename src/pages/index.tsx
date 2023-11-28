import { Box, Radio } from '@chakra-ui/react';

import { LayoutWithoutNotifications } from '@/layouts';

import { NextPageWithLayout } from './_app';

const Page: NextPageWithLayout = () => (
  <Box ml="1rem" mt="1rem">
    <Radio>
      Declaro que li e concordo com os termos da Política de privacidade e entendo como coletam e
      utilizam os dados pessoais dos usuários do App
    </Radio>
  </Box>
);

Page.getLayout = function getLayout(page) {
  return <LayoutWithoutNotifications>{page}</LayoutWithoutNotifications>;
};
export default Page;
