import { Grid, GridItem, HStack, Text } from '@chakra-ui/react';

import { Balance, StatCard } from '@/components';
import { centsToCompactValue } from '@/utils';

export const DashboardScreen = () => (
  <HStack w="full" flexWrap="wrap" alignItems="flex-start" spacing="4rem">
    <Balance.Container farmerId={1} flex="1" h="100%" maxH="25rem" justify="center" minW="30rem">
      <Balance.Label>você ainda possui</Balance.Label>
      <Balance.Value>R$ 0,00</Balance.Value>
      <Balance.ExpirationDate>
        Em recursos para solicitar ações <br /> Válido{' '}
        <Text as="strong" color="text.primary">
          até 20/10/2024
        </Text>
      </Balance.ExpirationDate>
    </Balance.Container>

    <Grid gridTemplateColumns="repeat(3, 1fr)" flex="3" gap="1.6rem">
      <GridItem>
        <StatCard
          label="Ações planejadas"
          value={0}
          valueStyles={{
            fontSize: '4rem',
          }}
        />
      </GridItem>

      <GridItem colSpan={2}>
        <StatCard
          label="Planejado / total"
          value={`R$ ${centsToCompactValue(0)} / R$ ${centsToCompactValue(0)}`}
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
          value={`R$ ${centsToCompactValue(0)}`}
          valueStyles={{
            fontSize: '4rem',
          }}
        />
      </GridItem>

      <GridItem>
        <StatCard
          label="Ações de relacionamento"
          value={`R$ ${centsToCompactValue(0)}`}
          labelStyles={{ maxW: '8rem' }}
          valueStyles={{
            fontSize: '4rem',
          }}
        />
      </GridItem>

      <GridItem>
        <StatCard
          label="Ações de campo"
          value={`R$ ${centsToCompactValue(0)}`}
          valueStyles={{
            fontSize: '4rem',
          }}
        />
      </GridItem>
    </Grid>
  </HStack>
);
