import { Box, Flex, HStack } from '@chakra-ui/react';
import React, { useEffect } from 'react';

import { HarvestFilter, Header, ImageIcon } from '@/components';

import { useCropsStore } from '../../store';

import {
  DrawerExpenseReceipt,
  HowMuchDidYouEarn,
  HowToProve,
  StockTable,
  TitleWithSubtitle,
} from './components';

export const ProducerProofsScreen = () => {
  const getCrops = useCropsStore((state) => state.getCrops);

  useEffect(() => {
    getCrops();
  }, [getCrops]);

  return (
    <Box boxSize="100%">
      <Header label="Comprovações" icon={<ImageIcon color="white" width="30" height="30" />} />
      <TitleWithSubtitle />
      <Flex w="100%" justifyContent="space-between">
        <HStack spacing="1rem">
          <HowMuchDidYouEarn />
          <HarvestFilter />
        </HStack>
      </Flex>

      <StockTable />

      <HowToProve />
      <DrawerExpenseReceipt />
    </Box>
  );
};
