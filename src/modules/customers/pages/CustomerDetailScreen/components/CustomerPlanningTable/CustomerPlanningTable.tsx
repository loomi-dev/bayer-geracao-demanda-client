import { Flex, Text } from '@chakra-ui/react';
import { useRouter } from 'next/router';

import { useGetFarmerPlans } from '@/api';
import { DynamicTable, Pagination } from '@/components';
import { usePagination } from '@/hooks';

import { CustomerPendingPlanningNotification } from './CustomerPendingPlanningNotification';
import { customerPlanningColumns } from './CustomerPlanningTable.columns';

export const CustomerPlanningTable = () => {
  const { query } = useRouter();
  const customerId = Number(query.customer_id);
  const { currentPage, handleNextPage, handlePreviousPage } = usePagination();
  const { data, isLoading } = useGetFarmerPlans({ page: currentPage, farmerId: customerId });
  const plannings = data?.data ?? [];
  const pendingPlans = plannings.reduce((pendingValue, planning) => {
    if (planning.historic?.at(-1)?.status === 'ready_for_evaluation') {
      pendingValue++;
    }
    return pendingValue;
  }, 0);

  return (
    <Flex flexDir="column" w="100%" gap="2.5rem" h="100%">
      <Text textStyle="h4">Planejamentos</Text>
      <CustomerPendingPlanningNotification quantity={pendingPlans} />
      <DynamicTable<Planning>
        data={plannings}
        isLoading={isLoading}
        columns={customerPlanningColumns}
        fallbackMessage="Nenhum planejamento encontrado"
        fallbackProps={{ fontSize: { base: '1.2rem', '3xl': '1.6rem' } }}
        hoverProps={{ bgColor: 'opacity.green.0.10', cursor: 'pointer' }}
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
