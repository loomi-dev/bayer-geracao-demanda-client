import { Text } from '@chakra-ui/react';
import { createColumnHelper } from '@tanstack/react-table';
import dayjs from 'dayjs';

import { PlanningBudgetColumn } from './PlanningBudgetColumn';
import { PlanningStatusColumn } from './PlanningStatusColumn';
import { PlanningTableAction } from './PlanningTableAction';

const columnHelper = createColumnHelper<Planning>();

export const planningTableColumns = [
  columnHelper.accessor((data) => data?.safra?.year, {
    id: 'safra',
    header: () => <Text>Safra</Text>,
    cell: (info) => <Text textStyle="action2">{info.getValue()}</Text>,
  }),
  columnHelper.accessor((data) => data?.createdAt, {
    id: 'datePlanning',
    header: () => <Text>Data do plan.</Text>,
    cell: (info) => <Text>{dayjs(info.getValue()).format('DD MMMM YYYY')}</Text>,
  }),
  columnHelper.accessor((data) => data?.historic, {
    id: 'status',
    header: () => <Text>Status</Text>,
    cell: (info) => <PlanningStatusColumn historic={info.getValue() ?? []} />,
  }),
  columnHelper.accessor((data) => data?.actions, {
    id: 'budget',
    header: () => <Text>Orçamento</Text>,
    cell: (info) => <PlanningBudgetColumn planningActions={info.getValue() ?? []} />,
  }),
  columnHelper.accessor(
    (data) => ({
      id: data.id,
      historic: data.historic,
    }),
    {
      id: 'acoes',
      header: () => null,
      cell: (info) => (
        <PlanningTableAction
          planningId={info.getValue().id}
          historic={info.getValue().historic ?? []}
        />
      ),
    },
  ),
];
