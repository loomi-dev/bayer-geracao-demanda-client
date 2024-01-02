import { Badge } from '@chakra-ui/react';

import { PlanningActionStatus, PlanningActionValues } from '@/types';

type SegmentProps = {
  status: PlanningActionType;
};

export const Segment = ({ status }: SegmentProps) => (
  <Badge variant={PlanningActionStatus[status]}>{PlanningActionValues[status]}</Badge>
);
