import { Text } from '@chakra-ui/react';
import { createColumnHelper } from '@tanstack/react-table';

const columnHelper = createColumnHelper<any>();

export const planningActionsColumns = [
  columnHelper.accessor(() => null, {
    id: 'titulo',
    header: () => <Text>Título da ação</Text>,
    cell: () => null,
  }),
  columnHelper.accessor(() => null, {
    id: 'tipo',
    header: () => <Text>Tipo</Text>,
    cell: () => null,
  }),
  columnHelper.accessor(() => null, {
    id: 'execucao',
    header: () => <Text>Execução</Text>,
    cell: () => null,
  }),
  columnHelper.accessor(() => null, {
    id: 'orcamento',
    header: () => <Text>Orçamento</Text>,
    cell: () => null,
  }),
];
