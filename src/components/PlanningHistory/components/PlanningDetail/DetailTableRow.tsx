import { Badge, Button, Center, Grid, GridItem, Text } from '@chakra-ui/react';

import { PlanningActionStatus, PlanningActionValues } from '@/types';
import { formatPrice } from '@/utils';

export type DetailTableRowProps = {
  title?: string;
  type: string;
  value: number;
  status: string;
};

export const DetailTableRow = ({ title, type, value, status }: DetailTableRowProps) => (
  <Grid w="full" templateRows={`repeat(1,1fr)`} templateColumns="repeat(4,1fr)">
    <GridItem>
      <Center h="100%">
        <Text textStyle="caption2">{title}</Text>
      </Center>
    </GridItem>
    <GridItem>
      <Center h="100%">
        {type ? (
          <Badge variant={PlanningActionStatus[type]} w="15rem" textAlign="center">
            {PlanningActionValues[type]}
          </Badge>
        ) : (
          '-'
        )}
      </Center>
    </GridItem>
    <GridItem>
      <Center h="100%">
        <Text textStyle="caption3" color="green.600">
          R$ {formatPrice(value)}
        </Text>
      </Center>
    </GridItem>
    <GridItem>
      <Center h="100%">
        {status !== 'rejected' && (
          <Button size="sm" variant="fifth">
            Recusar ação
          </Button>
        )}
      </Center>
    </GridItem>
  </Grid>
);
