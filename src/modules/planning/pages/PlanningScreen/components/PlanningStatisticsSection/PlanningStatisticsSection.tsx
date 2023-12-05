import { Flex, Grid, HStack, Skeleton, Text } from '@chakra-ui/react';
import { useSession } from 'next-auth/react';

import { StatCard } from '@/components';
import { useGetPlanningStatistics } from '@/modules/planning/api';
import { centsToCompactValue } from '@/utils';

export const PlanningStatisticsSection = () => {
  const session = useSession();
  const userId = session.data?.user.id as number;

  const { data: dataGetPlanningStatistics, isLoading: isLoadingDataGetPlanningStatistics } =
    useGetPlanningStatistics(
      {
        userId,
      },
      {
        enabled: Boolean(userId),
      },
    );
  const summary = dataGetPlanningStatistics?.data?.[0]?.planning_summary ?? null;

  const plannedActions = summary?.planned_actions ?? 0;

  const plannedKit = centsToCompactValue(summary?.farmk_kit_in_cents ?? 0);
  const plannedRelationship = centsToCompactValue(summary?.relationship_action_in_cents ?? 0);
  const plannedTask = centsToCompactValue(summary?.farm_task_in_cents ?? 0);
  const planningValue = centsToCompactValue(summary?.planned_budget_in_cents ?? 0);
  const totalValue = centsToCompactValue(summary?.total_budget_in_cents ?? 0);

  return (
    <Grid
      as="section"
      w="full"
      gridTemplateAreas={`
      "stat1 stat2 stat2"
      "stat3 stat4 stat5"
    `}
      gridTemplateColumns="repeat(3, 1fr)"
      gap="1.6rem"
    >
      <StatCard
        value={plannedActions}
        label="Ações planejadas"
        gridArea="stat1"
        isLoading={isLoadingDataGetPlanningStatistics}
        skeletonStyles={{ w: '4rem' }}
      />

      <Flex layerStyle="card" p="2.4rem" align="center" justify="space-between" gridArea="stat2">
        <Text textStyle="body3" color="text.footnote">
          Planejado / total
        </Text>

        {isLoadingDataGetPlanningStatistics ? (
          <HStack>
            <Skeleton h="3rem" w="10rem" />
            <Skeleton h="3rem" w="12rem" />
          </HStack>
        ) : (
          <Text textStyle="h4" textTransform="uppercase">
            {`R$ ${planningValue}`} /{' '}
            <Text as="span" fontWeight="normal">
              {`R$ ${totalValue}`}
            </Text>
          </Text>
        )}
      </Flex>
      <StatCard
        value={`R$ ${plannedKit}`}
        label="Ações de enxoval"
        gridArea="stat3"
        isLoading={isLoadingDataGetPlanningStatistics}
      />
      <StatCard
        value={`R$ ${plannedRelationship}`}
        label="Ações de relacionamento"
        gridArea="stat4"
        labelStyles={{ maxW: '12rem' }}
        isLoading={isLoadingDataGetPlanningStatistics}
      />
      <StatCard
        value={`R$ ${plannedTask}`}
        label="Ações de campo"
        gridArea="stat5"
        isLoading={isLoadingDataGetPlanningStatistics}
      />
    </Grid>
  );
};
