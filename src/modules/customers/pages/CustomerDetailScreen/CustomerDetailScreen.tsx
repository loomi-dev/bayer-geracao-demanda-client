import { useRouter } from 'next/router';

import { useGetPlanningStatistics } from '@/api';
import { ChevronLeftIcon, Header } from '@/components';

import { CustomerPlanningTable, CustomerStatisticsSection } from './components';

export const CustomerDetailScreen = () => {
  const { push, query } = useRouter();
  const customerId = Number(query.customer_id);
  const { data, isLoading } = useGetPlanningStatistics(
    {
      userId: customerId,
    },
    {
      enabled: Boolean(customerId),
    },
  );

  const farmer = data?.data[0];
  return (
    <>
      <Header
        label={`${farmer?.name}`}
        onClick={() => push('/clientes')}
        icon={<ChevronLeftIcon fontSize={36} color="white" />}
        isLoading={isLoading}
      />
      <CustomerStatisticsSection summary={farmer?.planning_summary} isLoading={isLoading} />
      <CustomerPlanningTable customerId={customerId} />
    </>
  );
};
