import { HStack, Button, Text } from '@chakra-ui/react';
import React from 'react';

import { AddInsideCircleIcon, CircleIcon, DynamicTable } from '@/components';
import { formatPrice } from '@/utils';

import { planningActionsColumns } from './PlanningActionsTable.columns';

export const PlanningActionsTable = () => (
  <DynamicTable<any> columns={planningActionsColumns} data={[]}>
    <HStack
      justify="space-between"
      px="2.4rem"
      borderTop="1px solid"
      borderColor="opacity.white.1.40"
      mb="2rem"
      pt="2rem"
    >
      <Text textStyle="action3" textTransform="uppercase" lineHeight="0">
        Total{' '}
        <Text as="span" textStyle="action1" color="surface.brand" ml="2.3rem">
          {`R$ ${formatPrice(0)}`}
        </Text>
      </Text>

      <Button
        variant="third"
        pl="2.4rem"
        pr="0"
        rightIcon={
          <CircleIcon>
            <AddInsideCircleIcon />
          </CircleIcon>
        }
      >
        <Text as="span" w="full" align="center">
          Nova ação
        </Text>
      </Button>
    </HStack>
  </DynamicTable>
);
