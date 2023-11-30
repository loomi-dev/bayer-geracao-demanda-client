import { Text } from '@chakra-ui/react';
import { createColumnHelper } from '@tanstack/react-table';

const columnHelper = createColumnHelper<{ id: number; name: string; age: number }>();

export const customersColumns = [
  columnHelper.accessor((data) => data.name, {
    id: 'name',
    header: () => <Text>Nome</Text>,
    cell: (info) => <Text>{info.getValue()}</Text>,
  }),
  columnHelper.accessor((data) => data.age, {
    id: 'age',
    header: () => <Text>Idade</Text>,
    cell: (info) => <Text>{info.getValue()}</Text>,
  }),
];
