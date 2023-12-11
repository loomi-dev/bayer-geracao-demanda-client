import { DynamicTable } from '../DynamicTable';

import { HistoricTableColumns } from './HistoricTable.columns';

type HistoricTableProps = {
  data: PlanningAction[];
  isApproving?: boolean;
};

export const HistoricTable = ({ data, isApproving }: HistoricTableProps) => (
  <DynamicTable<PlanningAction>
    borderRadius="1.6rem"
    variant="third"
    data={data}
    columns={HistoricTableColumns(isApproving)}
  />
);
