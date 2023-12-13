import { Box, Text } from '@chakra-ui/react';
import { useEffect } from 'react';

import { DynamicTable, Pagination } from '@/components';
import { getActions } from '@/modules/receipts/api';

import { columns } from './FinalizedTables.columns';

export const FinalizedTables = () => {
  useEffect(() => {
    getActions();
  }, []);

  const handlePreviousPage = () => {};
  const handleNextPage = () => {};

  return (
    <Box w="100%">
      <Text mb="1rem" ml="1.6rem" textStyle="body4" color="greyscale.900">
        Finalizadas
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

      <Pagination
        page={1}
        countItems={1}
        totalPages={10}
        onPreviousPage={handlePreviousPage}
        onNextPage={handleNextPage}
        mt="1.6rem"
      />
    </Box>
  );
};
