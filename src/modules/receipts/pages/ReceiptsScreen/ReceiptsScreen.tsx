import { Box, Flex } from '@chakra-ui/react';
import React from 'react';

import { DocumentIcon, Header, Sidebar } from '@/components';

import { TableFilter } from './components';
import { DrawerExpenseReceipt } from './components/DrawerExpenseReceipt';

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
    </Box>
  </Flex>
);
