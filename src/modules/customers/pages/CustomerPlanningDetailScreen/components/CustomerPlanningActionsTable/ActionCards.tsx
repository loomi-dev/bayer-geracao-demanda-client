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
}: ActionCardsProps) => (
  <Grid
    as="section"
    w="full"
    gridTemplateColumns="repeat(3,1fr)"
    gridTemplateRows="repeat(1,1fr)"
    gap="1rem"
  >
    <GridItem>
      <StatCard
        value={centsToCompactValue(farmKitValue)}
        label="Ações de enxoval"
        isLoading={isLoading}
        labelStyles={{ maxWidth: 'initial' }}
        gap="5rem"
      />
    </GridItem>
    <GridItem>
      <StatCard
        value={centsToCompactValue(relationshipTaskValue)}
        label="Ações de relacionamento"
        isLoading={isLoading}
        labelStyles={{ maxWidth: 'initial' }}
        gap="5rem"
      />
    </GridItem>
    <GridItem>
      <StatCard
        value={centsToCompactValue(farmTaskValue)}
        label="Ações de campo"
        isLoading={isLoading}
        labelStyles={{ maxWidth: 'initial' }}
        gap="5rem"
      />
    </GridItem>
  </Grid>
);
