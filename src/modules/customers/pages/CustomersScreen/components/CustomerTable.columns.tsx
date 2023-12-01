import { Text } from '@chakra-ui/react';
import { createColumnHelper } from '@tanstack/react-table';

const columnHelper = createColumnHelper<any>();

export const CustomerColumns = [
  columnHelper.accessor((data) => data.safra, {
    id: 'razaoSocial',
    header: () => <Text textStyle="action4">Razão Social</Text>,
    cell: (info) => <Text textStyle="body3">{info.getValue()}</Text>,
  }),
  columnHelper.accessor((data) => data.data, {
    id: 'recursoGdInicial',
    header: () => <Text textStyle="action4">Recurso GD Inicial</Text>,
    cell: (info) => <Text textStyle="caption3">{info.getValue()}</Text>,
  }),
  columnHelper.accessor((data) => data.status, {
    id: 'recursoGdFinal',
    header: () => <Text textStyle="action4">Recurso GD Final</Text>,
    cell: (info) => <Text textStyle="caption3">{info.getValue()}</Text>,
  }),
  columnHelper.accessor((data) => data.orcamento, {
    id: 'saldo',
    header: () => <Text textStyle="action4">Saldo</Text>,
    cell: (info) => (
      <Text textStyle="caption3" color="green.600">
        {info.getValue()}
      </Text>
    ),
  }),
  columnHelper.accessor((data) => data.status, {
    id: 'utilizado',
    header: () => <Text textStyle="action4">Utilizado</Text>,
    cell: (info) => (
      <Text textStyle="caption3" color="green.600">
        {info.getValue()}
      </Text>
    ),
  }),
  columnHelper.accessor((data) => data.orcamento, {
    id: 'status',
    header: () => <Text textStyle="action4">Status</Text>,
    cell: (info) => <Text textStyle="action3">{info.getValue()}</Text>,
  }),
  columnHelper.accessor((data) => data.status, {
    id: 'tempoStatus',
    header: () => <Text textStyle="action4">Tempo no status</Text>,
    cell: (info) => <Text textStyle="footnote">{info.getValue()}</Text>,
  }),
  columnHelper.accessor((data) => data.orcamento, {
    id: 'ultimoAcesso',
    header: () => <Text textStyle="action4">Ultimo acesso</Text>,
    cell: (info) => <Text textStyle="footnote">{info.getValue()}</Text>,
  }),
];
