import { Badge, Text } from '@chakra-ui/react';
import { createColumnHelper } from '@tanstack/react-table';
import dayjs from 'dayjs';

import { PlanningBudgetColumn } from './PlanningBudgetColumn';

const columnHelper = createColumnHelper<Planning>();

export const planningColumns = [
  columnHelper.accessor((data) => data?.safra?.year, {
    id: 'safra',
    header: () => <Text>Safra</Text>,
    cell: (info) => <Text textStyle="action2">{info.getValue()}</Text>,
  }),
  columnHelper.accessor((data) => data?.date, {
    id: 'dataPlanejamento',
    header: () => <Text>Data do plan.</Text>,
    cell: (info) => <Text>{dayjs(info.getValue()).format('DD MMMM YYYY')}</Text>,
  }),
  columnHelper.accessor((data) => data?.actions?.at(-1)?.status, {
    id: 'status',
    header: () => <Text>Status</Text>,
    cell: (info) => (info.getValue() ? <Badge>{info.getValue()}</Badge> : '-'),
  }),
  columnHelper.accessor((data) => data?.actions, {
    id: 'budget',
    header: () => <Text>Orçamento</Text>,
    cell: (info) => <PlanningBudgetColumn planningActions={info.getValue() ?? []} />,
  }),
];
