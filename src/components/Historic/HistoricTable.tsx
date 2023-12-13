import { DynamicTable } from '../DynamicTable';

import { HistoricTableColumns } from './HistoricTable.columns';

type HistoricTableProps = {
  data: PlanningAction[];
  isLoading?: boolean;
  isApproving?: boolean;
};

export const HistoricTable = ({ data, isLoading = false, isApproving }: HistoricTableProps) => (
  <DynamicTable<PlanningAction>
    borderRadius="1.6rem"
    variant="third"
    data={data}
    isLoading={isLoading}
    columns={HistoricTableColumns(isApproving)}
  />
);
