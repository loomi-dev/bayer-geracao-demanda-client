import { Checkbox, Text } from '@chakra-ui/react';
import { createColumnHelper } from '@tanstack/react-table';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

import { formatPrice } from '@/utils';

import { CustomerPlanningTypeColumn } from './CustomerPlanningTypeColumn';

const columnHelper = createColumnHelper<PlanningAction>();

dayjs.extend(relativeTime);
export const CustomerPlanningActionsColumns = (planningStatus?: string) => [
  ...(planningStatus === 'ready_for_evaluation'
    ? [
        columnHelper.accessor((data) => data.id, {
          id: 'select',
          header: ({ table }) => (
            <Checkbox
              isChecked={table.getIsAllRowsSelected()}
              isIndeterminate={table.getIsSomeRowsSelected()}
              onChange={table.getToggleAllRowsSelectedHandler()}
            />
          ),
          cell: ({ row }) => (
            <Checkbox
              isChecked={row.getIsSelected()}
              isDisabled={!row.getCanSelect()}
              isIndeterminate={row.getIsSomeSelected()}
              onChange={row.getToggleSelectedHandler()}
            />
          ),
        }),
      ]
    : []),
  columnHelper.accessor((data) => data.title, {
    id: 'tituloAcao',
    header: () => <Text>Título da ação</Text>,
    cell: (info) => <Text textStyle="caption3">{info.getValue()}</Text>,
  }),
  columnHelper.accessor((data) => data.type, {
    id: 'tipo',
    header: () => <Text textStyle="action4">Tipo</Text>,
    cell: (info) => <CustomerPlanningTypeColumn type={info.getValue()} />,
  }),
  columnHelper.accessor((data) => [data.initialDate, data.finishDate], {
    id: 'execucao',
    header: () => <Text textStyle="action4">Execução</Text>,
    cell: (cell) => {
      const [initialDate, finishDate] = cell.getValue();
      const formattedInitialDate = initialDate ? dayjs(initialDate).format('MMMM') : '';
      const formattedFinishDate = finishDate ? dayjs(Date()).format('MMMM') : '';
      return <Text textStyle="action3">{`${formattedInitialDate} - ${formattedFinishDate}`}</Text>;
    },
  }),
  columnHelper.accessor((data) => data.amountInCents, {
    id: 'orçamento',
    header: () => <Text textStyle="action4">Saldo</Text>,
    cell: (info) => (
      <Text textStyle="action3" color="red.danger_50">
        R$ {formatPrice(info.getValue())}
      </Text>
    ),
  }),
];
