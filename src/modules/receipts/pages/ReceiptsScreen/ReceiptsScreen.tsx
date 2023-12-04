import { Box, Flex, VStack } from '@chakra-ui/react';
import React from 'react';

import { DocumentIcon, Header, Sidebar } from '@/components';

import { DrawerExpenseReceipt, RunningTable, TableFilter } from './components';
import { FinalizedTables } from './components/FinalizedTables';

export const ReceiptsScreen = () => (
  <Flex boxSize="100%">
    <DrawerExpenseReceipt />
    <Sidebar
      containerProps={{
        position: 'initial',
      }}
    />
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
