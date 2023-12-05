import { Grid, GridItem } from '@chakra-ui/react';
import { useRouter } from 'next/router';

import { useGetPlanningActions } from '@/api';
import { StatCard } from '@/components';
import { centsToCompactValue } from '@/utils';

export const ActionCards = () => {
  const { query } = useRouter();
  const planningId = Number(query.planning_id);
  const { data, isLoading } = useGetPlanningActions({ planningId });
  const actions = data?.data ?? [];

  return (
    <Grid
      as="section"
      w="full"
      gridTemplateColumns="repeat(3,1fr)"
      gridTemplateRows="repeat(1,1fr)"
      gap="1rem"
    >
      {actions.length
        ? actions.map((action) => (
            <GridItem key={action.id}>
              <StatCard
                value={centsToCompactValue(action.amountInCents ?? 0)}
                label={action.title ?? ''}
                isLoading={isLoading}
              />
            </GridItem>
          ))
        : Array.from({ length: 3 }).map((item, index) => (
            <StatCard value={0} label="" key={index} isLoading={isLoading} />
          ))}
    </Grid>
  );
};
