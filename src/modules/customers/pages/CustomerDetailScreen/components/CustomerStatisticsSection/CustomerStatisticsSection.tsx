import { Grid } from '@chakra-ui/react';

import { GridCard } from '@/components';
import { centsToCompactValue } from '@/utils';

type CustomerStatisticsSectionProps = {
  isLoading: boolean;
  summary?: PlanningSummary;
};
export const CustomerStatisticsSection = ({
  summary,
  isLoading,
}: CustomerStatisticsSectionProps) => (
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
    <GridCard
      value={centsToCompactValue(summary?.planned_actions ?? 0)}
      label="Ações planejadas"
      gridArea="stat2"
      skeletonStyles={{ w: '4rem' }}
      isLoading={isLoading}
    />
    <GridCard
      value={`R$ ${centsToCompactValue(summary?.farmk_kit_in_cents ?? 0)}`}
      label="Ações de enxoval"
      gridArea="stat3"
      isLoading={isLoading}
    />
    <GridCard
      value={`R$ ${centsToCompactValue(summary?.relationship_action_in_cents ?? 0)}`}
      label="Ações de relacionamento"
      gridArea="stat4"
      labelStyles={{ maxW: '12rem' }}
      isLoading={isLoading}
    />
    <GridCard
      value={`R$ ${centsToCompactValue(summary?.farm_task_in_cents ?? 0)}`}
      label="Ações de campo"
      gridArea="stat5"
    />
  </Grid>
);
