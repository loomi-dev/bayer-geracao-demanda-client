import { Th, Thead, Tr } from '@chakra-ui/react';
import { HeaderGroup, flexRender } from '@tanstack/react-table';

type TableHeaderProps<TData> = {
  headerGroups: HeaderGroup<TData>[];
};

export const TableHeader = <TData extends Record<string, unknown>>({
  headerGroups,
}: TableHeaderProps<TData>) => (
  <Thead>
    {headerGroups.map(({ id, headers }) => (
      <Tr key={id}>
        {headers.map((header) => (
          <Th key={header.id}>{flexRender(header.column.columnDef.header, header.getContext())}</Th>
        ))}
      </Tr>
    ))}
  </Thead>
);
