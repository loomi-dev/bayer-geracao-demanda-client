import React, { Fragment } from 'react';

import { Pagination } from '@/components';
import { usePagination } from '@/hooks';

import { DrawerExpenseReceipt, FinalizedTables, RunningTable, TableFilter } from './components';

export const ReceiptsScreenManager = () => {
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
    <Fragment>
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
    </Fragment>
  );
};
