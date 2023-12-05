import { Box, Text } from '@chakra-ui/react';
import { createColumnHelper } from '@tanstack/react-table';

import { DynamicTable } from '@/components';
import { toBRL } from '@/utils';

import { Cell, Header, ReceiptStatus, Segment, ViewButton } from '../ActionsTableComponents';
import { ActionType } from '../FinalizedTables';

const columnHelper = createColumnHelper<ActionType>();

const columns = [
  columnHelper.accessor((data) => data.shareTitle, {
    id: 'shareTitle',
    header: () => <Header title="Titulo da Ação" />,
    cell: (info) => <Cell value={info.getValue()} textProps={{ textStyle: 'caption7' }} />,
  }),
  columnHelper.accessor((data) => data.segment, {
    id: 'segment',
    header: () => <Header title="segmento" />,
    cell: (info) => <Segment status={info.getValue()} />,
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
    cell: () => <ReceiptStatus status="receiptsPending" />,
  }),
  columnHelper.accessor((data) => data, {
    id: 'action',
    header: () => <Header title="AÇÃO" />,
    cell: (value) => <ViewButton value={value} />,
  }),
];

export const RunningTable = () => (
  <Box w="100%">
    <Text mb="1rem" ml="1.6rem" textStyle="body4">
      Em execução
    </Text>
    <DynamicTable
      data={[
        {
          executionDate: '12/12/2023',
          finalGD: 20000,
          initialGD: 20000,
          harvest: '2023/2024',
          id: 1,
          segment: 'relationshipAction',
          shareTitle: 'Titulo da Ação',
          status: 'Comprovantes pendentes',
        },
      ]}
      columns={columns}
      w="100%"
    />
  </Box>
);
