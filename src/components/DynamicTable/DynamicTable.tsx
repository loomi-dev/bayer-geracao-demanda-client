import {
  TableContainer,
  Table,
  TableProps,
  Text,
  TextProps,
  SystemStyleObject,
} from '@chakra-ui/react';
import { useReactTable, TableOptions, getCoreRowModel, Row } from '@tanstack/react-table';
import { MouseEvent, ReactNode } from 'react';

import { TableBody } from './TableBody';
import { TableBodySkeleton } from './TableBodySkeleton';
import { TableHeader } from './TableHead';

type DynamicTableProps<TData> = {
  data: TableOptions<TData>['data'];
  columns?: TableOptions<TData>['columns'];
  children?: ReactNode;
  isLoading?: boolean;
  fallbackMessage?: string;
  fallbackProps?: TextProps;
  hoverProps?: SystemStyleObject;
  onRowClick?: (row: Row<TData>, event: MouseEvent<HTMLTableRowElement>) => void;
} & TableProps;

export const DynamicTable = <TData extends Record<string, unknown>>({
  data = [],
  columns = [],
  variant = 'primary',
  isLoading = false,
  fallbackMessage = 'Não existe dados encontrados.',
  fallbackProps,
  hoverProps,
  children,

  onRowClick,
  ...restProps
}: DynamicTableProps<TData>) => {
  const { getHeaderGroups, getRowModel } = useReactTable<TData>({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  const headerGroups = getHeaderGroups();
  const headerColumnsAmount = headerGroups[0].headers.length ?? 1;
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

        {rows.length > 0 && !isLoading && (
          <TableBody<TData> hoverProps={hoverProps} rows={rows} onRowClick={onRowClick} />
        )}

        {isLoading && <TableBodySkeleton headersAmount={headerColumnsAmount} />}
      </Table>

      {rows.length === 0 && !isLoading && (
        <Text
          w="full"
          textStyle="action4"
          color="text.secondary"
          align="center"
          lineHeight="6rem"
          py="1.6rem"
          {...fallbackProps}
        >
          {fallbackMessage}
        </Text>
      )}

      {children}
    </TableContainer>
  );
};
