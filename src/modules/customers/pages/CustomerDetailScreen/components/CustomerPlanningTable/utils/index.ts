import dayjs from 'dayjs';

const getMostRecentDate = (date1: string, date2: string) => {
  const differenceFromTodayToDate1 = dayjs().diff((dayjs(date1), 'day'));
  const differenteFromTodayToDate2 = dayjs().diff((dayjs(date2), 'day'));
  const mostRecentDate = differenceFromTodayToDate1 < differenteFromTodayToDate2 ? date1 : date2;
  return mostRecentDate;
};

export const getPendingPlanningsSummary = (plannings: Planning[]) => {
  let currentMostRecentPlanningDate = '';

  return plannings.reduce(
    ({ quantity, mostRecentPendingPlanningId }, planning) => {
      if (planning.historic?.at(-1)?.status === 'ready_for_evaluation') {
        if (!currentMostRecentPlanningDate) currentMostRecentPlanningDate = planning.updatedAt;

        const mostRecentDate = getMostRecentDate(currentMostRecentPlanningDate, planning.updatedAt);

        mostRecentPendingPlanningId =
          mostRecentDate === currentMostRecentPlanningDate
            ? mostRecentPendingPlanningId
            : planning.id;

        quantity++;
      }

      return { quantity, mostRecentPendingPlanningId };
    },
    { quantity: 0, mostRecentPendingPlanningId: 0 },
  );
};
