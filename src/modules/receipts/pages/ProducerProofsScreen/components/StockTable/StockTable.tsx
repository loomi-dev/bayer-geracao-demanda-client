import { Box } from '@chakra-ui/react';

import { useGetActions } from '@/api';
import { DynamicTable, Pagination } from '@/components';
import { usePagination } from '@/hooks';

import { columns } from './StockTable.columns';

export const StockTable = () => {
  const { currentPage, handleNextPage, handlePreviousPage } = usePagination('actions_table');

  const { data, isLoading } = useGetActions({
    pagination: {
      page: currentPage,
      pageSize: 5,
    },
  });

  const tableData = data?.data ?? [];

  return (
    <Box w="100%" mt="2.3rem">
      <DynamicTable data={tableData} columns={columns} isLoading={isLoading} w="100%" />

      <Pagination
        page={currentPage}
        countItems={tableData.length}
        totalPages={data?.meta.pagination.pageCount ?? 1}
        onPreviousPage={handlePreviousPage}
        onNextPage={handleNextPage}
        mt="1.6rem"
      />
    </Box>
  );
};
