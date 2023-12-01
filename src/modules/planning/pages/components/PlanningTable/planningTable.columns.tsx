import { Text } from '@chakra-ui/react';
import { createColumnHelper } from '@tanstack/react-table';

const columnHelper = createColumnHelper<any>();

export const planningColumns = [
  columnHelper.accessor((data) => data.safra, {
    id: 'safra',
    header: () => <Text>Safra</Text>,
    cell: (info) => <Text textStyle="action2">{info.getValue()}</Text>,
  }),
  columnHelper.accessor((data) => data.data, {
    id: 'dataPlanejamento',
    header: () => <Text>Data do plan.</Text>,
    cell: (info) => <Text>{info.getValue()}</Text>,
  }),
  columnHelper.accessor((data) => data.status, {
    id: 'status',
    header: () => <Text>Status</Text>,
    cell: (info) => <Text>{info.getValue()}</Text>,
  }),
  columnHelper.accessor((data) => data.orcamento, {
    id: 'orcamento',
    header: () => <Text>Orçamento</Text>,
    cell: (info) => <Text textStyle="action3">{info.getValue()}</Text>,
  }),
];
