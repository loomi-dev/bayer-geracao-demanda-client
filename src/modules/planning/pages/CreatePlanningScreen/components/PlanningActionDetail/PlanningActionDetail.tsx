import { Grid, GridItem, Text } from '@chakra-ui/react';

import { DetailItem } from './DetailItem';

type PlanningActionDetailProps = {
  title: string;
  type: string;
  investment: string;
  description: string;
};

export const PlanningActionDetail = ({
  title,
  type,
  investment,
  description,
}: PlanningActionDetailProps) => (
  <Grid gridTemplateColumns="repeat(2, 1fr)" borderRadius="1.6rem" bg="surface.primary">
    <GridItem
      colSpan={2}
      borderBottom="1px solid"
      borderColor="opacity.black.0.08"
      py="3.2rem"
      px="3rem"
    >
      <Text textStyle="action1">{title}</Text>
    </GridItem>

    <GridItem>
      <DetailItem title="Tipo da ação" description={type} />
    </GridItem>
    <GridItem borderLeft="1px solid" borderColor="opacity.black.0.08">
      <DetailItem title="Investimento da ação" description={investment} />
    </GridItem>

    {description && (
      <GridItem colSpan={2} borderTop="1px solid" borderColor="opacity.black.0.08">
        <DetailItem title="Descrição" description={description} />
      </GridItem>
    )}
  </Grid>
);
