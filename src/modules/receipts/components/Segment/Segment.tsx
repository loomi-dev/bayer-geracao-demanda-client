import { Badge } from '@chakra-ui/react';

type SegmentProps = {
  status: PlanningActionType;
};

const conditionalValues = {
  relationship_task: {
    badgeProps: {
      variant: 'table_success',
    },
    text: 'Ação de relacionamento',
  },
  farm_task: {
    badgeProps: {
      variant: 'table_success',
    },
    text: 'Tarefa agrícola',
  },
  farm_kit: {
    badgeProps: {
      variant: 'table_success',
    },
    text: 'Kit fazenda',
  },
};

export const Segment = ({ status }: SegmentProps) => {
  const { text, badgeProps } = conditionalValues[status];

  return <Badge {...badgeProps}>{text}</Badge>;
};
