import { Text } from '@chakra-ui/react';
import { createColumnHelper } from '@tanstack/react-table';

import { Customer } from '@/modules/customers/api';
import { formatPrice } from '@/utils';

const columnHelper = createColumnHelper<Customer>();

export const CustomerColumns = [
  columnHelper.accessor((data) => data.farmer.company_name, {
    id: 'razaoSocial',
    header: () => <Text textStyle="action4">Razão Social</Text>,
    cell: (info) => <Text textStyle="body3">{info.getValue()}</Text>,
  }),
  columnHelper.accessor(() => null, {
    id: 'recursoGdInicial',
    header: () => <Text textStyle="action4">Recurso GD Inicial</Text>,
    cell: () => <Text textStyle="caption3">{formatPrice(80000)}</Text>,
  }),
  columnHelper.accessor(() => null, {
    id: 'recursoGdFinal',
    header: () => <Text textStyle="action4">Recurso GD Final</Text>,
    cell: () => <Text textStyle="caption3">{formatPrice(80000)}</Text>,
  }),
  columnHelper.accessor(() => null, {
    id: 'saldo',
    header: () => <Text textStyle="action4">Saldo</Text>,
    cell: () => (
      <Text textStyle="caption3" color="green.600">
        {formatPrice(1000000)}
      </Text>
    ),
  }),
  columnHelper.accessor(() => null, {
    id: 'utilizado',
    header: () => <Text textStyle="action4">Utilizado</Text>,
    cell: () => (
      <Text textStyle="caption3" color="green.600">
        {formatPrice(1000000)}
      </Text>
    ),
  }),
  columnHelper.accessor(() => null, {
    id: 'status',
    header: () => <Text textStyle="action4">Status</Text>,
    cell: () => <Text textStyle="action3">-</Text>,
  }),
  columnHelper.accessor(() => null, {
    id: 'tempoStatus',
    header: () => <Text textStyle="action4">Tempo no status</Text>,
    cell: () => <Text textStyle="footnote">-</Text>,
  }),
  columnHelper.accessor(() => null, {
    id: 'ultimoAcesso',
    header: () => <Text textStyle="action4">Ultimo acesso</Text>,
    cell: () => <Text textStyle="footnote">-</Text>,
  }),
];
