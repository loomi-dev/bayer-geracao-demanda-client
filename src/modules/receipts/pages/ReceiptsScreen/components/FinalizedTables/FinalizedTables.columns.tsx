import { createColumnHelper } from '@tanstack/react-table';

import { Cell, Header, ReceiptStatus, Segment } from '@/modules/receipts/components';
import { toBRL } from '@/utils';

import { ViewButton } from '../ViewButton';

export type ActionType = {
  id: number;
  shareTitle: string;
  segment: 'relationshipAction';
  harvest: string;
  executionDate: string;
  initialGD: number;
  finalGD: number;
  status: string;
};

const columnHelper = createColumnHelper<ActionType>();

export const columns = [
  columnHelper.accessor((data) => data.shareTitle, {
    id: 'shareTitle',
    header: () => <Header title="Titulo da Ação" />,
    cell: (info) => <Cell value={info.getValue()} textProps={{ textStyle: 'caption7' }} />,
  }),
  columnHelper.accessor((data) => data.segment, {
    id: 'segment',
    header: () => <Header title="segmento" />,
    cell: (info) => <Segment status="relationship_task" />,
  }),
  columnHelper.accessor((data) => data.harvest, {
    id: 'harvest',
    header: () => <Header title="safra" />,
    cell: (info) => <Cell value={info.getValue()} />,
  }),
  columnHelper.accessor((data) => data.executionDate, {
    id: 'executionDate',
    header: () => <Header title="Data de execução" />,
    cell: (info) => <Cell value={info.getValue()} />,
  }),
  columnHelper.accessor((data) => data.initialGD, {
    id: 'initialGD',
    header: () => <Header title="GD INICIAL" />,
    cell: (info) => <Cell value={toBRL(info.getValue())} />,
  }),
  columnHelper.accessor((data) => data.finalGD, {
    id: 'finalGD',
    header: () => <Header title="GD FINAL" />,
    cell: (info) => <Cell value={toBRL(info.getValue())} />,
  }),
  columnHelper.accessor((data) => data.status, {
    id: 'status',
    header: () => <Header title="STATUS" />,
    cell: () => <ReceiptStatus status="receiptsSent" />,
  }),
  columnHelper.accessor((data) => data, {
    id: 'action',
    header: () => <Header title="AÇÃO" />,
    cell: (value) => <ViewButton value={value} />,
  }),
];
