import { Flex, Grid, HStack, Skeleton, Text } from '@chakra-ui/react';
import { useSession } from 'next-auth/react';

import { useGetPlanningStatistics } from '@/api';
import { StatCard } from '@/components';
import { centsToCompactValue } from '@/utils';

export const PlanningStatisticsSection = () => {
  const session = useSession();
  const farmerId = session.data?.user?.farmer?.id as number;

  const {
    data: dataGetPlanningStatistics,
    isLoading: isLoadingDataGetPlanningStatistics,
    isFetching: isFetchingDataGetPlanningStatistics,
  } = useGetPlanningStatistics(
    {
      farmerId,
    },
    {
      enabled: Boolean(farmerId),
    },
  );
  const summary = dataGetPlanningStatistics?.data?.[0]?.planning_summary ?? null;

  const plannedActions = summary?.planned_actions ?? 0;
  const isLoadingPlanningStatistics =
    isLoadingDataGetPlanningStatistics || isFetchingDataGetPlanningStatistics;

  const plannedKit = centsToCompactValue(Number(summary?.farm_kit_in_cents ?? 0));
  const plannedRelationship = centsToCompactValue(
    Number(summary?.relationship_action_in_cents ?? 0),
  );
  const plannedTask = centsToCompactValue(Number(summary?.farm_task_in_cents ?? 0));
  const planningValue = centsToCompactValue(Number(summary?.planned_budget_in_cents ?? 0));
  const totalValue = centsToCompactValue(Number(summary?.total_budget_in_cents ?? 0));

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
        isLoading={isLoadingPlanningStatistics}
        skeletonStyles={{ w: '4rem' }}
      />

      <Flex layerStyle="card" p="2.4rem" align="center" justify="space-between" gridArea="stat2">
        <Text textStyle="body3" color="text.footnote">
          Planejado / total
        </Text>

        {isLoadingPlanningStatistics ? (
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
        isLoading={isLoadingPlanningStatistics}
      />
      <StatCard
        value={`R$ ${plannedRelationship}`}
        label="Ações de relacionamento"
        gridArea="stat4"
        labelStyles={{ maxW: '12rem' }}
        isLoading={isLoadingPlanningStatistics}
      />
      <StatCard
        value={`R$ ${plannedTask}`}
        label="Ações de campo"
        gridArea="stat5"
        isLoading={isLoadingPlanningStatistics}
      />
    </Grid>
  );
};
