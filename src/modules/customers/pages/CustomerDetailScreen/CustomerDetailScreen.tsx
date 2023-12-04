import { useRouter } from 'next/router';

import { useGetFarmer } from '@/api';
import { ChevronLeftIcon, Header } from '@/components';

export const CustomerDetailScreen = () => {
  const { push, query } = useRouter();
  const customerId = Number(query?.customer_id);
  const { data, isLoading } = useGetFarmer(
    { farmerId: customerId },
    { enabled: Boolean(customerId) },
  );
  const customer = data?.data[0];
  return (
    <>
      <Header
        label={`${customer?.name}`}
        onClick={() => push('/clientes')}
        icon={<ChevronLeftIcon fontSize={36} color="white" />}
        isLoading={isLoading}
      />
    </>
  );
};
