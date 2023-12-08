import { Box } from '@chakra-ui/react';

import { DynamicTable } from '@/components';

import { columns } from './StockTable.columns';

export const StockTable = () => (
  <Box w="100%" mt="2.3rem">
    <DynamicTable
      data={[
        {
          finalGdFeature: 20000,
          homeGdFeature: 20000,
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
