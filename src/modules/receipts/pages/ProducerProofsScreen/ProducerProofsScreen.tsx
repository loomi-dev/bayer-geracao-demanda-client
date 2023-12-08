import { Box, Flex, HStack } from '@chakra-ui/react';
import React from 'react';

import { Header, ImageIcon } from '@/components';

import {
  DrawerExpenseReceipt,
  FilterButton,
  HowMuchDidYouEarn,
  HowToProve,
  StockTable,
  TitleWithSubtitle,
  YourCurrentLevel,
} from './components';

export const ProducerProofsScreen = () => (
  <Box boxSize="100%">
    <Header label="Comprovações" icon={<ImageIcon color="white" width="30" height="30" />} />
    <TitleWithSubtitle />
    <Flex w="100%" justifyContent="space-between">
      <HStack spacing="1rem">
        <YourCurrentLevel />
        <HowMuchDidYouEarn earnedValue={320000} needToWin={450000} progress={56} />
      </HStack>

      <FilterButton />
    </Flex>

    <StockTable />

    <HowToProve />
    <DrawerExpenseReceipt />
  </Box>
);
