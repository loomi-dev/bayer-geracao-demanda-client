import { Box } from '@chakra-ui/react';
import { useSession } from 'next-auth/react';

import { useGetReceiptsActions } from '@/api';
import { DynamicTable, Pagination } from '@/components';
import { usePagination } from '@/hooks';

import { receiptsActionsTableColumns } from './ReceiptsActionsTable.columns';

export const ReceiptsActionsTable = () => {
  const session = useSession();
  const farmerId = session.data?.user?.farmer?.id as number;
  const { currentPage, handleNextPage, handlePreviousPage } =
    usePagination('receipts_actions_table');

  const { data: dataGetReceiptsActions, isLoading } = useGetReceiptsActions(
    {
      farmerId,
      pagination: {
        page: currentPage,
        pageSize: 5,
      },
    },
    {
      enabled: Boolean(farmerId),
    },
  );

  const receiptActions = dataGetReceiptsActions?.data ?? [];
  const countReceiptActions = receiptActions.length;
  const totalReceiptActionsPage = dataGetReceiptsActions?.meta?.pagination?.pageCount ?? 1;

  return (
    <Box w="100%">
      <DynamicTable<ReceiptAction>
        data={receiptActions}
        columns={receiptsActionsTableColumns}
        isLoading={isLoading}
        w="100%"
      />

      <Pagination
        page={currentPage}
        countItems={countReceiptActions}
        totalPages={totalReceiptActionsPage}
        onPreviousPage={handlePreviousPage}
        onNextPage={handleNextPage}
        mt="1.6rem"
      />
    </Box>
  );
};
