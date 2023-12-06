export const getTotalPlanningBudgetValue = (planningActions: PlanningAction[]): number => {
  const totalPlanningBudgetValue = planningActions.reduce((totalValue, planningAction) => {
    const planningActionValue = planningAction?.amountInCents ?? 0;

    totalValue += planningActionValue;

    return totalValue;
  }, 0);

  return totalPlanningBudgetValue;
};
