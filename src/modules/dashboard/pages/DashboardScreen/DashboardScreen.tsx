import { Grid, GridItem, HStack } from '@chakra-ui/react';

import { Balance, StatCard } from '@/components';

export const DashboardScreen = () => (
  <HStack w="full" alignItems="flex-start" spacing="4rem">
    <Balance.Container farmerId={1} flex="1" h="100%" justify="center">
      <Balance.Label>você ainda possui</Balance.Label>
      <Balance.Value>$ 20.000,00</Balance.Value>
      <Balance.ExpirationDate>
        Em recursos para solicitar ações Válido até 20/10/2024
      </Balance.ExpirationDate>
    </Balance.Container>

    <Grid gridTemplateColumns="repeat(3, 1fr)" flex="3" gap="1.6rem">
      <GridItem>
        <StatCard
          label="Ações planejadas"
          value={12}
          valueStyles={{
            fontSize: '4rem',
          }}
        />
      </GridItem>

      <GridItem colSpan={2}>
        <StatCard
          label="Planejado / total"
          value="$1.2M"
          justify="space-between"
          valueStyles={{
            fontSize: '4rem',
            order: 2,
          }}
          labelStyles={{
            order: 1,
            maxW: 'initial',
          }}
        />
      </GridItem>

      <GridItem>
        <StatCard
          label="Ações de enxoval"
          value="$1.2M"
          valueStyles={{
            fontSize: '4rem',
          }}
        />
      </GridItem>

      <GridItem>
        <StatCard
          label="Ações de relacionamento"
          value="$ 4.3M"
          labelStyles={{ maxW: '8rem' }}
          valueStyles={{
            fontSize: '4rem',
          }}
        />
      </GridItem>

      <GridItem>
        <StatCard
          label="Ações de campo"
          value="$ 4.3M"
          valueStyles={{
            fontSize: '4rem',
          }}
        />
      </GridItem>
    </Grid>
  </HStack>
);
