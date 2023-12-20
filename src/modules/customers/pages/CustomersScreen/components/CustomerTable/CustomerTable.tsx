import { Flex, HStack, Text } from '@chakra-ui/react';
import { Row } from '@tanstack/react-table';
import debounce from 'lodash.debounce';
import { useRouter } from 'next/router';
import { useSession } from 'next-auth/react';
import { ChangeEvent, useState } from 'react';

import { Customer, useGetCustomers } from '@/api/customer';
import { CustomerFilter, DynamicTable, Pagination, SearchIcon, TextInput } from '@/components';
import { usePagination } from '@/hooks';

import { CustomerColumns } from './CustomerTable.columns';

export const CustomerTable = () => {
  const session = useSession();
  const { pathname, push } = useRouter();
  const userId = session.data?.user.id as number;
  const { currentPage, handleNextPage, handlePreviousPage } = usePagination('customer_table');
  const [search, setSearch] = useState('');
  const { data, isLoading, isFetching } = useGetCustomers(
    {
      id: userId,
      filter: { search },
      pagination: { page: currentPage, pageSize: 5 },
    },
    { enabled: Boolean(userId) },
  );
  const customers = data?.data ?? [];

  const handleSearch = debounce(
    (e: ChangeEvent<HTMLInputElement>) => setSearch(e.target.value),
    250,
  );
  const handleRowClick = (row: Row<Customer>) => push(`${pathname}/${row.original.farmer.id}`);

  const rowProps = (row: Row<Customer>) => {
    const planningStatus = row.original.historic?.at(-1)?.status;
    const style =
      planningStatus === 'ready_for_evaluation' ? { background: 'rgba(55, 199, 69, 0.1)' } : {};
    return style;
  };

  return (
    <Flex flexDir="column" w="100%" gap="2.5rem" h="100%">
      <Text textStyle="h4">Planejamentos</Text>
      <Flex align="center" justify="space-between" px="1.6rem" w="100%">
        <Text textStyle="h5">Filtros</Text>
        <HStack gap="1.2rem">
          <CustomerFilter customers={customers} />
          <TextInput
            w="32rem"
            borderRadius="1.6rem"
            leftIcon={<SearchIcon />}
            bgColor="surface.primary"
            placeholder="Pesquisar por Nome ou CNPJ"
            onChange={handleSearch}
          />
        </HStack>
      </Flex>
      <DynamicTable<Customer>
        rowProps={rowProps}
        data={customers}
        columns={CustomerColumns}
        isLoading={isLoading || isFetching}
        fallbackMessage="Nenhum cliente encontrado"
        fallbackProps={{ fontSize: { base: '1.2rem', '3xl': '1.6rem' } }}
        onRowClick={handleRowClick}
        hoverProps={{
          bg: 'greyscale.500',
          cursor: 'pointer',
        }}
      />
      <Pagination
        page={currentPage}
        countItems={customers.length}
        totalPages={data?.meta.pagination.pageCount ?? 1}
        onNextPage={handleNextPage}
        onPreviousPage={handlePreviousPage}
      />
    </Flex>
  );
};
