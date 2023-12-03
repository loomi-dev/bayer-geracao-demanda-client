import { centsToInteger } from './centsToInteger';

export const getTotalPlanningBudgetValue = (planningActions: PlanningAction[]): number => {
  const totalPlanningBudgetValue = planningActions.reduce((totalValue, planningAction) => {
    const planningActionValueConvertedInInteger = centsToInteger(
      planningAction?.amountInCents ?? 0,
    );

    totalValue += planningActionValueConvertedInInteger;

    return totalValue;
  }, 0);

  return totalPlanningBudgetValue;
};
