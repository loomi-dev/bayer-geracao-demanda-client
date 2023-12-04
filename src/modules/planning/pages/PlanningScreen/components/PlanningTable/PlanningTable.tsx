import { Box, Button, HStack, Skeleton, Text } from '@chakra-ui/react';
import { useSession } from 'next-auth/react';
import { useMemo } from 'react';

import { AddInsideCircleIcon, CircleIcon, DynamicTable } from '@/components';
import { useGetFarmerPlans } from '@/modules/planning/api';
import { formatPrice, getTotalPlanningBudgetValue } from '@/utils';

import { planningTableColumns } from './PlanningTable.columns';

export const PlanningTable = () => {
  const session = useSession();
  const userId = session.data?.user.id as number;

  const {
    data: dataGetFarmerPlans,
    isLoading: isLoadingDataGetFarmerPlans,
    isFetching: isFetchingDataGetFarmerPlans,
  } = useGetFarmerPlans({ farmerId: userId }, { enabled: Boolean(userId) });

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
                <AddInsideCircleIcon />
              </CircleIcon>
            }
            _hover={{
              pl: '1rem',
            }}
          >
            <Text as="span" w="full" align="center">
              Novo planejamento
            </Text>
          </Button>
        </HStack>
      </DynamicTable>
    </Box>
  );
};
