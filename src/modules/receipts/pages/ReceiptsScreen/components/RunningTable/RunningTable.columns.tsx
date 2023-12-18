import { createColumnHelper } from '@tanstack/react-table';

import { GetActionsResponse } from '@/modules/api';
import { toBRL } from '@/utils';

import { Cell } from '../Cell';
import { Header } from '../Header';
import { ReceiptStatus } from '../ReceiptStatus';
import { Segment } from '../Segment/Segment';
import { ViewButton } from '../ViewButton';

const columnHelper = createColumnHelper<GetActionsResponse['data'][0]>();

export const columns = [
  columnHelper.accessor((data) => data.title, {
    id: 'shareTitle',
    header: () => <Header title="Titulo da Ação" />,
    cell: (info) => <Cell value={info.getValue()} textProps={{ textStyle: 'caption7' }} />,
  }),
  columnHelper.accessor((data) => data.type, {
    id: 'segment',
    header: () => <Header title="segmento" />,
    cell: (info) => <Segment status={info.getValue()} />,
  }),
  columnHelper.accessor((data) => '2023/2024', {
    id: 'harvest',
    header: () => <Header title="safra" />,
    cell: (info) => <Cell value={info.getValue()} />,
  }),
  columnHelper.accessor((data) => '10/12/2023', {
    id: 'executionDate',
    header: () => <Header title="Data de execução" />,
    cell: (info) => <Cell value={info.getValue()} />,
  }),
  columnHelper.accessor((data) => data.farmer.wallet.initialBalance ?? 0, {
    id: 'initialGD',
    header: () => <Header title="GD INICIAL" />,
    cell: (info) => <Cell value={toBRL(info.getValue())} />,
  }),
  columnHelper.accessor((data) => data.amountInCents, {
    id: 'finalGD',
    header: () => <Header title="GD FINAL" />,
    cell: (info) => <Cell value={toBRL(info.getValue())} />,
  }),
  columnHelper.accessor((data) => data.status, {
    id: 'status',
    header: () => <Header title="STATUS" />,
    cell: () => <ReceiptStatus status="receiptsPending" />,
  }),
  columnHelper.accessor((data) => data, {
    id: 'action',
    header: () => <Header title="AÇÃO" />,
    cell: (value) => <ViewButton value={value} />,
  }),
];
