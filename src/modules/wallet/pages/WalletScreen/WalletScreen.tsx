import { Flex } from '@chakra-ui/react';

import { Balance } from './components';

export const WalletScreen = () => (
  <Flex
    justify="space-between"
    align="flex-end"
    w="100%"
    h="16.4rem"
    layerStyle="card"
    px="2.4rem"
    pt="2.4rem"
    pb="1.8rem"
  >
    <Balance />
  </Flex>
);
