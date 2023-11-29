import { Flex, HStack, Menu, MenuButton, Text } from '@chakra-ui/react';
import { ReactNode } from 'react';

import { ChevronDownIcon } from '../icons';

type FilterOptions<T> = {
  label: string;
  value: T;
};

type FilterProps<T> = {
  label: string;
  leftIcon?: ReactNode;
  options?: FilterOptions<T>[];
};

export const Filter = <T,>({ label, leftIcon, options = [] }: FilterProps<T>) => (
  <Menu variant="filter">
    <MenuButton>
      <Flex align="center" justify="space-between">
        <HStack gap="1.2rem">
          {leftIcon}
          <Text>{label}</Text>
        </HStack>
        <ChevronDownIcon />
      </Flex>
    </MenuButton>
  </Menu>
);
