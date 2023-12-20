import { Flex, Text, useDisclosure } from '@chakra-ui/react';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import { useState } from 'react';

import {
  useGetPlanningActions,
  useGetPlanningActionsStatistics,
  useGetPlanningStatus,
} from '@/api';
import { DynamicTable, Pagination } from '@/components';
import { usePagination } from '@/hooks';

import { ActionCards } from './ActionCards';
import { CustomerPlanningActionsColumns } from './CustomerPlanningActions.columns';
import { PlanningActionResume } from './PlanningActionResume';

const CustomerHistoricDynamicDrawer = dynamic(async () => {
  const { CustomerHistoricDrawer } = await import('../CustomerHistoricDrawer');

  return CustomerHistoricDrawer;
});

export const CustomerPlanningActionsTable = () => {
  const { query } = useRouter();
  const { currentPage, handleNextPage, handlePreviousPage } = usePagination();
  const {
    isOpen: isOpenHistoricDrawer,
    onClose: onCloseHistoricDrawer,
    onOpen: onOpenHistoricDrawer,
  } = useDisclosure();
  const [rowSelection, setRowSelection] = useState({});
  const [isApproving, setIsApproving] = useState(false);
  const planningId = Number(query.planning_id);
  const {
    data: metricsData,
    isLoading: isLoadingMetrics,
    isFetching: isFetchingMetrics,
  } = useGetPlanningActionsStatistics(
    {
      planningId,
    },
    { enabled: Boolean(planningId) },
  );
  const {
    data: actionsData,
    isLoading: isLoadingActions,
    isFetching: isFetchingActions,
  } = useGetPlanningActions(
    { planningId, pagination: { page: currentPage, pageSize: 10 } },
    { enabled: Boolean(planningId) },
  );
  const { data } = useGetPlanningStatus({ planningId }, { enabled: Boolean(planningId) });
  const historic = data?.data.historic ?? [];
  const planningStatus = historic[historic.length - 1]?.status;
  const metrics = metricsData?.data.metric;
  const actions = actionsData?.data ?? [];
  const farmKitValue = Number(metrics?.farm_kit_in_cents ?? 0);
  const farmTaskValue = Number(metrics?.farm_task_in_cents ?? 0);
  const relationshipTaskValue = Number(metrics?.relationship_task_in_cent ?? 0);
  const planningValue = farmKitValue + farmTaskValue + relationshipTaskValue;

  const selectedRows = Object.keys(rowSelection).map((key) => actions[key]);

  const onApprovePlanning = () => {
    setIsApproving(true);
    onOpenHistoricDrawer();
  };

  const onRejectPlanning = () => {
    setIsApproving(false);
    onOpenHistoricDrawer();
  };

  return (
    <Flex flexDir="column" w="100%" gap="2.5rem" h="100%">
      <Text textStyle="h3" fontWeight="bold">
        Ações
      </Text>
      <ActionCards
        farmKitValue={farmKitValue}
        farmTaskValue={farmTaskValue}
        relationshipTaskValue={relationshipTaskValue}
        isLoading={isLoadingMetrics || isFetchingMetrics}
      />
      <DynamicTable<PlanningAction>
        variant="third"
        data={actions}
        columns={CustomerPlanningActionsColumns(planningStatus)}
        isLoading={isLoadingActions || isFetchingActions}
        tableOptions={{
          enableRowSelection: (row) => row.original.status !== 'rejected',
          state: { rowSelection },
          onRowSelectionChange: setRowSelection,
        }}
        fallbackMessage="Nenhuma ação encontrada"
        fallbackProps={{ fontSize: { base: '1.2rem', '3xl': '1.6rem' } }}
      >
        {selectedRows.length && planningStatus === 'ready_for_evaluation' ? (
          <Flex justify="center" h="100%" bgColor="opacity.red.1.10">
            <Text
              textStyle="footnote-bold"
              mt="1rem"
              textTransform="uppercase"
              color="red.danger_40"
            >
              Recusar ações selecionadas
            </Text>
          </Flex>
        ) : null}
      </DynamicTable>
      <Pagination
        page={currentPage}
        countItems={actions.length}
        totalPages={actionsData?.meta.pagination.pageCount ?? 1}
        onNextPage={handleNextPage}
        onPreviousPage={handlePreviousPage}
      />
      <PlanningActionResume
        hasSelectedActions={Boolean(selectedRows.length)}
        onApprove={onApprovePlanning}
        planningStatus={planningStatus}
        onReject={onRejectPlanning}
        planningValue={planningValue}
      />
      {isOpenHistoricDrawer && (
        <CustomerHistoricDynamicDrawer
          planningId={planningId}
          isApproving={isApproving}
          selectedActions={selectedRows}
          isOpen={isOpenHistoricDrawer}
          onClose={onCloseHistoricDrawer}
        />
      )}
    </Flex>
  );
};
