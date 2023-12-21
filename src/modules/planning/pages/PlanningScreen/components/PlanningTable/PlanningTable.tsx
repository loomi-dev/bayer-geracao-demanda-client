import { Box, HStack, Skeleton, Text } from '@chakra-ui/react';
import { Row } from '@tanstack/react-table';
import { useRouter } from 'next/router';
import { useSession } from 'next-auth/react';

import { useGetFarmerPlans } from '@/api';
import { DynamicTable, Pagination } from '@/components';
import { usePagination } from '@/hooks';
import { formatPrice } from '@/utils';

import { CreatePlanningButton } from '../CreatePlanningButton';

import { planningTableColumns } from './PlanningTable.columns';

export const PlanningTable = () => {
  const { push } = useRouter();
  const session = useSession();
  const farmerId = session.data?.user?.farmer?.id as number;

  const { currentPage, handleNextPage, handlePreviousPage } = usePagination('planning_table');

  const {
    data: dataGetFarmerPlans,
    isLoading: isLoadingDataGetFarmerPlans,
    isFetching: isFetchingDataGetFarmerPlans,
  } = useGetFarmerPlans({ page: currentPage, farmerId }, { enabled: Boolean(farmerId) });

  const totalPlanningTablePages = dataGetFarmerPlans?.meta.pagination.pageCount || 1;

  const isLoadingPlansList = isLoadingDataGetFarmerPlans || isFetchingDataGetFarmerPlans;
  const plansList = dataGetFarmerPlans?.data ?? [];
  const totalPlansBudgetValue = dataGetFarmerPlans?.meta.plannedAmountAggregateInCents;

  const handleNavigateToCreatePlanningScreen = (row: Row<Planning>) => {
    push({
      pathname: '/planejamento/criar-novo-planejamento',
      query: {
        planning_id: row.original.id,
      },
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
        hoverProps={{
          bg: 'greyscale.500',
          cursor: 'pointer',
        }}
        pb="0"
        onRowClick={handleNavigateToCreatePlanningScreen}
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

          <CreatePlanningButton />
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
