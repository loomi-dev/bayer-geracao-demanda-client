import { Text } from '@chakra-ui/react';

import { formatPrice, getTotalPlanningBudgetValue } from '@/utils';

type PlanningBudgetColumnProps = {
  planningActions: PlanningAction[];
};

export const PlanningBudgetColumn = ({ planningActions }: PlanningBudgetColumnProps) => {
  const totalPlanningBudgeValue = getTotalPlanningBudgetValue(planningActions);

  return <Text textStyle="action3">{`R$ ${formatPrice(totalPlanningBudgeValue)}`}</Text>;
};
