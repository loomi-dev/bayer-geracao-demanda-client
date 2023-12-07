import { Box, Button, HStack, Skeleton, Spinner, Text } from '@chakra-ui/react';
import { useSession } from 'next-auth/react';
import { useMemo } from 'react';

import { useGetFarmerPlans, useCreatePlanning } from '@/api';
import { AddInsideCircleIcon, CircleIcon, DynamicTable, Pagination } from '@/components';
import { usePagination } from '@/hooks';
import { formatPrice, getTotalPlanningBudgetValue } from '@/utils';

import { planningTableColumns } from './PlanningTable.columns';

export const PlanningTable = () => {
  const session = useSession();
  const userId = session.data?.user.id as number;

  const { currentPage, handleNextPage, handlePreviousPage } = usePagination('planning_table');

  const {
    data: dataGetFarmerPlans,
    isLoading: isLoadingDataGetFarmerPlans,
    isFetching: isFetchingDataGetFarmerPlans,
  } = useGetFarmerPlans({ page: currentPage, farmerId: userId }, { enabled: Boolean(userId) });

  const { mutate: createPlanning, isLoading: isLoadingCreatePlanning } = useCreatePlanning();

  const totalPlanningTablePages = dataGetFarmerPlans?.meta.pagination.pageCount || 1;

  const isLoadingPlansList = isLoadingDataGetFarmerPlans || isFetchingDataGetFarmerPlans;
  const plansList = useMemo(() => dataGetFarmerPlans?.data ?? [], [dataGetFarmerPlans?.data]);

  const totalPlansBudgetValue = useMemo(
    () =>
      plansList.reduce((totalPlansValue, planning) => {
        const totalPlanningBudgeValue = getTotalPlanningBudgetValue(planning?.actions ?? []);

        totalPlansValue += totalPlanningBudgeValue;

        return totalPlansValue;
      }, 0),
    [plansList],
  );

  const handleCreatePlanning = () => {
    createPlanning({
      farmerId: userId,
    });
  };

  return (
    <Box w="full">
      <Text textStyle="h4" mb="2rem">
        Planejamentos
      </Text>

      <DynamicTable<Planning>
        variant="third"
        data={plansList}
        columns={planningTableColumns}
        isLoading={isLoadingPlansList}
      >
        <HStack
          justify="space-between"
          px="2.4rem"
          borderTop="1px solid"
          borderColor="opacity.white.1.40"
          mb="2rem"
          pt="2rem"
        >
          {isLoadingPlansList ? (
            <Skeleton w="17rem" h="3rem" />
          ) : (
            <Text textStyle="action3" textTransform="uppercase">
              Total{' '}
              <Text as="span" textStyle="action1" color="surface.brand" ml="2.3rem">
                {`R$ ${formatPrice(totalPlansBudgetValue)}`}
              </Text>
            </Text>
          )}

          <Button
            variant="third"
            w="21.5rem"
            pl="2.4rem"
            pr="0"
            transition="all 0.2s linear"
            rightIcon={
              <CircleIcon>
                {isLoadingCreatePlanning ? (
                  <Spinner color="#fff" fontSize={20} />
                ) : (
                  <AddInsideCircleIcon />
                )}
              </CircleIcon>
            }
            isDisabled={isLoadingCreatePlanning}
            onClick={handleCreatePlanning}
            _hover={{
              pl: '1rem',
            }}
            _disabled={{
              pl: '1rem',
            }}
          >
            <Text as="span" w="full" align="center">
              Novo planejamento
            </Text>
          </Button>
        </HStack>
      </DynamicTable>

      <Pagination
        page={currentPage}
        countItems={plansList.length}
        totalPages={totalPlanningTablePages}
        onPreviousPage={handlePreviousPage}
        onNextPage={handleNextPage}
        mt="1.6rem"
      />
    </Box>
  );
};
