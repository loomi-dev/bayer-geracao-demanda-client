import { Flex } from '@chakra-ui/react';

import { Search, TextInput } from '@/components';

import { useDrawerExpenseReceipt } from '../../stores';

export const TableFilter = () => {
  console.log();

  const onOpen = useDrawerExpenseReceipt((state) => state.onOpen);

  return (
    <Flex mt="6.2rem" w="100%" justifyContent="flex-end">
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
        onClick={onOpen}
        // {...register('search')}
      />
    </Flex>
  );
};
