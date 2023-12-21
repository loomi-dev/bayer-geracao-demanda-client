import { Box, HStack, Text } from '@chakra-ui/react';
import { createColumnHelper } from '@tanstack/react-table';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

import { CustomerPlannings } from '@/api/customer';
import { ClockIcon } from '@/components';
import { formatPrice, getTotalPlanningBudgetValue } from '@/utils';

import { CustomerTableStatusColumn } from './CustomerTableStatusColumn';

const columnHelper = createColumnHelper<CustomerPlannings>();

dayjs.extend(relativeTime);
export const CustomerColumns = [
  columnHelper.accessor((data) => data.farmer?.company_name, {
    id: 'razaoSocial',
    header: () => <Text textStyle="action4">Razão Social</Text>,
    cell: (info) => <Text textStyle="body3">{info.getValue()}</Text>,
  }),
  columnHelper.accessor((data) => data.farmer?.wallet?.initialBalance, {
    id: 'recursoGdInicial',
    header: () => <Text textStyle="action4">Recurso GD Inicial</Text>,
    cell: (info) => <Text textStyle="caption3">{`R$ ${formatPrice(info.getValue())}`}</Text>,
  }),
  columnHelper.accessor((data) => data.actions, {
    id: 'recursoGdFinal',
    header: () => <Text textStyle="action4">Recurso GD Final</Text>,
    cell: (info) => {
      const planningValue = getTotalPlanningBudgetValue(info.getValue());
      return <Text textStyle="caption3">{`R$ ${formatPrice(planningValue)}`}</Text>;
    },
  }),
  columnHelper.accessor(() => null, {
    id: 'saldo',
    header: () => <Text textStyle="action4">Saldo</Text>,
    cell: (info) => {
      const initialResource: number = info.row.getValue('recursoGdInicial');
      const actions: PlanningAction[] = info.row.getValue('recursoGdFinal');
      const finalResource = getTotalPlanningBudgetValue(actions);
      return (
        <Text textStyle="caption3" color="red.danger_50">
          {`R$ ${formatPrice(initialResource - finalResource)}`}
        </Text>
      );
    },
  }),
  columnHelper.accessor((data) => data.provenResourceAmountInCents, {
    id: 'comprovado',
    header: () => <Text textStyle="action4">Comprovado</Text>,
    cell: (info) => (
      <Text textStyle="caption3" color="red.danger_50">
        {`R$ ${formatPrice(info.getValue())}`}
      </Text>
    ),
  }),
  columnHelper.accessor((data) => data.historic ?? [], {
    id: 'status',
    header: () => <Text textStyle="action4">Status</Text>,
    cell: (cell) => <CustomerTableStatusColumn historic={cell.getValue()} />,
  }),
  columnHelper.accessor((data) => data.historic?.at(-1)?.creation_date, {
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
  columnHelper.accessor((data) => data.farmer?.users_permissions_user?.lastAccess, {
    id: 'ultimoAcesso',
    header: () => <Text textStyle="action4">Ultimo acesso</Text>,
    cell: (info) => (
      <HStack align="center" justify="center">
        <Box mt="0.3rem">
          <ClockIcon />
        </Box>
        <Text textStyle="footnote">{dayjs(info.getValue()).to(Date(), true)}</Text>
      </HStack>
    ),
  }),
];
