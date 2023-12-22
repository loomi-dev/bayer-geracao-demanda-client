import { Text, VStack } from '@chakra-ui/react';

import { DynamicTable } from '@/components';

import { finalizedTablesColumns } from './FinalizedTables.columns';

type FinalizedTablesProps = {
  actions: ReceiptAction[];
  isLoading: boolean;
};

export const FinalizedTables = ({ actions, isLoading }: FinalizedTablesProps) => (
  <VStack align="flex-start" w="full" gap="1rem">
    <Text ml="1.6rem" textStyle="body4" color="greyscale.900">
      Finalizadas
    </Text>

    <DynamicTable<ReceiptAction>
      data={actions}
      isLoading={isLoading}
      columns={finalizedTablesColumns}
    />
  </VStack>
);
