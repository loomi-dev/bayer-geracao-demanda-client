import { Box, VStack } from '@chakra-ui/react';
import React from 'react';

import {
  CurrentHarvestSection,
  HowToProveSection,
  ReceiptsSummarySection,
  ReceiptsActionsTable,
} from './components';

export const ReceiptsScreenFarmer = () => (
  <Box w="full">
    <VStack align="flex-start" w="full" spacing="2rem" mb="2rem">
      <CurrentHarvestSection />
      <ReceiptsSummarySection />
      <ReceiptsActionsTable />
    </VStack>

    <HowToProveSection />
  </Box>
);
