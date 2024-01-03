import { Grid, GridItem } from '@chakra-ui/react';

import { FinancialCard } from './FinancialCard';

export const FinancialSection = () => (
  <Grid w="full" templateRows="repeat(1, 1fr)" gap="1rem" templateColumns="repeat(4, 1fr)">
    <GridItem>
      <FinancialCard
        title="recurso gd inicial"
        value={2000000000}
        description="Valor atribuído para os multiplicadores na safra atual"
      />
    </GridItem>
    <GridItem>
      <FinancialCard
        title="recurso gd final"
        value={2000000000}
        description="Recurso que o multiplicador enviou para aprovação em seu planejamento"
      />
    </GridItem>
    <GridItem>
      <FinancialCard
        title="comprovado"
        value={2000000000}
        description="Quanto do recurso planejado foi comprovado pelo multiplicador"
      />
    </GridItem>
    <GridItem>
      <FinancialCard
        title="Saldo"
        value={2000000000}
        description="Diferença entre o recurso final e inicial"
      />
    </GridItem>
  </Grid>
);
