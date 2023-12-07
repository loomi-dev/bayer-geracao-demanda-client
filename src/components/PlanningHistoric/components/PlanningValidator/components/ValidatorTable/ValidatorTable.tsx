import { DynamicTable } from '@/components/DynamicTable';

import { ValidatorTableColumns } from './ValidatorTable.columns';

type ValidatorTableProps = {
  isApproving: boolean;
  actions: PlanningAction[];
};
export const ValidatorTable = ({ actions, isApproving }: ValidatorTableProps) => (
  <DynamicTable variant="third" data={actions} columns={ValidatorTableColumns(isApproving)} />
);
