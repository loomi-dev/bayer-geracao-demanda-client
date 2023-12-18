import { Box, Text } from '@chakra-ui/react';

import { DynamicTable } from '@/components';
import { GetActionsResponse } from '@/modules/api';

import { columns } from './FinalizedTables.columns';

type FinalizedTablesProps = {
  actions: GetActionsResponse['data'];
  isLoading: boolean;
};

export const FinalizedTables = ({ actions, isLoading }: FinalizedTablesProps) => (
  <Box w="100%" mt="3.2rem">
    <Text mb="1rem" ml="1.6rem" textStyle="body4" color="greyscale.900">
      Finalizadas
    </Text>
    <DynamicTable data={actions} isLoading={isLoading} columns={columns} w="100%" />
  </Box>
);
