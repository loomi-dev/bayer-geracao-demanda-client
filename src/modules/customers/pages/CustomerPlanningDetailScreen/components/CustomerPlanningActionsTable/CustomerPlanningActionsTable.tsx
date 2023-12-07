import { Flex, Text, useDisclosure } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { useState } from 'react';

import { useGetPlanningActions, useGetPlanningActionsStatistics } from '@/api';
import { DynamicTable, Pagination, PlanningHistoric } from '@/components';
import { usePagination } from '@/hooks';

import { ActionCards } from './ActionCards';
import { CustomerPlanningActionsColumns } from './CustomerPlanningActions.columns';
import { PlanningActionResume } from './PlanningActionResume';

export const CustomerPlanningActionsTable = () => {
  const { query } = useRouter();
  const { currentPage, handleNextPage, handlePreviousPage } = usePagination();
  const { isOpen, onClose } = useDisclosure();
  const [rowSelection, setRowSelection] = useState({});
  const planningId = Number(query.planning_id);
  const { data: metricsData, isLoading: isLoadingMetrics } = useGetPlanningActionsStatistics(
    {
      planningId,
    },
    { enabled: Boolean(planningId) },
  );
  const { data: actionsData, isLoading: isLoadingActions } = useGetPlanningActions(
    { planningId },
    { enabled: Boolean(planningId) },
  );

  const metrics = metricsData?.data.metric;
  const actions = actionsData?.data ?? [];
  const farmKitValue = Number(metrics?.farm_kit_in_cents ?? 0);
  const farmTaskValue = Number(metrics?.farm_task_in_cents ?? 0);
  const relationshipTaskValue = Number(metrics?.relationship_task_in_cent ?? 0);
  const planningValue = farmKitValue + farmTaskValue + relationshipTaskValue;

  const selectedRows = Object.keys(rowSelection).map((key) => actions[key].id);

  return (
    <Flex flexDir="column" w="100%" gap="2.5rem" h="100%">
      <Text textStyle="h3" fontWeight="bold">
        Ações
      </Text>
      <ActionCards
        farmKitValue={farmKitValue}
        farmTaskValue={farmTaskValue}
        relationshipTaskValue={relationshipTaskValue}
        isLoading={isLoadingMetrics}
      />
      <DynamicTable<PlanningAction>
        data={actions}
        columns={CustomerPlanningActionsColumns}
        isLoading={isLoadingActions}
        tableOptions={{
          enableRowSelection: (row) => row.original.status !== 'rejected',
          state: { rowSelection },
          onRowSelectionChange: setRowSelection,
        }}
        fallbackMessage="Nenhuma ação encontrada"
        fallbackProps={{ fontSize: { base: '1.2rem', '3xl': '1.6rem' } }}
        hoverProps={{ bgColor: 'opacity.green.0.10', cursor: 'pointer' }}
      />
      <Pagination
        page={currentPage}
        countItems={actions.length}
        totalPages={actionsData?.meta.pagination.pageCount ?? 1}
        onNextPage={handleNextPage}
        onPreviousPage={handlePreviousPage}
      />
      <PlanningActionResume planningValue={planningValue} />
      <PlanningHistoric planningId={planningId} isOpen={isOpen} onClose={onClose} />
    </Flex>
  );
};
