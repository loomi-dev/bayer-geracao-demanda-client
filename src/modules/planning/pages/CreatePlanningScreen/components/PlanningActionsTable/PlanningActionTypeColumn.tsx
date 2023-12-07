import { Badge, Text } from '@chakra-ui/react';

import { PlanningActionStatus, PlanningActionValues } from '@/types';

type PlanningActionTypeColumnProps = {
  type?: PlanningActionType;
};

export const PlanningActionTypeColumn = ({ type }: PlanningActionTypeColumnProps) => (
  <>
    {type ? (
      <Badge variant={PlanningActionStatus[type]}>{PlanningActionValues[type]}</Badge>
    ) : (
      <Text>-</Text>
    )}
  </>
);
