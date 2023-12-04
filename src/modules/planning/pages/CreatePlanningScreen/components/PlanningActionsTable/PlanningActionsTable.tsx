import { HStack, Button, Text, Skeleton } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import React, { useMemo } from 'react';

import { AddInsideCircleIcon, CircleIcon, DynamicTable, Pagination } from '@/components';
import { usePagination } from '@/hooks';
import { useGetPlanningActions } from '@/modules/planning/api';
import { centsToInteger, formatPrice } from '@/utils';

import { planningActionsColumns } from './PlanningActionsTable.columns';

export const PlanningActionsTable = () => {
  const { query } = useRouter();
  const planningId = Number(query?.planning_id);

  const { currentPage, handleNextPage, handlePreviousPage } = usePagination('planning_actions');

  const {
    data: dataPlanningActions,
    isLoading: isLoadingDataPlanningActions,
    isFetching: isFetchingDataPlanningActions,
  } = useGetPlanningActions(
    { planningId, page: currentPage },
    {
      enabled: Boolean(planningId),
    },
  );

  const isLoadingPlanningActionsList =
    isLoadingDataPlanningActions || isFetchingDataPlanningActions;
  const planningActionsList = useMemo(
    () => dataPlanningActions?.data ?? [],
    [dataPlanningActions?.data],
  );

  const totalPlanningActionsBudgetValue = useMemo(
    () =>
      planningActionsList.reduce((totalValue, planningAction) => {
        const planningActionValueConvertedToInt = centsToInteger(
          planningAction?.amountInCents ?? 0,
        );

        totalValue += planningActionValueConvertedToInt;

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

          <Button
            variant="third"
            w="15.6rem"
            pl="2.4rem"
            pr="0"
            transition="all 0.2s linear"
            rightIcon={
              <CircleIcon>
                <AddInsideCircleIcon />
              </CircleIcon>
            }
            _hover={{
              pl: '1rem',
            }}
          >
            <Text as="span" w="full" align="center">
              Nova ação
            </Text>
          </Button>
        </HStack>
      </DynamicTable>

      {planningActionsList.length > 0 && (
        <Pagination
          page={currentPage}
          countItems={planningActionsList.length}
          totalPages={dataPlanningActions?.meta.pagination.pageCount || 1}
          onNextPage={handleNextPage}
          onPreviousPage={handlePreviousPage}
        />
      )}
    </>
  );
};
