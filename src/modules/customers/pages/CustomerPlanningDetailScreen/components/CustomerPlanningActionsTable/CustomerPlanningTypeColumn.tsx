import { Badge, Text } from '@chakra-ui/react';

type CustomerPlanningTypeColumnProps = {
  type?: PlanningActionType;
};

enum PlanningActionValue {
  'farm_task' = 'Ação de campo',
  'farm_kit' = 'Ação de enxoval',
  'relationship_task' = 'Ação de relacionamento',
}

enum PlanningActionStatus {
  'farm_task' = 'table_error',
  'farm_kit' = 'table_warning',
  'relationship_task' = 'table_success',
}

export const CustomerPlanningTypeColumn = ({ type }: CustomerPlanningTypeColumnProps) => (
  <>
    {type ? (
      <Badge variant={PlanningActionStatus[type]} w="15rem">
        {PlanningActionValue[type]}
      </Badge>
    ) : (
      <Text>-</Text>
    )}
  </>
);
