import { useRouter } from 'next/router';

import { ChevronLeftIcon, Header } from '@/components';

import { CustomerPlanningActionsTable, CustomerPlanningDetailCards } from './components';

export const CustomerPlanningDetailScreen = () => {
  const { push, query } = useRouter();
  const customer_id = Number(query.customer_id);

  return (
    <>
      <Header
        label="Detalhamento do planejamento"
        onClick={() => push(`/clientes/${customer_id}`)}
        icon={<ChevronLeftIcon fontSize={36} color="white" />}
      />
      <CustomerPlanningDetailCards />
      <CustomerPlanningActionsTable />
    </>
  );
};
