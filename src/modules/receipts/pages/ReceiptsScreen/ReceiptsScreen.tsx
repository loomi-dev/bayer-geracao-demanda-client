import { Box, Flex, VStack } from '@chakra-ui/react';
import React from 'react';

import { DocumentIcon, Header } from '@/components';

import { DrawerExpenseReceipt, FinalizedTables, RunningTable, TableFilter } from './components';

export const ReceiptsScreen = () => (
  <Flex boxSize="100%">
    <DrawerExpenseReceipt />
    <Box pl="6.4rem" pr="9.343rem" pt="3.8rem" pb="3.3rem" flex={1}>
      <Header icon={<DocumentIcon />} label="Comprovantes" />
      <TableFilter />
      <VStack flex={1} mt="3.2rem" spacing="3.2rem" alignItems="flex-start">
        <RunningTable />
        <FinalizedTables />
      </VStack>
    </Box>
  </Flex>
);
