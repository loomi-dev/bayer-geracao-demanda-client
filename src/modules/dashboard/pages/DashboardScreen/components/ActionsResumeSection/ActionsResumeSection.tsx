import { Grid, GridItem } from '@chakra-ui/react';

import { StatCard } from '@/components';
import { centsToCompactValue } from '@/utils';

type ActionsResumeSectionProps = {
  data: {
    plannedActionsQuantity: number;
    farmKitTask: number;
    relationshipTask: number;
    farmTask: number;
  };
  isLoading: boolean;
};
export const ActionsResumeSection = ({ data, isLoading }: ActionsResumeSectionProps) => (
  <Grid w="full" gap="1.6rem" templateRows="repeat(2, 1fr)" templateColumns="repeat(3, 1fr)">
    <GridItem colSpan={3}>
      <StatCard
        label="Ações planejadas"
        value={data.plannedActionsQuantity}
        valueStyles={{ textStyle: 'h2' }}
        isLoading={isLoading}
      />
    </GridItem>
    <GridItem>
      <StatCard
        label="Ações de enxoval"
        value={`$ ${centsToCompactValue(data.farmKitTask)}`}
        valueStyles={{ textStyle: 'h2' }}
        isLoading={isLoading}
      />
    </GridItem>
    <GridItem>
      <StatCard
        label="Ações de relacionamento"
        value={`$ ${centsToCompactValue(data.relationshipTask)}`}
        valueStyles={{ textStyle: 'h2' }}
        labelStyles={{ minW: '12rem' }}
        isLoading={isLoading}
      />
    </GridItem>
    <GridItem>
      <StatCard
        label="Ações de campo"
        value={`$ ${centsToCompactValue(data.farmTask)}`}
        valueStyles={{ textStyle: 'h2' }}
        isLoading={isLoading}
      />
    </GridItem>
  </Grid>
);
