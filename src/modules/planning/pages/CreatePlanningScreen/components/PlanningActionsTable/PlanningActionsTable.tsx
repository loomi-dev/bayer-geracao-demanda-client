import { HStack, Text, Skeleton } from '@chakra-ui/react';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import React, { useMemo } from 'react';

import { useGetPlanningActions } from '@/api';
import { DynamicTable, Pagination } from '@/components';
import { usePagination } from '@/hooks';
import { formatPrice } from '@/utils';

import { planningActionsColumns } from './PlanningActionsTable.columns';

type PlanningActionsTableProps = {
  planningStatus: HistoricStatus | 'default';
};

const DynamicCreatePlanningActionDrawerButton = dynamic(async () => {
  const { CreatePlanningActionDrawerButton } = await import('../CreatePlanningActionDrawerButton');

  return CreatePlanningActionDrawerButton;
});

export const PlanningActionsTable = ({ planningStatus }: PlanningActionsTableProps) => {
  const { query } = useRouter();
  const planningId = Number(query?.planning_id);
  const isPlanningAccepted = planningStatus === 'accepted';

  const { currentPage, handleNextPage, handlePreviousPage } = usePagination('planning_actions');

  const {
    data: dataPlanningActions,
    isLoading: isLoadingDataPlanningActions,
    isFetching: isFetchingDataPlanningActions,
  } = useGetPlanningActions(
    { planningId, pagination: { page: currentPage, pageSize: 5 } },
    {
      enabled: Boolean(planningId),
    },
  );

  const totalPlanningActionTablePages = dataPlanningActions?.meta.pagination.pageCount || 1;

  const isLoadingPlanningActionsList =
    isLoadingDataPlanningActions || isFetchingDataPlanningActions;
  const planningActionsList = useMemo(
    () => dataPlanningActions?.data ?? [],
    [dataPlanningActions?.data],
  );

  const totalPlanningActionsBudgetValue = useMemo(
    () =>
      planningActionsList.reduce((totalValue, planningAction) => {
        const planningActionValue = planningAction?.amountInCents ?? 0;

        totalValue += planningActionValue;

        return totalValue;
      }, 0),
    [planningActionsList],
  );

  return (
    <>
      <DynamicTable<PlanningAction>
        columns={planningActionsColumns}
        data={planningActionsList}
        isLoading={isLoadingPlanningActionsList}
        fallbackMessage="Ainda não possui ações criadas, crie sua primeira ação."
      >
        <HStack
          justify="space-between"
          px="2.4rem"
          borderTop="1px solid"
          borderColor="opacity.white.1.40"
          mb="2rem"
          pt="2rem"
        >
          {isLoadingPlanningActionsList ? (
            <Skeleton w="17rem" h="3rem" />
          ) : (
            <Text textStyle="action3" textTransform="uppercase">
              Total{' '}
              <Text as="span" textStyle="action1" color="surface.brand" ml="2.3rem">
                {`R$ ${formatPrice(totalPlanningActionsBudgetValue)}`}
              </Text>
            </Text>
          )}

          {!isPlanningAccepted && <DynamicCreatePlanningActionDrawerButton />}
        </HStack>
      </DynamicTable>

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
