import { useRouter } from 'next/router';

import { useGetFarmer, useGetPlanningStatistics } from '@/api';
import { ChevronLeftIcon, Header } from '@/components';
import { Mask } from '@/utils';

import { CustomerPlanningTable, CustomerStatisticsSection } from './components';

export const CustomerDetailScreen = () => {
  const { push, query } = useRouter();
  const customerId = Number(query.customer_id);
  const { data: getCustomerData, isLoading: isLoadingCustomer } = useGetFarmer(
    {
      farmerId: customerId,
    },
    { enabled: Boolean(customerId) },
  );
  const {
    data: getPlanningData,
    isLoading: isLoadingPlanning,
    isFetching: isFetchingPlanning,
  } = useGetPlanningStatistics(
    {
      userId: customerId,
    },
    {
      enabled: Boolean(customerId),
    },
  );
  const customer = getCustomerData?.data[0];
  const customerPlannings = getPlanningData?.data[0];

  return (
    <>
      <Header
        label={`${customer?.users_permissions_user?.username ?? ''}`}
        subLabel={Mask.formatCNPJ(customer?.company_identifier ?? '')}
        onClick={() => push('/clientes')}
        icon={<ChevronLeftIcon fontSize={36} color="white" />}
        isLoading={isLoadingCustomer}
      />
      <CustomerStatisticsSection
        customerId={customerId}
        summary={customerPlannings?.planning_summary}
        isLoading={isLoadingPlanning || isFetchingPlanning}
      />
      <CustomerPlanningTable />
    </>
  );
};
