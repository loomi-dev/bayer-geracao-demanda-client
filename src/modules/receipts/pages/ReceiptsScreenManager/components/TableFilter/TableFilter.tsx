import { HStack } from '@chakra-ui/react';

import { SearchIcon, TextInput } from '@/components';

export const TableFilter = () => (
  <HStack w="full" justifyContent="flex-end">
    <TextInput
      placeholder="Pesquisar por ação"
      leftIcon={<SearchIcon />}
      w="100%"
      inputGroupProps={{
        maxW: '32rem',
        minW: '25rem',
      }}
      variant="third"
      pl="5rem"
    />
  </HStack>
);
