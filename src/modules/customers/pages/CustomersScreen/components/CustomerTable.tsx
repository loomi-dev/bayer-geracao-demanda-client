import { Flex, HStack, Text } from '@chakra-ui/react';

import {
  DistrictFilter,
  DynamicTable,
  PartnerFilter,
  RegionFilter,
  SearchIcon,
  TextInput,
} from '@/components';
import { useGetCustomers } from '@/modules/customers/api';

import { CustomerColumns } from './CustomerTable.columns';

export const CustomerTable = () => {
  const { data, isLoading } = useGetCustomers({});

  return (
    <Flex flexDir="column" w="100%" gap="2.5rem" h="100%">
      <Text textStyle="h4">Planejamentos</Text>
      <Flex align="center" justify="space-between" px="1.6rem" w="100%">
        <Text textStyle="h5">Filtros</Text>
        <HStack gap="1.2rem">
          <PartnerFilter options={[]} />
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
      <DynamicTable data={[]} columns={CustomerColumns}>
        <Flex justify="center" mt="1.6rem">
          <Text textStyle={{ lg: 'action4', '2xl': 'action3' }} color="text.secondary">
            Não existe clientes cadastrados na plataforma
          </Text>
        </Flex>
      </DynamicTable>
    </Flex>
  );
};
