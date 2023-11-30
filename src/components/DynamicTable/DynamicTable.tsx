import { TableContainer, Table, TableProps } from '@chakra-ui/react';
import { useReactTable, TableOptions, getCoreRowModel } from '@tanstack/react-table';

import { TableBody } from './TableBody';
import { TableHeader } from './TableHead';

type DynamicTableProps<TData> = {
  data: TableOptions<TData>['data'];
  columns?: TableOptions<TData>['columns'];
} & TableProps;

export const DynamicTable = <TData extends Record<string, unknown>>({
  data = [],
  columns = [],
  variant = 'primary',
  ...restProps
}: DynamicTableProps<TData>) => {
  const { getHeaderGroups, getRowModel } = useReactTable<TData>({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  const headerGroups = getHeaderGroups();
  const rows = getRowModel().rows;

  return (
    <TableContainer
      layerStyle={variant === 'primary' ? 'card' : ''}
      borderRadius={variant === 'primary' ? '3.6rem' : '1.9rem'}
      pb={variant === 'primary' ? '1.2rem' : ''}
      boxShadow={variant === 'primary' ? 'primary' : 'fourth'}
      bg="surface.secondary"
    >
      <Table variant={variant} {...restProps}>
        <TableHeader<TData> headerGroups={headerGroups} />

        <TableBody<TData> rows={rows} />
      </Table>
    </TableContainer>
  );
};
