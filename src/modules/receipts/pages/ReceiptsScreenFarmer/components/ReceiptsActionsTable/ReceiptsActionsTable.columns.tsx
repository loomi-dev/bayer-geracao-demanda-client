import { Center } from '@chakra-ui/react';
import { createColumnHelper } from '@tanstack/react-table';

import {
  Cell,
  Header,
  ReceiptStatus,
  Segment,
  SendReceiptsButton,
  ViewReceiptsButton,
} from '@/modules/receipts/components';
import { formatPrice } from '@/utils';

const columnHelper = createColumnHelper<ReceiptAction>();

export const receiptsActionsTableColumns = [
  columnHelper.accessor((data) => data.title ?? '', {
    id: 'title',
    header: () => <Header title="Titulo da Ação" />,
    cell: (info) => <Cell value={info.getValue()} textProps={{ textStyle: 'caption7' }} />,
  }),
  columnHelper.accessor((data) => data?.type ?? 'farm_task', {
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
  columnHelper.accessor((data) => data?.receipts?.documents ?? [], {
    id: 'status',
    header: () => <Header title="STATUS" />,
    cell: (info) => <ReceiptStatus documents={info.getValue()} />,
  }),
  columnHelper.accessor((data) => data, {
    id: 'action',
    header: () => <Header title="AÇÃO" />,
    cell: (info) => {
      const isReceiptPending = (info.getValue().receipts?.documents ?? []).length <= 0;

      return (
        <Center>
          {isReceiptPending ? (
            <SendReceiptsButton action={info.getValue()} />
          ) : (
            <ViewReceiptsButton action={info.getValue()} />
          )}
        </Center>
      );
    },
  }),
];
