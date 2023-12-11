import { Badge, Button, Center, Grid, GridItem, Text } from '@chakra-ui/react';

import { PlanningActionStatus, PlanningActionValues } from '@/types';
import { formatPrice } from '@/utils';

type HistoricPlanningActionRowProps = Pick<
  PlanningAction,
  'title' | 'type' | 'amountInCents' | 'status'
>;

export const HistoricPlanningActionRow = ({
  title,
  type,
  amountInCents,
  status,
}: HistoricPlanningActionRowProps) => (
  <Grid w="full" templateRows="repeat(1, 1fr)" templateColumns="repeat(4, 1fr)">
    <GridItem>
      <Center h="100%" justifyContent="flex-start">
        <Text textStyle="caption2" textAlign="center">
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

    <GridItem>
      <Center h="100%">
        {status !== 'rejected' && (
          <Button size="2xs" variant="fifth" px="0.8rem">
            <Text fontSize="1rem" fontWeight="bold" color="text.footnote">
              Recusar ação
            </Text>
          </Button>
        )}
      </Center>
    </GridItem>
  </Grid>
);
