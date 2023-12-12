import { Text } from '@chakra-ui/react';
import { createColumnHelper } from '@tanstack/react-table';

import { formatPrice } from '@/utils';

const columnHelper = createColumnHelper<any>();

export const MinimumNumbersTableColumns = [
  columnHelper.accessor(() => null, {
    id: 'x12l',
    header: () => (
      <Text textStyle="footnote-bold" color="surface.primary">
        X12I + XTD
      </Text>
    ),
    cell: () => <Text textStyle="body2">R$ {formatPrice(18000000)}</Text>,
  }),
  columnHelper.accessor(() => null, {
    id: 'ipro',
    header: () => (
      <Text textStyle="footnote-bold" color="surface.primary">
        IPRO
      </Text>
    ),
    cell: () => <Text textStyle="body2">R$ {formatPrice(18000000)}</Text>,
  }),
  columnHelper.accessor(() => null, {
    id: 'faixa',
    header: () => (
      <Text textStyle="footnote-bold" color="surface.primary">
        FAIXA ATINGIDA
      </Text>
    ),
    cell: () => <Text textStyle="body2">{30}%</Text>,
  }),
];
