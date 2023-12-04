import { Badge, Text } from '@chakra-ui/react';

type PlanningActionTypeColumnProps = {
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

export const PlanningActionTypeColumn = ({ type }: PlanningActionTypeColumnProps) => (
  <>
    {type ? (
      <Badge variant={PlanningActionStatus[type]}>{PlanningActionValue[type]}</Badge>
    ) : (
      <Text>-</Text>
    )}
  </>
);
