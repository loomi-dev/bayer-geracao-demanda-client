import { Box, Text } from '@chakra-ui/react';

import { DynamicTable } from '@/components';

import { columns } from './RunningTable.columns';

export const RunningTable = () => (
  <Box w="100%">
    <Text mb="1rem" ml="1.6rem" textStyle="body4" color="greyscale.900">
      Em execução
    </Text>
    <DynamicTable
      data={[
        {
          executionDate: '12/12/2023',
          finalGD: 20000,
          initialGD: 20000,
          harvest: '2023/2024',
          id: 1,
          segment: 'relationshipAction',
          shareTitle: 'Titulo da Ação',
          status: 'Comprovantes pendentes',
        },
      ]}
      columns={columns}
      w="100%"
    />
  </Box>
);
