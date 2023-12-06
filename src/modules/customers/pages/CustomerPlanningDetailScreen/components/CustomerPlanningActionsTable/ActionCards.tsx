import { Grid, GridItem } from '@chakra-ui/react';

import { StatCard } from '@/components';
import { centsToCompactValue } from '@/utils';

type ActionCardsProps = {
  farmKitValue: number;
  relationshipTaskValue: number;
  farmTaskValue: number;
  isLoading: boolean;
};
export const ActionCards = ({
  farmKitValue,
  relationshipTaskValue,
  farmTaskValue,
  isLoading,
}: ActionCardsProps) => {
  const metrics = [
    { label: 'Ações de enxoval', value: farmKitValue },
    { label: 'Ações de relacionamento', value: relationshipTaskValue },
    { label: 'Ações de campo', value: farmTaskValue },
  ];
  return (
    <Grid
      as="section"
      w="full"
      gridTemplateColumns="repeat(3,1fr)"
      gridTemplateRows="repeat(1,1fr)"
      gap="1rem"
    >
      {metrics.map((metric) => (
        <GridItem key={metric.label}>
          <StatCard
            label={metric.label}
            value={`R$ ${centsToCompactValue(metric.value)}`}
            isLoading={isLoading}
            labelStyles={{ maxWidth: 'initial' }}
          />
        </GridItem>
      ))}
    </Grid>
  );
};
