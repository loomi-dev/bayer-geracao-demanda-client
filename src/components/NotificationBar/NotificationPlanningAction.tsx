import { HStack, Text } from '@chakra-ui/react';

import { PlanningActionValues } from '@/types';

type NotificationPlanningActionProps = {
  type: PlanningActionType;
  value: string;
};

export const NotificationPlanningAction = ({ type, value }: NotificationPlanningActionProps) => (
  <HStack w="full" justify="space-between">
    <Text textStyle="caption5">{PlanningActionValues[type]}</Text>

    <Text textStyle="action4">{value}</Text>
  </HStack>
);
