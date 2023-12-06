import { Badge, Text } from '@chakra-ui/react';

import { PlanningActionStatus, PlanningActionValues } from '@/types';

type DetailTableStatusColumnProps = {
  type?: PlanningActionType;
};

export const DetailTableStatusColumn = ({ type }: DetailTableStatusColumnProps) => (
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
