import { Grid, GridItem } from '@chakra-ui/react';

import { DetailTableRow } from './DetailTableRow';

type DetailTableProps = {
  data: PlanningAction[];
};
export const DetailTable = ({ data }: DetailTableProps) => (
  <Grid w="full" gap="2rem" templateColumns="repeat(1,1fr)" templateRows="repeat(1,1fr)">
    {data.map((action) => (
      <GridItem key={action.id}>
        <DetailTableRow
          title={action.title}
          value={action.amountInCents ?? 0}
          type={action.type ?? ''}
          status={action.status ?? ''}
        />
      </GridItem>
    ))}
  </Grid>
);
