import { HStack, Text, Skeleton, useDisclosure } from '@chakra-ui/react';
import { Row } from '@tanstack/react-table';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import React, { useState } from 'react';

import { useGetPlanningActions, useGetPlanningActionsStatistics } from '@/api';
import { DynamicTable, Pagination } from '@/components';
import { STALE_TIME_CONFIG } from '@/config';
import { usePagination } from '@/hooks';
import { formatPrice } from '@/utils';

import { planningActionsColumns } from './PlanningActionsTable.columns';

type PlanningActionsTableProps = {
  planningStatus: HistoricStatus | 'default';
  isLoadingPlanningStatus: boolean;
};

const DynamicCreatePlanningActionDrawerButton = dynamic(async () => {
  const { CreatePlanningActionDrawerButton } = await import('../CreatePlanningActionDrawerButton');

  return CreatePlanningActionDrawerButton;
});

const DynamicViewActionDetailsDrawer = dynamic(async () => {
  const { ViewActionDetailsDrawer } = await import('../ViewActionDetailsDrawer');

  return ViewActionDetailsDrawer;
});

export const PlanningActionsTable = ({
  planningStatus,
  isLoadingPlanningStatus,
}: PlanningActionsTableProps) => {
  const [planningActionSelected, setPlanningActionSelected] = useState<PlanningAction>(
    {} as PlanningAction,
  );

  const { query } = useRouter();
  const planningId = Number(query?.planning_id);
  const isPlanningAccepted = planningStatus === 'accepted';

  const { currentPage, handleNextPage, handlePreviousPage } = usePagination('planning_actions');

  const {
    isOpen: isOpenViewActionDetailsDrawer,
    onOpen: onOpenViewActionDetailsDrawer,
    onClose: onCloseViewActionDetailsDrawer,
  } = useDisclosure();

  const {
    data: dataPlanningActions,
    isLoading: isLoadingDataPlanningActions,
    isFetching: isFetchingDataPlanningActions,
  } = useGetPlanningActions(
    { planningId, pagination: { page: currentPage, pageSize: 5 } },
    {
      enabled: Boolean(planningId),
      staleTime: STALE_TIME_CONFIG,
    },
  );

  const {
    data: dataPlanningActionsStatistics,
    isLoading: isLoadingDataPlanningActionsStatistics,
    isFetching: isFetchingDataPlanningActionsStatistics,
  } = useGetPlanningActionsStatistics(
    { planningId },
    {
      enabled: Boolean(planningId),
      staleTime: STALE_TIME_CONFIG,
    },
  );

  const totalPlanningActionTablePages = dataPlanningActions?.meta.pagination.pageCount || 1;

  const isLoadingPlanningActionsList =
    isLoadingDataPlanningActions || isFetchingDataPlanningActions;
  const planningActionsList = dataPlanningActions?.data ?? [];

  const actionsKit = Number(dataPlanningActionsStatistics?.data.metric?.farm_kit_in_cents) ?? 0;
  const actionsRelationship =
    Number(dataPlanningActionsStatistics?.data.metric?.relationship_task_in_cent) ?? 0;
  const actionsTask = Number(dataPlanningActionsStatistics?.data.metric?.farm_task_in_cents) ?? 0;

  const totalPlanningActionsBudgetValue = actionsKit + actionsRelationship + actionsTask;
  const isLoadingTotalPlanningActionsBudgetValue =
    isLoadingDataPlanningActionsStatistics || isFetchingDataPlanningActionsStatistics;

  const handleSelectPlanningActionAndOpenViewerDrawer = (row: Row<PlanningAction>) => {
    setPlanningActionSelected(row.original);
    onOpenViewActionDetailsDrawer();
  };

  return (
    <>
      <DynamicTable<PlanningAction>
        columns={planningActionsColumns}
        data={planningActionsList}
        isLoading={isLoadingPlanningActionsList}
        fallbackMessage="Ainda não possui ações criadas, crie sua primeira ação."
        hoverProps={{
          bg: 'greyscale.500',
          cursor: 'pointer',
        }}
        pb="0"
        onRowClick={handleSelectPlanningActionAndOpenViewerDrawer}
      >
        <HStack
          justify="space-between"
          px="2.4rem"
          borderTop="1px solid"
          borderColor="opacity.white.1.40"
          mb="2rem"
          pt="2rem"
        >
          {isLoadingTotalPlanningActionsBudgetValue ? (
            <Skeleton w="17rem" h="3rem" />
          ) : (
            <Text textStyle="action3" textTransform="uppercase">
              Total{' '}
              <Text as="span" textStyle="action1" color="surface.brand" ml="2.3rem">
                {`R$ ${formatPrice(totalPlanningActionsBudgetValue)}`}
              </Text>
            </Text>
          )}

          {!isPlanningAccepted && !isLoadingPlanningStatus && (
            <DynamicCreatePlanningActionDrawerButton />
          )}
        </HStack>
      </DynamicTable>

      {isOpenViewActionDetailsDrawer && (
        <DynamicViewActionDetailsDrawer
          planningActionDetails={planningActionSelected}
          isOpen={isOpenViewActionDetailsDrawer}
          onClose={onCloseViewActionDetailsDrawer}
        />
      )}

      <Pagination
        page={currentPage}
        countItems={planningActionsList.length}
        totalPages={totalPlanningActionTablePages}
        onNextPage={handleNextPage}
        onPreviousPage={handlePreviousPage}
      />
    </>
  );
};
