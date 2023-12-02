import { Text } from '@chakra-ui/react';
import React from 'react';

import { centsToInteger, formatPrice } from '@/utils';

type PlanningBudgetColumnProps = {
  planningActions: PlanningActionType[];
};

export const PlanningBudgetColumn = ({ planningActions }: PlanningBudgetColumnProps) => {
  const totalPlanningBudgeValue = planningActions?.reduce((totalValue, planningAction) => {
    const planningActionValueConvertedInInteger = centsToInteger(
      planningAction?.amountInCents ?? 0,
    );

    totalValue += planningActionValueConvertedInInteger;

    return totalValue;
  }, 0);

  return <Text textStyle="action3">{`R$ ${formatPrice(totalPlanningBudgeValue)}`}</Text>;
};
