import { Flex, HStack, Text } from '@chakra-ui/react';

import { UserProfile } from '@/components';
import { CircleIcon } from '@/components/CircleIcon';
import { BigCard } from '@/components/icons';
import { LayoutWithNotifications } from '@/layouts';
import { WalletScreen } from '@/modules/wallet';

import { NextPageWithLayout } from '../_app';

const Page: NextPageWithLayout = () => <WalletScreen />;

Page.getLayout = function getLayout(page) {
  return (
    <LayoutWithNotifications>
      <Flex justify="space-between" width="100%">
        <HStack gap="1.6rem">
          <CircleIcon>
            <BigCard color="white" />
          </CircleIcon>
          <Text textStyle="h3">Carteira </Text>
        </HStack>
        <UserProfile />
      </Flex>
      {page}
    </LayoutWithNotifications>
  );
};

export default Page;
