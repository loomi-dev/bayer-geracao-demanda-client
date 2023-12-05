import { Box, HStack, Text } from '@chakra-ui/react';
import { createColumnHelper } from '@tanstack/react-table';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

import { Customer } from '@/api/customer';
import { ClockIcon } from '@/components';
import { formatPrice } from '@/utils';

import { CustomerTableStatusColumn } from './CustomerTableStatusColumn';

const columnHelper = createColumnHelper<Customer>();

dayjs.extend(relativeTime);
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
  columnHelper.accessor((data) => data.historic ?? [], {
    id: 'status',
    header: () => <Text textStyle="action4">Status</Text>,
    cell: (cell) => <CustomerTableStatusColumn historic={cell.getValue()} />,
  }),
  columnHelper.accessor((data) => data.date, {
    id: 'tempoStatus',
    header: () => <Text textStyle="action4">Tempo no status</Text>,
    cell: (cell) => (
      <HStack align="center" justify="center">
        <Box mt="0.3rem">
          <ClockIcon />
        </Box>
        <Text textStyle="footnote">{dayjs(cell.getValue()).to(Date(), true)}</Text>
      </HStack>
    ),
  }),
  columnHelper.accessor(() => null, {
    id: 'ultimoAcesso',
    header: () => <Text textStyle="action4">Ultimo acesso</Text>,
    cell: () => <Text textStyle="footnote">-</Text>,
  }),
];
