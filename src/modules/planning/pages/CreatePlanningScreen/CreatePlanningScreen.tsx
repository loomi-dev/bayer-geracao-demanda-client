import { Text, VStack } from '@chakra-ui/react';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';

import { useGetPlanningStatus } from '@/api';

import {
  CreatePlanningBalance,
  CreatePlanningStatusSection,
  CreatePlanningStatusSectionSkeleton,
  PlanningActionsStatistics,
  PlanningActionsTable,
} from './components';

const DynamicCreatePlanningActionSection = dynamic(async () => {
  const { CreatePlanningActionSection } = await import('./components/CreatePlanningActionSection');

  return CreatePlanningActionSection;
});

export const CreatePlanningScreen = () => {
  const { query } = useRouter();
  const planningId = Number(query?.planning_id);

  const { data: dataPlanningStatus, isLoading: isLoadingGetPlanningStatus } = useGetPlanningStatus(
    { planningId },
    {
      enabled: Boolean(planningId),
    },
  );

  const planningStatus = dataPlanningStatus?.data?.historic?.at(-1)?.status ?? 'default';

  return (
    <>
      {isLoadingGetPlanningStatus ? (
        <CreatePlanningStatusSectionSkeleton />
      ) : (
        <CreatePlanningStatusSection planningStatus={planningStatus} />
      )}

      <CreatePlanningBalance planningStatus={planningStatus} />

      <VStack w="full" align="flex-start" gap="1.6rem">
        <Text textStyle="h4">Ações</Text>

        <PlanningActionsStatistics />
        <PlanningActionsTable planningStatus={planningStatus} />
      </VStack>

      {planningStatus !== 'default' && !isLoadingGetPlanningStatus && (
        <DynamicCreatePlanningActionSection />
      )}
    </>
  );
};
