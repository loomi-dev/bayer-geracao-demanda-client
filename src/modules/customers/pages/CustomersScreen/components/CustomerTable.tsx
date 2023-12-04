import { Flex, HStack, Text } from '@chakra-ui/react';
import debounce from 'lodash.debounce';
import { useSession } from 'next-auth/react';
import { ChangeEvent, useState } from 'react';

import { Customer, useGetCustomers } from '@/api/customer';
import { DistrictFilter, DynamicTable, RegionFilter, SearchIcon, TextInput } from '@/components';

import { CustomerColumns } from './CustomerTable.columns';
const debouncedSearch = debounce(
  (value: string, setValue: (value: string) => void) => setValue(value),
  250,
);
export const CustomerTable = () => {
  const session = useSession();
  const userId = session.data?.user.id;
  const [search, setSearch] = useState('');
  const { data, isLoading } = useGetCustomers(
    { id: userId, filter: { search } },
    { enabled: Boolean(userId) },
  );
  const customers = data?.data ?? [];

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) =>
    debouncedSearch(e.target.value, setSearch);

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
            onChange={handleSearch}
          />
        </HStack>
      </Flex>
      <DynamicTable<Customer>
        data={customers}
        columns={CustomerColumns}
        isLoading={isLoading}
        fallbackMessage="Nenhum cliente encontrado"
        fallbackProps={{ fontSize: { base: '1.2rem', '3xl': '1.6rem' } }}
      />
    </Flex>
  );
};
