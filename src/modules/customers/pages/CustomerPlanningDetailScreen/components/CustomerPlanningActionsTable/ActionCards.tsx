import { Grid, GridItem } from '@chakra-ui/react';
import { useRouter } from 'next/router';

import { useGetPlanningActionsStatistics } from '@/api';
import { StatCard } from '@/components';
import { centsToCompactValue } from '@/utils';

export const ActionCards = () => {
  const { query } = useRouter();
  const planningId = Number(query.planning_id);
  const { data, isLoading } = useGetPlanningActionsStatistics({ planningId });

  const farmKitValue = centsToCompactValue(Number(data?.data?.metric?.farm_kit_in_cents ?? 0));
  const relationshipTaskValue = centsToCompactValue(
    Number(data?.data?.metric?.relationship_task_in_cent ?? 0),
  );
  const farmTaskValue = centsToCompactValue(Number(data?.data?.metric?.farm_task_in_cents ?? 0));

  return (
    <Grid
      as="section"
      w="full"
      gridTemplateColumns="repeat(3,1fr)"
      gridTemplateRows="repeat(1,1fr)"
      gap="1rem"
    >
      <GridItem>
        <StatCard
          value={farmKitValue}
          label="Ações de enxoval"
          isLoading={isLoading}
          labelStyles={{ maxWidth: 'initial' }}
          gap="5rem"
        />
      </GridItem>
      <GridItem>
        <StatCard
          value={relationshipTaskValue}
          label="Ações de relacionamento"
          isLoading={isLoading}
          labelStyles={{ maxWidth: 'initial' }}
          gap="5rem"
        />
      </GridItem>
      <GridItem>
        <StatCard
          value={farmTaskValue}
          label="Ações de campo"
          isLoading={isLoading}
          labelStyles={{ maxWidth: 'initial' }}
          gap="5rem"
        />
      </GridItem>
    </Grid>
  );
};
