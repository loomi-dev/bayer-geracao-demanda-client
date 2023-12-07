import { Text } from '@chakra-ui/react';
import { createColumnHelper } from '@tanstack/react-table';

import { formatDate } from '@/utils';

import { CustomerPlanningBudgetColumn } from './CustomerPlanningBudgetColumn';
import { CustomerPlanningStatusColumn } from './CustomerPlanningStatusColumn';

const columnHelper = createColumnHelper<Planning>();

export const customerPlanningColumns = [
  columnHelper.accessor((data) => data.title, {
    id: 'tituloPlanejamento',
    header: () => <Text textStyle="footnote-bold">Título do planejamento</Text>,
    cell: (info) => <Text textStyle="footnote">{info.getValue()}</Text>,
  }),
  columnHelper.accessor((data) => data.safra?.year, {
    id: 'safra',
    header: () => <Text textStyle="footnote-bold">Safra</Text>,
    cell: (info) => <Text textStyle="action3">{info.getValue()}</Text>,
  }),
  columnHelper.accessor((data) => data.createdAt, {
    id: 'dataPlanejamento',
    header: () => <Text textStyle="footnote-bold">Data do planejamento</Text>,
    cell: (info) => <Text textStyle="action3">{formatDate(info.getValue())}</Text>,
  }),
  columnHelper.accessor((data) => data.historic, {
    id: 'status',
    header: () => <Text textStyle="footnote-bold">Status</Text>,
    cell: (info) => <CustomerPlanningStatusColumn historic={info.getValue() ?? []} />,
  }),
  columnHelper.accessor((data) => data.actions ?? [], {
    id: 'valor',
    header: () => <Text textStyle="footnote-bold">Valor</Text>,
    cell: (info) => <CustomerPlanningBudgetColumn planningActions={info.getValue()} />,
  }),
];
