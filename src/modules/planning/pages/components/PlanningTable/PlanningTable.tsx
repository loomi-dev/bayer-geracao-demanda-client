import { Box, Button, HStack, Text } from '@chakra-ui/react';
import { useSession } from 'next-auth/react';
import { useMemo } from 'react';

import { AddInsideCircleIcon, CircleIcon, DynamicTable } from '@/components';
import { useGetFarmerAllPlans } from '@/modules/planning/api';
import { formatPrice, getTotalPlanningBudgetValue } from '@/utils';

import { planningColumns } from './planningTable.columns';

export const PlanningTable = () => {
  const session = useSession();
  const userId = session.data?.user.id as number;

  const { data: dataGetFarmerAllPlans } = useGetFarmerAllPlans(
    { farmerId: userId },
    { enabled: Boolean(userId) },
  );

  const allPlansList = useMemo(
    () => dataGetFarmerAllPlans?.data ?? [],
    [dataGetFarmerAllPlans?.data],
  );

  const totalAllPlansBudgetValue = useMemo(
    () =>
      allPlansList.reduce((totalAllPlansValue, planning) => {
        const totalPlanningBudgeValue = getTotalPlanningBudgetValue(planning?.actions ?? []);

        totalAllPlansValue += totalPlanningBudgeValue;

        return totalAllPlansValue;
      }, 0),
    [allPlansList],
  );

  return (
    <Box w="full">
      <Text textStyle="h4" mb="2rem">
        Planejamentos
      </Text>

      <DynamicTable<PlanningType> data={allPlansList} columns={planningColumns}>
        <HStack
          justify="space-between"
          px="2.4rem"
          borderTop="1px solid"
          borderColor="opacity.white.1.40"
          mb="2rem"
          pt="2rem"
        >
          <Text textStyle="action3" textTransform="uppercase" lineHeight="0">
            Total{' '}
            <Text as="span" textStyle="action1" color="surface.brand" ml="2.3rem">
              {`R$ ${formatPrice(totalAllPlansBudgetValue)}`}
            </Text>
          </Text>

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
