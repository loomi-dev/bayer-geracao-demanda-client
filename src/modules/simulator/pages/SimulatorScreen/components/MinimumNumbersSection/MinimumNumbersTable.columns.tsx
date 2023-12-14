import { Text } from '@chakra-ui/react';
import { createColumnHelper } from '@tanstack/react-table';

import { formatValue } from '@/utils';

export type MinimunNumbersTableType = {
  'X12I+XTD': number;
  IPRO: number;
  targetValue: number;
};

const percentageTextColor = {
  0.3: 'text.brand',
  0.4: 'text.footnote',
  0.5: 'text.primary',
};
const columnHelper = createColumnHelper<MinimunNumbersTableType>();

export const MinimumNumbersTableColumns = [
  columnHelper.accessor((data) => data['X12I+XTD'], {
    id: 'x12l',
    header: () => (
      <Text textStyle="footnote-bold" color="surface.primary">
        X12I + XTD
      </Text>
    ),
    cell: (info) => <Text textStyle="body2">{formatValue(info.getValue() ?? 0)}</Text>,
  }),
  columnHelper.accessor((data) => data.IPRO, {
    id: 'ipro',
    header: () => (
      <Text textStyle="footnote-bold" color="surface.primary">
        IPRO
      </Text>
    ),
    cell: (info) => <Text textStyle="body2">{formatValue(info.getValue() ?? 0)}</Text>,
  }),
  columnHelper.accessor((data) => data.targetValue, {
    id: 'faixa',
    header: () => (
      <Text textStyle="footnote-bold" color="surface.primary">
        FAIXA ATINGIDA
      </Text>
    ),
    cell: (info) => (
      <Text textStyle="body2" fontWeight="bold" color={percentageTextColor[info.getValue()]}>
        {info.getValue() * 100}%
      </Text>
    ),
  }),
];
