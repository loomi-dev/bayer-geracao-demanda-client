import { Text, VStack } from '@chakra-ui/react';

import { DynamicTable } from '@/components';

import { runningTableColumns } from './RunningTable.columns';

type RunningTableProps = {
  actions: ReceiptAction[];
  isLoading: boolean;
};

export const RunningTable = ({ actions, isLoading }: RunningTableProps) => (
  <VStack align="flex-start" w="full" gap="1rem">
    <Text ml="1.6rem" textStyle="body4" color="greyscale.900">
      Em execução
    </Text>

    <DynamicTable<ReceiptAction>
      data={actions}
      isLoading={isLoading}
      columns={runningTableColumns}
    />
  </VStack>
);
