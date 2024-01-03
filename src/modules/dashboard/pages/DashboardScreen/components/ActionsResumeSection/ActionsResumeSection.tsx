import { Grid, GridItem } from '@chakra-ui/react';

import { StatCard } from '@/components';

export const ActionsResumeSection = () => (
  <Grid w="full" templateRows="repeat(2, 1fr)" gap="1rem" templateColumns="repeat(3, 1fr)">
    <GridItem colSpan={3}>
      <StatCard label="Ações planejadas" value={12} valueStyles={{ textStyle: 'h2' }} />
    </GridItem>
    <GridItem>
      <StatCard label="Ações de enxoval" value={12} valueStyles={{ textStyle: 'h2' }} />
    </GridItem>
    <GridItem>
      <StatCard
        label="Ações de relacionamento"
        value={12}
        valueStyles={{ textStyle: 'h2' }}
        labelStyles={{ minW: '12rem' }}
      />
    </GridItem>
    <GridItem>
      <StatCard label="Ações de campo" value={12} valueStyles={{ textStyle: 'h2' }} />
    </GridItem>
  </Grid>
);
