import { Button, Text } from '@chakra-ui/react';
import { createColumnHelper } from '@tanstack/react-table';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

import { formatPrice } from '@/utils';

import { DetailTableStatusColumn } from './DetailTableStatusColumn';

const columnHelper = createColumnHelper<PlanningAction>();

dayjs.extend(relativeTime);
export const DetailTableColumns = [
  columnHelper.accessor((data) => data.title, {
    id: 'tituloAcao',
    header: () => <Text>Título da ação</Text>,
    cell: (info) => <Text textStyle="caption3">{info.getValue()}</Text>,
  }),
  columnHelper.accessor((data) => data.type, {
    id: 'tipo',
    header: () => <Text textStyle="action4">Tipo</Text>,
    cell: (info) => <DetailTableStatusColumn type={info.getValue()} />,
  }),
  columnHelper.accessor((data) => data.amountInCents, {
    id: 'orçamento',
    header: () => <Text textStyle="action4">Saldo</Text>,
    cell: (info) => (
      <Text textStyle="caption3" color="green.600">
        R$ {formatPrice(info.getValue())}
      </Text>
    ),
  }),
  columnHelper.accessor((data) => data.status, {
    id: 'recusar',
    cell: (info) => {
      if (info.getValue() !== 'rejected')
        return (
          <Button size="sm" variant="fifth">
            Recusar ação
          </Button>
        );
    },
  }),
];
