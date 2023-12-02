import { Text } from '@chakra-ui/react';
import React from 'react';

import { formatPrice, getTotalPlanningBudgetValue } from '@/utils';

type PlanningBudgetColumnProps = {
  planningActions: PlanningActionType[];
};

export const PlanningBudgetColumn = ({ planningActions }: PlanningBudgetColumnProps) => {
  const totalPlanningBudgeValue = getTotalPlanningBudgetValue(planningActions);

  return <Text textStyle="action3">{`R$ ${formatPrice(totalPlanningBudgeValue)}`}</Text>;
};
