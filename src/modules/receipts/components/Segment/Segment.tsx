import { Badge } from '@chakra-ui/react';

import { GetActionsResponse } from '../../api';

type SegmentProps = {
  status: GetActionsResponse['data'][0]['type'];
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
    text: 'Ação de relacionamento',
  },
  farm_kit: {
    badgeProps: {
      variant: 'table_success',
    },
    text: 'Ação de relacionamento',
  },
};

export const Segment = ({ status }: SegmentProps) => {
  const { text, badgeProps } = conditionalValues[status];

  return <Badge {...badgeProps}>{text}</Badge>;
};
