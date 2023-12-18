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
      if (!currentMostRecentPlanningDate) currentMostRecentPlanningDate = planning.createdAt;

      if (planning.historic?.at(-1)?.status === 'ready_for_evaluation') {
        quantity++;
      }

      const mostRecentDate = getMostRecentDate(currentMostRecentPlanningDate, planning.createdAt);

      mostRecentPendingPlanningId =
        mostRecentDate === currentMostRecentPlanningDate
          ? mostRecentPendingPlanningId
          : planning.id;

      return { quantity, mostRecentPendingPlanningId };
    },
    { quantity: 0, mostRecentPendingPlanningId: 0 },
  );
};
