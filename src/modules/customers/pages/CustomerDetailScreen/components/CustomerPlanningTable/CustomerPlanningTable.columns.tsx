import { Text } from '@chakra-ui/react';
import { createColumnHelper } from '@tanstack/react-table';

import { formatDate, formatPrice } from '@/utils';

const columnHelper = createColumnHelper<Planning>();

export const customerPlanningColumns = [
  columnHelper.accessor(() => null, {
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
  columnHelper.accessor(() => null, {
    id: 'status',
    header: () => <Text textStyle="footnote-bold">Status</Text>,
    cell: () => <Text textStyle="action3">-</Text>,
  }),
  columnHelper.accessor(() => null, {
    id: 'valor',
    header: () => <Text textStyle="footnote-bold">Valor</Text>,
    cell: () => <Text textStyle="caption3">R$ {formatPrice(1000000)}</Text>,
  }),
];
