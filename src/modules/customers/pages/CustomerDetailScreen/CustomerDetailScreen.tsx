import { useRouter } from 'next/router';

import { useGetFarmer } from '@/api';
import { BigChevronLeftIcon, Header } from '@/components';

export const CustomerDetailScreen = () => {
  const { push, query } = useRouter();
  const customerId = Number(query.id);
  const { data, isLoading } = useGetFarmer({ farmerId: customerId });
  const customer = data?.data[0];
  return (
    <>
      <Header
        label={`${customer?.name}`}
        onClick={() => push('/clientes')}
        icon={<BigChevronLeftIcon />}
        isLoading={isLoading}
      />
    </>
  );
};
