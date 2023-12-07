import { Badge } from '@chakra-ui/react';

type ActionStatusColumnProps = {
  status?: string;
};

const badgeConfig = {
  rejected: {
    label: 'Recusado',
    variant: 'table_error',
  },
  accepted: {
    label: 'Aprovado',
    variant: 'table_success',
  },
  not_evaluated: {
    label: 'Em análise',
    variant: 'table_primary',
  },
};
export const ActionStatusColumn = ({ status = 'not_evaluated' }: ActionStatusColumnProps) => (
  <Badge variant={badgeConfig[status].variant} w="15rem">
    {badgeConfig[status].label}
  </Badge>
);
