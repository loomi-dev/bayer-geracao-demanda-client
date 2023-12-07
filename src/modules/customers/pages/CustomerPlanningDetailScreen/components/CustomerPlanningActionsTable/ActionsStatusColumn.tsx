import { Badge } from '@chakra-ui/react';

import { PlanningActionStatusValue, PlanningActionStatusVariant } from '@/types';

type ActionStatusColumnProps = {
  status?: string;
};

export const ActionStatusColumn = ({ status = 'not_evaluated' }: ActionStatusColumnProps) => (
  <Badge variant={PlanningActionStatusVariant[status]} w="15rem">
    {PlanningActionStatusValue[status]}
  </Badge>
);
