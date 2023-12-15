import { Text } from '@chakra-ui/react';
import { createColumnHelper } from '@tanstack/react-table';

import { formatValue, numberToCompactValue } from '@/utils';

export type FinancialOpportunityTableType = {
  targetValue: number;
  rebound: number;
  finalGenerationDemand: number;
  biotecIncentive: number;
};
const percentageTextColor = {
  0.3: 'text.brand',
  0.4: 'text.footnote',
  0.5: 'text.primary',
};
const columnHelper = createColumnHelper<FinancialOpportunityTableType>();

export const FinancialOpportunityTableColumns = [
  columnHelper.accessor((data) => data.targetValue, {
    id: 'faixa',
    header: () => (
      <Text textStyle="footnote-bold" color="surface.primary">
        FAIXA
      </Text>
    ),
    cell: (info) => (
      <Text textStyle="body2" fontWeight="bold" color={percentageTextColor[info.getValue()]}>
        {info.getValue() * 100}%
      </Text>
    ),
  }),
  columnHelper.accessor((data) => data.rebound, {
    id: 'rebate',
    header: () => (
      <Text textStyle="footnote-bold" color="surface.primary">
        REBATE
      </Text>
    ),
    cell: (info) => <Text textStyle="body2">R$ {formatValue(info.getValue())}</Text>,
  }),
  columnHelper.accessor((data) => data.finalGenerationDemand, {
    id: 'gdFinal',
    header: () => (
      <Text textStyle="footnote-bold" color="surface.primary">
        GERAÇÃO DE DEMANDA FINAL
      </Text>
    ),
    cell: (info) => <Text textStyle="body2">R$ {formatValue(info.getValue())}</Text>,
  }),
  columnHelper.accessor((data) => data.biotecIncentive, {
    id: 'icBiotec',
    header: () => (
      <Text textStyle="footnote-bold" color="surface.primary">
        IC. BIOTEC
      </Text>
    ),
    cell: (info) => <Text textStyle="body2">R$ {formatValue(info.getValue())}</Text>,
  }),
  columnHelper.accessor((data) => data.targetValue, {
    id: 'incentivos',
    header: () => (
      <Text textStyle="footnote-bold" color="surface.primary">
        INCENTIVOS TOTAIS
      </Text>
    ),
    cell: (info) => {
      const totalValue =
        Number(info.row.getValue('rebate')) +
        Number(info.row.getValue('gdFinal')) +
        Number(info.row.getValue('icBiotec'));
      return (
        <Text textStyle="body2" fontWeight="bold" color={percentageTextColor[info.getValue()]}>
          R$ {numberToCompactValue(totalValue)}
        </Text>
      );
    },
  }),
];
