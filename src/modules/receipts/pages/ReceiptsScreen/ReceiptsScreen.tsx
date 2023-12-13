import { Box } from '@chakra-ui/react';
import React from 'react';

import { DocumentIcon, Header, Pagination } from '@/components';
import { usePagination } from '@/hooks';
import { GetActionsResponse, useGetActions } from '@/modules/api';

import { DrawerExpenseReceipt, FinalizedTables, RunningTable, TableFilter } from './components';

export const ReceiptsScreen = () => {
  const { currentPage, handleNextPage, handlePreviousPage } = usePagination('actions_table');

  const { data, isLoading } = useGetActions({
    pagination: {
      page: currentPage,
      pageSize: 5,
    },
  });

  const separateData = (data as GetActionsResponse)?.data?.reduce(
    (prev, action) => {
      if (action.status === 'accepted') {
        prev.finished.push(action);
      } else {
        prev.running.push(action);
      }

      return prev;
    },
    {
      finished: [] as GetActionsResponse['data'][0][],
      running: [] as GetActionsResponse['data'][0][],
    },
  );

  return (
    <Box boxSize="100%">
      <Header label="Comprovações" icon={<DocumentIcon color="white" />} />
      <DrawerExpenseReceipt />

      <TableFilter />

      <RunningTable actions={separateData?.running} isLoading={isLoading} />
      <FinalizedTables actions={separateData?.finished} isLoading={isLoading} />

      <Pagination
        page={currentPage}
        countItems={data?.data.length}
        totalPages={data?.meta.pagination.pageCount ?? 1}
        onPreviousPage={handlePreviousPage}
        onNextPage={handleNextPage}
        mt="1.6rem"
      />
    </Box>
  );
};
