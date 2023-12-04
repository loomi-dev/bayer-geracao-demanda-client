import { Text } from '@chakra-ui/react';
import { createColumnHelper } from '@tanstack/react-table';

import { formatPrice } from '@/utils';

const columnHelper = createColumnHelper<any>();

export const customerPlanningColumns = [
  columnHelper.accessor(() => null, {
    id: 'tituloPlanejamento',
    header: () => <Text textStyle="footnote-bold">Título do planejamento</Text>,
    cell: (info) => <Text textStyle="footnote">{info.getValue()}</Text>,
  }),
  columnHelper.accessor(() => null, {
    id: 'safra',
    header: () => <Text textStyle="footnote-bold">Safra</Text>,
    cell: () => <Text textStyle="action3">{Date()}</Text>,
  }),
  columnHelper.accessor(() => null, {
    id: 'dataPlanejamento',
    header: () => <Text textStyle="footnote-bold">Data do planejamento</Text>,
    cell: () => <Text textStyle="action3">{Date()}</Text>,
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
