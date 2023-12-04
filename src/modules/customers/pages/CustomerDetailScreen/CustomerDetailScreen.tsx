import { useRouter } from 'next/router';

import { ChevronLeftIcon, Header } from '@/components';
import { useGetPlanningStatistics } from '@/modules/planning/api';

import { CustomerStatisticsSection } from './components';

export const CustomerDetailScreen = () => {
  const { push, query } = useRouter();
  const customerId = Number(query.id);

  const { data: dataGetPlanningStatistics, isLoading } = useGetPlanningStatistics(
    {
      userId: customerId,
    },
    {
      enabled: Boolean(customerId),
    },
  );

  const statistics = dataGetPlanningStatistics?.data[0];
  return (
    <>
      <Header
        label={`${statistics?.name}`}
        onClick={() => push('/clientes')}
        icon={<ChevronLeftIcon fontSize={36} color="white" />}
        isLoading={isLoading}
      />
      <CustomerStatisticsSection summary={statistics?.planning_summary} isLoading={isLoading} />
    </>
  );
};
