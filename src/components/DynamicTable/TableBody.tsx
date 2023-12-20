import { Tbody as ChakraTbody, SystemStyleObject, Td, Tr } from '@chakra-ui/react';
import { Row, flexRender } from '@tanstack/react-table';
import { CSSProperties, MouseEvent } from 'react';

type TableBodyProps<TData> = {
  rows: Row<TData>[];
  onRowClick?: (row: Row<TData>, event: MouseEvent<HTMLTableRowElement>) => void;
  hoverProps?: SystemStyleObject;
  rowProps?: (row: Row<TData>) => CSSProperties;
};

export const TableBody = <TData extends Record<string, unknown>>({
  rows,
  hoverProps,
  rowProps,
  onRowClick,
}: TableBodyProps<TData>) => (
  <ChakraTbody>
    {rows.map((row) => {
      const cells = row.getVisibleCells();

      return (
        <Tr
          onClick={(e) => onRowClick?.(row, e)}
          key={row.id}
          _hover={hoverProps}
          style={rowProps && rowProps(row)}
        >
          {cells.map((cell) => (
            <Td key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</Td>
          ))}
        </Tr>
      );
    })}
    <Tr />
  </ChakraTbody>
);
