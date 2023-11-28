import { Button, useToast } from '@chakra-ui/react';

import { LayoutWithoutNotifications } from '@/layouts';

import { NextPageWithLayout } from './_app';

const Page: NextPageWithLayout = () => {
  const toast = useToast();

  return (
    <Button
      onClick={() => {
        toast({ description: 'teste descricao' });
      }}
    >
      mostrar toast
    </Button>
  );
};

Page.getLayout = function getLayout(page) {
  return <LayoutWithoutNotifications>{page}</LayoutWithoutNotifications>;
};
export default Page;
