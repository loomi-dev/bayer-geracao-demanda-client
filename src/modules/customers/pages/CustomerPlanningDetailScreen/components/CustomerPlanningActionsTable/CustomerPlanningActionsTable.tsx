import { Flex, Text } from '@chakra-ui/react';
import { useRouter } from 'next/router';

import { useGetPlanningActions } from '@/api';
import { DynamicTable, Pagination } from '@/components';
import { usePagination } from '@/hooks';

import { ActionCards } from './ActionCards';
import { CustomerPlanningActionsColumns } from './CustomerPlanningActions.columns';
import { PlanningActionResume } from './PlanningActionResume';

export const CustomerPlanningActionsTable = () => {
  const { query } = useRouter();
  const { currentPage, handleNextPage, handlePreviousPage } = usePagination();
  const planningId = Number(query.planning_id);
  const { data, isLoading } = useGetPlanningActions({ planningId });
  const actions = data?.data ?? [];

  const planningValue = actions.reduce((accumulator, action) => {
    accumulator += action.amountInCents ?? 0;
    return accumulator;
  }, 0);

  return (
    <Flex flexDir="column" w="100%" gap="2.5rem" h="100%">
      <Text textStyle="h3" fontWeight="bold">
        Ações
      </Text>
      <ActionCards />
      <DynamicTable<PlanningAction>
        data={actions}
        columns={CustomerPlanningActionsColumns}
        isLoading={isLoading}
        fallbackMessage="Nenhuma ação encontrada"
        fallbackProps={{ fontSize: { base: '1.2rem', '3xl': '1.6rem' } }}
        hoverProps={{ bgColor: 'opacity.green.0.10', cursor: 'pointer' }}
      />
      <Pagination
        page={currentPage}
        countItems={actions.length}
        totalPages={data?.meta.pagination.pageCount ?? 1}
        onNextPage={handleNextPage}
        onPreviousPage={handlePreviousPage}
      />
      <PlanningActionResume planningValue={planningValue} />
    </Flex>
  );
};
