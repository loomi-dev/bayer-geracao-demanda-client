import { Text } from '@chakra-ui/react';
import { createColumnHelper } from '@tanstack/react-table';
import dayjs from 'dayjs';

import { PlanningStatusBadge } from '@/components';

import { PlanningBudgetColumn } from './PlanningBudgetColumn';

const columnHelper = createColumnHelper<Planning>();

export const planningTableColumns = [
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
  columnHelper.accessor((data) => data?.historic, {
    id: 'status',
    header: () => <Text>Status</Text>,
    cell: (info) => <PlanningStatusBadge historic={info.getValue() ?? []} />,
  }),
  columnHelper.accessor((data) => data?.actions, {
    id: 'budget',
    header: () => <Text>Orçamento</Text>,
    cell: (info) => <PlanningBudgetColumn planningActions={info.getValue() ?? []} />,
  }),
];
