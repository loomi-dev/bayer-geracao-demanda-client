import { Flex } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import React from 'react';

import { useGetPlanningActionsStatistics } from '@/api';
import { StatCard } from '@/modules/planning/components';
import { centsToCompactValue } from '@/utils';

export const PlanningActionsStatistics = () => {
  const { query } = useRouter();
  const planningId = Number(query?.planning_id);

  const { data: dataPlanningActionsStatistics, isLoading: isLoadingDataPlanningActionsStatistics } =
    useGetPlanningActionsStatistics({ planningId }, { enabled: Boolean(planningId) });

  const actionsKit = centsToCompactValue(
    dataPlanningActionsStatistics?.data.metric?.farm_kit_in_cents ?? 0,
  );
  const actionsRelationship = centsToCompactValue(
    Number(dataPlanningActionsStatistics?.data.metric?.relationship_task_in_cent ?? 0),
  );
  const actionsTask = centsToCompactValue(
    Number(dataPlanningActionsStatistics?.data.metric?.farm_task_in_cents ?? 0),
  );

  return (
    <Flex w="full" gap="1.6rem">
      <StatCard
        value={`R$ ${actionsKit}`}
        label="Ações de enxoval"
        flex="1"
        justify="space-between"
        labelStyles={{ maxW: '12rem' }}
        isLoading={isLoadingDataPlanningActionsStatistics}
      />
      <StatCard
        value={`R$ ${actionsRelationship}`}
        label="Ações de relacionamento"
        flex="1"
        justify="space-between"
        labelStyles={{ maxW: '8rem' }}
        isLoading={isLoadingDataPlanningActionsStatistics}
      />
      <StatCard
        value={`R$ ${actionsTask}`}
        label="Ações de campo"
        flex="1"
        justify="space-between"
        labelStyles={{ maxW: '12rem' }}
        isLoading={isLoadingDataPlanningActionsStatistics}
      />
    </Flex>
  );
};
