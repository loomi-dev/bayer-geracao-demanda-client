import { Grid, GridItem } from '@chakra-ui/react';

import { FinancialCard } from './FinancialCard';

type FinancialSectionProps = {
  data: {
    initialResource: number;
    finalResource: number;
    balance: number;
    proven: number;
  };
  isLoading: boolean;
};
export const FinancialSection = ({ data, isLoading }: FinancialSectionProps) => (
  <Grid w="full" templateRows="repeat(1, 1fr)" gap="1rem" templateColumns="repeat(4, 1fr)">
    <GridItem>
      <FinancialCard
        isLoading={isLoading}
        title="recurso gd inicial"
        value={data.initialResource}
        description="Valor atribuído para os multiplicadores na safra atual"
      />
    </GridItem>
    <GridItem>
      <FinancialCard
        isLoading={isLoading}
        title="recurso gd final"
        value={data.finalResource}
        description="Recurso que o multiplicador enviou para aprovação em seu planejamento"
      />
    </GridItem>
    <GridItem>
      <FinancialCard
        isLoading={isLoading}
        title="comprovado"
        value={data.proven}
        description="Quanto do recurso planejado foi comprovado pelo multiplicador"
      />
    </GridItem>
    <GridItem>
      <FinancialCard
        isLoading={isLoading}
        title="Saldo"
        value={data.balance}
        description="Diferença entre o recurso final e inicial"
      />
    </GridItem>
  </Grid>
);
