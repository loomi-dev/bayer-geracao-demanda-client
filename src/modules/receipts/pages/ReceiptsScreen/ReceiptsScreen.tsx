import { Box } from '@chakra-ui/react';
import React from 'react';

import { ActionResponse, useGetActions } from '@/api';
import { DocumentIcon, Header, Pagination } from '@/components';
import { usePagination } from '@/hooks';

import { DrawerExpenseReceipt, FinalizedTables, RunningTable, TableFilter } from './components';

export const ReceiptsScreen = () => {
  const { currentPage, handleNextPage, handlePreviousPage } = usePagination('actions_table');

  const { data, isLoading } = useGetActions({
    pagination: {
      page: currentPage,
      pageSize: 5,
    },
  });

  const separateData = data?.data?.reduce(
    (prev, action) => {
      if (action.status === 'accepted') {
        prev.finished.push(action);
      } else {
        prev.running.push(action);
      }

      return prev;
    },
    {
      finished: [] as ActionResponse[],
      running: [] as ActionResponse[],
    },
  );

  return (
    <Box boxSize="100%">
      <Header label="Comprovações" icon={<DocumentIcon color="white" />} />
      <DrawerExpenseReceipt />

      <TableFilter />

      <RunningTable actions={separateData?.running ?? []} isLoading={isLoading} />
      <FinalizedTables actions={separateData?.finished ?? []} isLoading={isLoading} />

      <Pagination
        page={currentPage}
        countItems={data?.data.length ?? 0}
        totalPages={data?.meta.pagination.pageCount ?? 1}
        onPreviousPage={handlePreviousPage}
        onNextPage={handleNextPage}
        mt="1.6rem"
      />
    </Box>
  );
};
