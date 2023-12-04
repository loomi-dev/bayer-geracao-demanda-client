import { Tbody as ChakraTbody, Td, Tr } from '@chakra-ui/react';
import { Row, flexRender } from '@tanstack/react-table';
import { MouseEvent } from 'react';

type TableBodyProps<TData> = {
  rows: Row<TData>[];
  onRowClick?: (row: Row<TData>, event: MouseEvent<HTMLTableRowElement>) => void;
};

export const TableBody = <TData extends Record<string, unknown>>({
  rows,
  onRowClick,
}: TableBodyProps<TData>) => (
  <ChakraTbody>
    {rows.map((row) => {
      const cells = row.getVisibleCells();

      return (
        <Tr onClick={(e) => onRowClick?.(row, e)} key={row.id}>
          {cells.map((cell) => (
            <Td key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</Td>
          ))}
        </Tr>
      );
    })}
    <Tr />
  </ChakraTbody>
);
