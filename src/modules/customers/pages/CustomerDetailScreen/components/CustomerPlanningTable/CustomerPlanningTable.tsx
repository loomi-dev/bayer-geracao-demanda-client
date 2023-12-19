import { Flex, Text } from '@chakra-ui/react';
import { Row } from '@tanstack/react-table';
import { useRouter } from 'next/router';

import { useGetFarmerPlans } from '@/api';
import { DynamicTable, Pagination } from '@/components';
import { usePagination } from '@/hooks';

import { CustomerPendingPlanningNotification } from './CustomerPendingPlanningNotification';
import { customerPlanningColumns } from './CustomerPlanningTable.columns';
import { getPendingPlanningsSummary } from './utils';

export const CustomerPlanningTable = () => {
  const { query, push } = useRouter();
  const customerId = Number(query.customer_id);
  const { currentPage, handleNextPage, handlePreviousPage } = usePagination();
  const { data, isLoading, isFetching } = useGetFarmerPlans({
    page: currentPage,
    farmerId: customerId,
  });
  const plannings = data?.data ?? [];

  const pendingPlannings = getPendingPlanningsSummary(plannings);

  const onRowClick = (row: Row<Planning>) => push(`${customerId}/detalhes/${row.original.id}`);

  const onClickPendingNotification = () =>
    push(`${customerId}/detalhes/${pendingPlannings.mostRecentPendingPlanningId}`);

  return (
    <Flex flexDir="column" w="100%" gap="2.5rem" h="100%">
      <Text textStyle="h4">Planejamentos</Text>
      <CustomerPendingPlanningNotification
        onClick={onClickPendingNotification}
        quantity={pendingPlannings.quantity}
      />
      <DynamicTable<Planning>
        variant="third"
        data={plannings}
        isLoading={isLoading || isFetching}
        columns={customerPlanningColumns}
        fallbackMessage="Nenhum planejamento encontrado"
        fallbackProps={{ fontSize: { base: '1.2rem', '3xl': '1.6rem' } }}
        hoverProps={{
          bg: 'greyscale.500',
          cursor: 'pointer',
        }}
        onRowClick={onRowClick}
      />
      <Pagination
        page={currentPage}
        countItems={plannings.length}
        totalPages={data?.meta.pagination.pageCount ?? 1}
        onNextPage={handleNextPage}
        onPreviousPage={handlePreviousPage}
      />
    </Flex>
  );
};
