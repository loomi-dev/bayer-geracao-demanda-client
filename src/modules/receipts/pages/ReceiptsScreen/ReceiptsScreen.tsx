import { Box, Flex, VStack } from '@chakra-ui/react';
import React from 'react';

import { DrawerExpenseReceipt, FinalizedTables, RunningTable, TableFilter } from './components';

export const ReceiptsScreen = () => (
  <Flex boxSize="100%">
    <DrawerExpenseReceipt />
    <Box flex={1}>
      <TableFilter />
      <VStack flex={1} mt="3.2rem" spacing="3.2rem" alignItems="flex-start">
        <RunningTable />
        <FinalizedTables />
      </VStack>
    </Box>
  </Flex>
);
