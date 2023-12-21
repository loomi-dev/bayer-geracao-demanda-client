import { createColumnHelper } from '@tanstack/react-table';

import { Cell, Header, ReceiptStatus, Segment } from '@/modules/receipts/components';
import { formatPrice } from '@/utils';

import { ProveActionButton } from './ProveActionButton';

const columnHelper = createColumnHelper<ReceiptAction>();

export const receiptsActionsTableColumns = [
  columnHelper.accessor((data) => data.title ?? '', {
    id: 'title',
    header: () => <Header title="Titulo da Ação" />,
    cell: (info) => <Cell value={info.getValue()} textProps={{ textStyle: 'caption7' }} />,
  }),
  columnHelper.accessor((data) => data.type, {
    id: 'segment',
    header: () => <Header title="segmento" />,
    cell: (info) => <Segment status={info.getValue()} />,
  }),
  columnHelper.accessor((data) => data?.farmer?.wallet?.initialBalance ?? 0, {
    id: 'homeGdFeature',
    header: () => <Header title="recurso GD INICIAL" />,
    cell: (info) => <Cell value={`R$ ${formatPrice(info.getValue())}`} />,
  }),
  columnHelper.accessor((data) => data.amountInCents ?? 0, {
    id: 'finalGdFeature',
    header: () => <Header title="recurso GD FINAL" />,
    cell: (info) => <Cell value={`R$ ${formatPrice(info.getValue())}`} />,
  }),
  columnHelper.accessor((data) => data.status, {
    id: 'status',
    header: () => <Header title="STATUS" />,
    cell: (info) => <ReceiptStatus status={info.getValue()} />,
  }),
  columnHelper.accessor((data) => data, {
    id: 'action',
    header: () => <Header title="AÇÃO" />,
    cell: (info) => <ProveActionButton action={info.getValue()} />,
  }),
];
