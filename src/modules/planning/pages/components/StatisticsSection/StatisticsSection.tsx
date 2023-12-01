import { Flex, Grid, Text } from '@chakra-ui/react';

import { StatCard } from './StatCard';

export const StatisticsSection = () => (
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
    <StatCard value="12" label="Ações planejadas" gridArea="stat1" />
    <Flex layerStyle="card" p="2.4rem" align="center" justify="space-between" gridArea="stat2">
      <Text textStyle="body3" color="text.footnote">
        Planejado / total
      </Text>

      <Text textStyle="h4">
        $ 4.3M /{' '}
        <Text as="span" fontWeight="normal">
          $ 5.2M
        </Text>
      </Text>
    </Flex>
    <StatCard value="$1.2M" label="Ações de enxoval" gridArea="stat3" />
    <StatCard
      value="$ 4.3M"
      label="Ações de relacionamento"
      gridArea="stat4"
      labelStyles={{ maxW: '12rem' }}
    />
    <StatCard value="$ 4.3M" label="Ações de campo" gridArea="stat5" />
  </Grid>
);
