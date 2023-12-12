import { Text } from '@chakra-ui/react';
import { createColumnHelper } from '@tanstack/react-table';

import { centsToCompactValue, formatPrice } from '@/utils';

const columnHelper = createColumnHelper<any>();

export const FinancialOpportunityTableColumns = [
  columnHelper.accessor(() => null, {
    id: 'faixa',
    header: () => (
      <Text textStyle="footnote-bold" color="surface.primary">
        FAIXA
      </Text>
    ),
    cell: () => <Text textStyle="body2">{30}%</Text>,
  }),
  columnHelper.accessor(() => null, {
    id: 'rebate',
    header: () => (
      <Text textStyle="footnote-bold" color="surface.primary">
        REBATE
      </Text>
    ),
    cell: () => <Text textStyle="body2">R$ {formatPrice(18000000)}</Text>,
  }),
  columnHelper.accessor(() => null, {
    id: 'faixa',
    header: () => (
      <Text textStyle="footnote-bold" color="surface.primary">
        GERAÇÃO DE DEMANDA FINAL
      </Text>
    ),
    cell: () => <Text textStyle="body2">R$ {formatPrice(18000000)}</Text>,
  }),
  columnHelper.accessor(() => null, {
    id: 'icBiotec',
    header: () => (
      <Text textStyle="footnote-bold" color="surface.primary">
        IC. BIOTEC
      </Text>
    ),
    cell: () => <Text textStyle="body2">R$ {formatPrice(18000000)}</Text>,
  }),
  columnHelper.accessor(() => null, {
    id: 'incentivos',
    header: () => (
      <Text textStyle="footnote-bold" color="surface.primary">
        INCENTIVOS TOTAIS
      </Text>
    ),
    cell: () => <Text textStyle="body2">R$ {centsToCompactValue(18000000)}</Text>,
  }),
];
