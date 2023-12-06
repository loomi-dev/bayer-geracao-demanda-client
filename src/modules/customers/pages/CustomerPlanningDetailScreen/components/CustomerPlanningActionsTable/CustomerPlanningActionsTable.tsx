import { Flex, Text } from '@chakra-ui/react';

import { ActionCards } from './components';

export const CustomerPlanningActionsTable = () => (
  <Flex flexDir="column" w="100%" gap="2.5rem" h="100%">
    <Text textStyle="h3" fontWeight="bold">
      Ações
    </Text>
    <ActionCards />
  </Flex>
);
