import {
  TableContainer,
  Table,
  Text,
  TextProps,
  SystemStyleObject,
  TableContainerProps,
  Box,
  BoxProps,
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
  variant?: 'primary' | 'secondary' | 'third';
  tableContainerProps?: TableContainerProps;
  onRowClick?: (row: Row<TData>, event: MouseEvent<HTMLTableRowElement>) => void;
} & BoxProps;

export const DynamicTable = <TData extends Record<string, unknown>>({
  data = [],
  columns = [],
  variant = 'primary',
  isLoading = false,
  fallbackMessage = 'Não existe dados encontrados.',
  fallbackProps,
  hoverProps,
  children,
  tableContainerProps,
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
    <Box
      layerStyle={tableContainerVariants[variant]?.layerStyle}
      borderRadius={tableContainerVariants[variant]?.borderRadius}
      pb={tableContainerVariants[variant]?.pb}
      boxShadow={tableContainerVariants[variant]?.boxShadow}
      bg="surface.secondary"
      overflow="hidden"
      w="full"
      {...restProps}
    >
      <TableContainer minW="full" overflowX="auto" {...tableContainerProps}>
        <Table variant={variant}>
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
      </TableContainer>

      {children}
    </Box>
  );
};
