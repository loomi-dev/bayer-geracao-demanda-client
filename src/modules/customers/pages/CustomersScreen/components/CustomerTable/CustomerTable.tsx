import { Flex, HStack, Text } from '@chakra-ui/react';
import { Row } from '@tanstack/react-table';
import debounce from 'lodash.debounce';
import { useRouter } from 'next/router';
import { useSession } from 'next-auth/react';
import { ChangeEvent, useState } from 'react';

import { CustomerPlannings, useGetCustomerPlanningsByUserId } from '@/api/customer';
import { DistrictFilter, DynamicTable, Pagination, RegionFilter, SearchFilter } from '@/components';
import { usePagination } from '@/hooks';

import { CustomerColumns } from './CustomerTable.columns';

export const CustomerTable = () => {
  const session = useSession();
  const { pathname, push } = useRouter();
  const managerId = session.data?.user?.manager?.id as number;
  const { currentPage, handleNextPage, handlePreviousPage } = usePagination('customer_table');
  const [search, setSearch] = useState('');
  const [regions, setRegions] = useState<string[]>([]);
  const [districts, setDistricts] = useState<string[]>([]);
  const { data, isLoading, isFetching } = useGetCustomerPlanningsByUserId(
    {
      managerId,
      filter: { search, regions, districts },
      pagination: { page: currentPage, pageSize: 5 },
    },
    { enabled: Boolean(managerId) },
  );
  const customers = data?.data ?? [];

  const handleSearch = debounce(
    (e: ChangeEvent<HTMLInputElement>) => setSearch(e.target.value),
    250,
  );
  const handleRowClick = (row: Row<CustomerPlannings>) =>
    push(`${pathname}/${row.original.farmer.id}`);

  const rowProps = (row: Row<CustomerPlannings>) => {
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
        <HStack gap="1.6rem">
          <DistrictFilter selectedValues={districts} onSelect={setDistricts} />
          <RegionFilter selectedValues={regions} onSelect={setRegions} />
          <SearchFilter placeholder="Pesquisar por Nome ou CNPJ" onChange={handleSearch} />
        </HStack>
      </Flex>
      <DynamicTable<CustomerPlannings>
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
