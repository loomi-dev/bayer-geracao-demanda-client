import { Grid, GridItem } from '@chakra-ui/react';

import { HistoricItemTableRow } from './HistoricItemTableRow';

type HistoricItemTableProps = {
  actions: PlanningAction[];
};
export const HistoricItemTable = ({ actions }: HistoricItemTableProps) => (
  <Grid w="full" gap="2rem" templateColumns="repeat(1,1fr)" templateRows="repeat(1,1fr)">
    {actions.map((action) => (
      <GridItem key={action.id}>
        <HistoricItemTableRow
          title={action.title}
          value={action.amountInCents ?? 0}
          type={action.type ?? ''}
          status={action.status ?? ''}
        />
      </GridItem>
    ))}
  </Grid>
);
