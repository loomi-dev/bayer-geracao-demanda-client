import { DynamicTable } from '@/components/DynamicTable';

import { DetailTableColumns } from './DetailTable.columns';

const data: PlanningAction[] = [
  {
    id: 1,
    title: 'Ação 1',
    amountInCents: 1000000,
    type: 'relationship_task',
    status: 'not_evaluated',
  },
  {
    id: 2,
    title: 'Ação 2',
    amountInCents: 1000000,
    type: 'farm_kit',
    status: 'not_evaluated',
  },
];
export const DetailTable = () => (
  <DynamicTable<PlanningAction> data={data} columns={DetailTableColumns} />
);
