import { Tbody as ChakraTbody, Td, Tr } from '@chakra-ui/react';
import { Row, flexRender } from '@tanstack/react-table';

type TableBodyProps<TData> = {
  rows: Row<TData>[];
};

export const TableBody = <TData extends Record<string, unknown>>({
  rows,
}: TableBodyProps<TData>) => (
  <ChakraTbody>
    {rows.map((row) => {
      const cells = row.getVisibleCells();

      return (
        <Tr key={row.id}>
          {cells.map((cell) => (
            <Td key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</Td>
          ))}
        </Tr>
      );
    })}
    <Tr />
  </ChakraTbody>
);
