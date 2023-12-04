import { TableContainer, Table, Text, TextProps, TableContainerProps } from '@chakra-ui/react';
import { useReactTable, TableOptions, getCoreRowModel } from '@tanstack/react-table';
import { ReactNode } from 'react';

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
  variant?: 'primary' | 'secondary' | 'third';
} & TableContainerProps;

export const DynamicTable = <TData extends Record<string, unknown>>({
  data = [],
  columns = [],
  variant = 'primary',
  isLoading = false,
  fallbackMessage = 'Não existe dados encontrados.',
  fallbackProps,
  children,
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

        {rows.length > 0 && !isLoading && <TableBody<TData> rows={rows} />}

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
