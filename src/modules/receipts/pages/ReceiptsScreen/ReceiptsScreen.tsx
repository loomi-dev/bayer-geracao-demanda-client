import { DrawerExpenseReceipt, FinalizedTables, RunningTable, TableFilter } from './components';

export const ReceiptsScreen = () => (
  <>
    <DrawerExpenseReceipt />

    <TableFilter />

    <RunningTable />
    <FinalizedTables />
  </>
);
