import { useGetDashboard } from '@/api';

import { ActionsResumeSection, FinancialSection } from './components';

export const DashboardScreen = () => {
  const { data, isLoading } = useGetDashboard();
  const actionsResumeSectionData = {
    plannedActionsQuantity: data?.data.plannedActionsQuantity ?? 0,
    farmKitTask: data?.data.farmKitSumInCents ?? 0,
    relationshipTask: data?.data.relationshipTaskSumInCents ?? 0,
    farmTask: data?.data.farmTaskSumInCents ?? 0,
  };
  return (
    <>
      <FinancialSection />
      <ActionsResumeSection data={actionsResumeSectionData} isLoading={isLoading} />
    </>
  );
};
