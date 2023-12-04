import { HStack } from '@chakra-ui/react';

import { CustomerFilter, DistrictFilter, RegionFilter, Search, TextInput } from '@/components';

export const TableFilter = () => (
  <HStack mt="6.2rem" w="100%" justifyContent="flex-end" spacing="1.2rem">
    <CustomerFilter />
    <DistrictFilter />
    <RegionFilter />
    <TextInput
      placeholder="Pesquisar por ação"
      leftIcon={<Search />}
      w="100%"
      inputGroupProps={{
        maxW: '32rem',
        minW: '25rem',
      }}
      variant="secondary2"
      pl="5rem"
    />
  </HStack>
);
