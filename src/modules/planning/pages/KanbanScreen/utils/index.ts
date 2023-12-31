import { CustomerPlannings } from '@/api';

export const getSectionPlannings = (plannings: CustomerPlannings[]) =>
  plannings.reduce(
    ({ pendingPlannings, acceptedPlannings, refusedPlannings, revalidatedPlannings }, planning) => {
      const planningStatus = planning.historic?.at(-1)?.status;
      const isFirstTimeEvaluating = planning.historic?.length === 1;

      if (planningStatus === 'ready_for_evaluation' && isFirstTimeEvaluating) {
        pendingPlannings.push(planning);
      }
      if (planningStatus === 'ready_for_evaluation' && !isFirstTimeEvaluating) {
        revalidatedPlannings.push(planning);
      }
      if (planningStatus === 'accepted') {
        acceptedPlannings.push(planning);
      }
      if (planningStatus === 'rejected') {
        refusedPlannings.push(planning);
      }
      return { pendingPlannings, acceptedPlannings, revalidatedPlannings, refusedPlannings };
    },
    {
      pendingPlannings: [] as CustomerPlannings[],
      refusedPlannings: [] as CustomerPlannings[],
      acceptedPlannings: [] as CustomerPlannings[],
      revalidatedPlannings: [] as CustomerPlannings[],
    },
  );
