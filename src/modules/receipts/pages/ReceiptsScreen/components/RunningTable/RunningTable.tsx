import { Box, Text } from '@chakra-ui/react';

import { GetActionsResponse } from '@/api';
import { DynamicTable } from '@/components';

import { columns } from './RunningTable.columns';

type RunningTableProps = {
  actions: GetActionsResponse['data'];
  isLoading: boolean;
};

export const RunningTable = ({ actions, isLoading }: RunningTableProps) => (
  <Box w="100%">
    <Text mb="1rem" ml="1.6rem" textStyle="body4" color="greyscale.900">
      Em execução
    </Text>
    <DynamicTable data={actions} isLoading={isLoading} columns={columns} w="100%" />
  </Box>
);
