import { Text } from '@chakra-ui/react';
import { createColumnHelper } from '@tanstack/react-table';

import { centsToInteger, formatMonth, formatPrice } from '@/utils';

import { PlanningActionTypeColumn } from './PlanningActionTypeColumn';

const columnHelper = createColumnHelper<PlanningAction>();

export const planningActionsColumns = [
  columnHelper.accessor((data) => data?.title, {
    id: 'titulo',
    header: () => <Text>Título da ação</Text>,
    cell: (info) => <Text>{info.getValue() ?? '-'}</Text>,
  }),
  columnHelper.accessor((data) => data?.type, {
    id: 'tipo',
    header: () => <Text>Tipo</Text>,
    cell: (info) => <PlanningActionTypeColumn type={info.getValue()} />,
  }),
  columnHelper.accessor((data) => ({ startDate: data.initialDate, endDate: data.finishDate }), {
    id: 'execucao',
    header: () => <Text>Execução</Text>,
    cell: (info) => (
      <Text textStyle="action3">{`${formatMonth(info.getValue().startDate)} - ${formatMonth(
        info.getValue().endDate,
      )}`}</Text>
    ),
  }),
  columnHelper.accessor((data) => data?.amountInCents, {
    id: 'orcamento',
    header: () => <Text>Orçamento</Text>,
    cell: (info) => (
      <Text textStyle="action3">{`R$ ${formatPrice(centsToInteger(info.getValue() ?? 0))}`}</Text>
    ),
  }),
];
