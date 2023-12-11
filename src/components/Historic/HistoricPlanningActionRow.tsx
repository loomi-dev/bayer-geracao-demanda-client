import { Badge, Center, Grid, GridItem, Text } from '@chakra-ui/react';

import { PlanningActionStatus, PlanningActionValues } from '@/types';
import { formatPrice } from '@/utils';

type HistoricPlanningActionRowProps = Pick<PlanningAction, 'title' | 'type' | 'amountInCents'>;

export const HistoricPlanningActionRow = ({
  title,
  type,
  amountInCents,
}: HistoricPlanningActionRowProps) => (
  <Grid w="full" templateRows="repeat(1, 1fr)" templateColumns="repeat(3, 1fr)">
    <GridItem>
      <Center h="100%" justifyContent="flex-start">
        <Text textStyle="caption2" textAlign="left">
          {title}
        </Text>
      </Center>
    </GridItem>

    <GridItem>
      <Center h="100%">
        {type ? (
          <Badge variant={PlanningActionStatus[type]} w="15.3rem" textAlign="center">
            {PlanningActionValues[type]}
          </Badge>
        ) : (
          '-'
        )}
      </Center>
    </GridItem>

    <GridItem>
      <Center h="100%">
        <Text textStyle="action3" color="text.primary">
          R$ {formatPrice(amountInCents)}
        </Text>
      </Center>
    </GridItem>
  </Grid>
);
