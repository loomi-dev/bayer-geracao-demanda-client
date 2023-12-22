import { createColumnHelper } from '@tanstack/react-table';
import dayjs from 'dayjs';

import { Cell, Header, ReceiptStatus, Segment } from '@/modules/receipts/components';
import { formatPrice } from '@/utils';

import { ViewReceiptActionsDetailsButton } from '../ViewReceiptActionsDetailsButton';

const columnHelper = createColumnHelper<ReceiptAction>();

export const finalizedTablesColumns = [
  columnHelper.accessor((data) => data?.title ?? '', {
    id: 'shareTitle',
    header: () => <Header title="Titulo da Ação" />,
    cell: (info) => <Cell value={info.getValue()} textProps={{ textStyle: 'caption7' }} />,
  }),
  columnHelper.accessor((data) => data.type ?? 'farm_task', {
    id: 'segment',
    header: () => <Header title="segmento" />,
    cell: (info) => <Segment status={info.getValue()} />,
  }),
  columnHelper.accessor((data) => data?.farmer?.safra?.year, {
    id: 'harvest',
    header: () => <Header title="safra" />,
    cell: (info) => <Cell value={info.getValue() ?? ''} />,
  }),
  columnHelper.accessor(
    (data) => {
      const formattedDate = dayjs(data?.createdAt).format('DD/MM/YYYY');

      return formattedDate;
    },
    {
      id: 'executionDate',
      header: () => <Header title="Data de execução" />,
      cell: (info) => <Cell value={info.getValue()} />,
    },
  ),
  columnHelper.accessor((data) => data?.farmer?.wallet?.initialBalance ?? 0, {
    id: 'initialGD',
    header: () => <Header title="GD INICIAL" />,
    cell: (info) => <Cell value={`R$ ${formatPrice(info.getValue())}`} />,
  }),
  columnHelper.accessor((data) => data.amountInCents, {
    id: 'finalGD',
    header: () => <Header title="GD FINAL" />,
    cell: (info) => <Cell value={`R$ ${formatPrice(info.getValue())}`} />,
  }),
  columnHelper.accessor((data) => data?.status ?? 'not_evaluated', {
    id: 'status',
    header: () => <Header title="STATUS" />,
    cell: (info) => <ReceiptStatus status={info.getValue()} />,
  }),
  columnHelper.accessor((data) => data, {
    id: 'action',
    header: () => <Header title="AÇÃO" />,
    cell: (info) => <ViewReceiptActionsDetailsButton action={info.getValue()} />,
  }),
];
