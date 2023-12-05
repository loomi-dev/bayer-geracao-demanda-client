import { Flex, Text } from '@chakra-ui/react';

import { useGetFarmerPlans } from '@/api';
import { DynamicTable, Pagination } from '@/components';
import { usePagination } from '@/hooks';

import { customerPlanningColumns } from './CustomerPlanningTable.columns';

type CustomerPlanningTableProps = {
  customerId: number;
};

export const CustomerPlanningTable = ({ customerId }: CustomerPlanningTableProps) => {
  const { data, isLoading } = useGetFarmerPlans({ farmerId: customerId });
  const { currentPage, handleNextPage, handlePreviousPage } = usePagination();
  const plans = data?.data ?? [];

  return (
    <Flex flexDir="column" w="100%" gap="2.5rem" h="100%">
      <Text textStyle="h4">Planejamentos</Text>

      <DynamicTable<Planning>
        data={plans}
        isLoading={isLoading}
        columns={customerPlanningColumns}
        fallbackMessage="Nenhum planejamento encontrado"
        fallbackProps={{ fontSize: { base: '1.2rem', '3xl': '1.6rem' } }}
        hoverProps={{ bgColor: 'opacity.green.0.10', cursor: 'pointer' }}
      />
      <Pagination
        page={currentPage}
        countItems={plans.length}
        totalPages={data?.meta.pagination.pageCount ?? 1}
        onNextPage={handleNextPage}
        onPreviousPage={handlePreviousPage}
      />
    </Flex>
  );
};
