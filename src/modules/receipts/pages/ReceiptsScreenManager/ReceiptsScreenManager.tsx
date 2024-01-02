import { HStack, VStack } from '@chakra-ui/react';
import debounce from 'lodash.debounce';
import React, { ChangeEvent, useState } from 'react';

import { useGetReceiptsActions } from '@/api';
import { CustomerFilter, Pagination, RegionFilter, SearchFilter } from '@/components';
import { usePagination } from '@/hooks';

import { FinalizedTables, RunningTable } from './components';

export const ReceiptsScreenManager = () => {
  const { currentPage, handleNextPage, handlePreviousPage } = usePagination('actions_table');
  const [search, setSearch] = useState('');
  const [regions, setRegions] = useState<string[]>([]);
  const [selectedCustomers, setSelectedCustomers] = useState<string[]>([]);
  const {
    data: dataGetReceiptsActions,
    isLoading: isLoadingGetReceiptsActions,
    isFetching: isFetchingGetReceiptsActions,
  } = useGetReceiptsActions({
    filter: {
      regions,
      search,
      customers: selectedCustomers,
    },
    pagination: {
      page: currentPage,
      pageSize: 5,
    },
  });

  const isLoadingReceiptsActions = isLoadingGetReceiptsActions || isFetchingGetReceiptsActions;
  const countReceiptsActions = dataGetReceiptsActions?.data.length ?? 0;
  const totalReceiptsActionsPage = dataGetReceiptsActions?.meta.pagination.pageCount ?? 1;

  const separateData = dataGetReceiptsActions?.data?.reduce(
    (prev, action) => {
      if (action.status === 'accepted') {
        prev.finished.push(action);
      } else {
        prev.running.push(action);
      }
      return prev;
    },
    {
      finished: [] as ReceiptAction[],
      running: [] as ReceiptAction[],
    },
  );

  const handleSearch = debounce(
    (e: ChangeEvent<HTMLInputElement>) => setSearch(e.target.value),
    250,
  );

  return (
    <VStack align="flex-start" w="full" spacing="3.2rem">
      <HStack gap="1.6rem" w="100%" justify="flex-end">
        <CustomerFilter selectedValues={selectedCustomers} onSelect={setSelectedCustomers} />
        <RegionFilter selectedValues={regions} onSelect={setRegions} />
        <SearchFilter placeholder="Pesquisar por ação" onChange={handleSearch} />
      </HStack>

      <RunningTable actions={separateData?.running ?? []} isLoading={isLoadingReceiptsActions} />
      <FinalizedTables
        actions={separateData?.finished ?? []}
        isLoading={isLoadingReceiptsActions}
      />

      <Pagination
        page={currentPage}
        countItems={countReceiptsActions}
        totalPages={totalReceiptsActionsPage}
        onPreviousPage={handlePreviousPage}
        onNextPage={handleNextPage}
        mt="1.6rem"
      />
    </VStack>
  );
};
