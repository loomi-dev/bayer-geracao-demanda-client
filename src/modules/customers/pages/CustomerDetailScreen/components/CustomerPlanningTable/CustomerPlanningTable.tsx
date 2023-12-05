import { Flex, Text } from '@chakra-ui/react';

import { useGetFarmerPlans } from '@/api';
import { DynamicTable, Pagination } from '@/components';
import { usePagination } from '@/hooks';

import { CustomerPendingPlanningNotification } from './CustomerPendingPlanningNotification';
import { customerPlanningColumns } from './CustomerPlanningTable.columns';

type CustomerPlanningTableProps = {
  customerId: number;
};

export const CustomerPlanningTable = ({ customerId }: CustomerPlanningTableProps) => {
  const { data, isLoading } = useGetFarmerPlans({ farmerId: customerId });
  const { currentPage, handleNextPage, handlePreviousPage } = usePagination();
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
