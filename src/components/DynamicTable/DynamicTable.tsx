import { TableContainer, Table, TableContainerProps } from '@chakra-ui/react';
import { useReactTable, TableOptions, getCoreRowModel } from '@tanstack/react-table';
import { ReactNode } from 'react';

import { TableBody } from './TableBody';
import { TableHeader } from './TableHead';

type DynamicTableProps<TData> = {
  data: TableOptions<TData>['data'];
  columns?: TableOptions<TData>['columns'];
  children?: ReactNode;
  variant?: 'primary' | 'secondary' | 'third';
} & TableContainerProps;

export const DynamicTable = <TData extends Record<string, unknown>>({
  data = [],
  columns = [],
  variant = 'primary',
  children,
  ...restProps
}: DynamicTableProps<TData>) => {
  const { getHeaderGroups, getRowModel } = useReactTable<TData>({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  const headerGroups = getHeaderGroups();
  const rows = getRowModel().rows;

  const tableContainerVariants = {
    primary: {
      layerStyle: 'card',
      borderRadius: '3.6rem',
      pb: '1.2rem',
      boxShadow: 'primary',
    },
    secondary: {
      layerStyle: '',
      borderRadius: '1.9rem',
      pb: '',
      boxShadow: 'fourth',
    },
    third: {
      layerStyle: 'card',
      borderRadius: '3.2rem',
      pb: '2rem',
      boxShadow: 'primary',
    },
  } as const;

  return (
    <TableContainer
      layerStyle={tableContainerVariants[variant]?.layerStyle}
      borderRadius={tableContainerVariants[variant]?.borderRadius}
      pb={tableContainerVariants[variant]?.pb}
      boxShadow={tableContainerVariants[variant]?.boxShadow}
      bg="surface.secondary"
      {...restProps}
    >
      <Table variant={variant}>
        <TableHeader<TData> headerGroups={headerGroups} />

        <TableBody<TData> rows={rows} />
      </Table>

      {children}
    </TableContainer>
  );
};
