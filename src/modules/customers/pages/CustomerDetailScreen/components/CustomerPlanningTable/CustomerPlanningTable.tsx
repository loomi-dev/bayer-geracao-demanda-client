import { Flex, Text } from '@chakra-ui/react';

import { useGetFarmerPlans } from '@/api';
import { DynamicTable } from '@/components';

import { customerPlanningColumns } from './CustomerPlanningTable.columns';

type CustomerPlanningTableProps = {
  customerId: number;
};

export const CustomerPlanningTable = ({ customerId }: CustomerPlanningTableProps) => {
  const { data, isLoading } = useGetFarmerPlans({ farmerId: customerId });
  const plans = data?.data ?? [];
  return (
    <Flex flexDir="column" w="100%" gap="2.5rem" h="100%">
      <Text textStyle="h4">Planejamentos</Text>
      <Flex align="center" justify="space-between" px="1.6rem" w="100%">
        <Text textStyle="h5">Filtros</Text>
      </Flex>
      <DynamicTable<Planning>
        data={plans}
        isLoading={isLoading}
        columns={customerPlanningColumns}
        fallbackMessage="Nenhum planejamento encontrado"
        fallbackProps={{ fontSize: { base: '1.2rem', '3xl': '1.6rem' } }}
        hoverProps={{ bgColor: 'opacity.green.0.10', cursor: 'pointer' }}
      />
    </Flex>
  );
};
