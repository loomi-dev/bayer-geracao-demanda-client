import { Badge } from '@chakra-ui/react';

type SegmentProps = {
  status: 'relationshipAction';
};

const conditionalValues = {
  relationshipAction: {
    badgeProps: {},
    text: 'Ação de relacionamento',
  },
};

export const Segment = ({ status }: SegmentProps) => {
  const { text, badgeProps } = conditionalValues[status];

  return <Badge {...badgeProps}>{text}</Badge>;
};
