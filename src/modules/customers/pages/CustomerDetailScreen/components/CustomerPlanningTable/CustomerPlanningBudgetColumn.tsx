import { Text } from '@chakra-ui/react';

import { formatPrice, getTotalPlanningBudgetValue } from '@/utils';

type CustomerPlanningBudgetColumnProps = {
  planningActions: PlanningAction[];
};

export const CustomerPlanningBudgetColumn = ({
  planningActions,
}: CustomerPlanningBudgetColumnProps) => {
  const totalPlanningBudgeValue = getTotalPlanningBudgetValue(planningActions);

  return <Text textStyle="action3">{`R$ ${formatPrice(totalPlanningBudgeValue)}`}</Text>;
};
