import { Badge, Text } from '@chakra-ui/react';

import { PlanningActionStatus, PlanningActionValues } from '@/types';

type CustomerPlanningTypeColumnProps = {
  type?: PlanningActionType;
};

export const CustomerPlanningTypeColumn = ({ type }: CustomerPlanningTypeColumnProps) => (
  <>
    {type ? (
      <Badge variant={PlanningActionStatus[type]} w="15rem">
        {PlanningActionValues[type]}
      </Badge>
    ) : (
      <Text>-</Text>
    )}
  </>
);
