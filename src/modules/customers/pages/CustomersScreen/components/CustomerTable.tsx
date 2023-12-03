import { Flex, HStack, Text } from '@chakra-ui/react';
import { useSession } from 'next-auth/react';

import { Customer, useGetCustomers } from '@/api/customer';
import { DistrictFilter, DynamicTable, RegionFilter, SearchIcon, TextInput } from '@/components';

import { CustomerColumns } from './CustomerTable.columns';

export const CustomerTable = () => {
  const session = useSession();
  const userId = session.data?.user.id;
  const { data, isLoading } = useGetCustomers(
    { id: userId, filter: {} },
    { enabled: Boolean(userId) },
  );
  const customers = data?.data ?? [];
  console.log(customers);
  return (
    <Flex flexDir="column" w="100%" gap="2.5rem" h="100%">
      <Text textStyle="h4">Planejamentos</Text>
      <Flex align="center" justify="space-between" px="1.6rem" w="100%">
        <Text textStyle="h5">Filtros</Text>
        <HStack gap="1.2rem">
          <DistrictFilter options={[]} />
          <RegionFilter options={[]} />
          <TextInput
            w="32rem"
            leftIcon={<SearchIcon />}
            bgColor="surface.primary"
            placeholder="Pesquisar por Nome ou CNPJ"
          />
        </HStack>
      </Flex>
      <DynamicTable<Customer> data={customers} columns={CustomerColumns}>
        {!customers.length && (
          <Flex justify="center" mt="1.6rem">
            <Text textStyle={{ lg: 'action4', '2xl': 'action3' }} color="text.secondary">
              Não existe clientes cadastrados na plataforma
            </Text>
          </Flex>
        )}
      </DynamicTable>
    </Flex>
  );
};
