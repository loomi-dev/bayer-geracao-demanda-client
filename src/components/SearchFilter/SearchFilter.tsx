import {
  Button,
  Flex,
  Popover,
  PopoverBody,
  PopoverContent,
  PopoverFooter,
  PopoverHeader,
  PopoverTrigger,
  Text,
} from '@chakra-ui/react';
import { JSXElementConstructor, ReactElement } from 'react';

import { ChevronDownIcon, SearchIcon } from '../icons';
import { TextInput } from '../TextInput';

import { FilterOption, FilterOptionProps } from './components';

type SearchFilterProps = {
  label: string;
  placeholder?: string;
  leftIcon?: ReactElement<any, string | JSXElementConstructor<any>> | undefined;
  options?: FilterOptionProps[];
};

export const SearchFilter = ({ label, placeholder, leftIcon, options = [] }: SearchFilterProps) => (
  <Popover placement="bottom-end">
    <PopoverTrigger>
      <Button
        variant="white"
        shadow="initial"
        w="15.5rem"
        h="5rem"
        py="1.2rem"
        px="0.95rem"
        bgColor="surface.primary"
        border="1px solid"
        borderColor="greyscale.25"
        borderRadius="1.6rem"
        leftIcon={leftIcon}
        rightIcon={<ChevronDownIcon />}
        color="text.copytext"
      >
        {label}
      </Button>
    </PopoverTrigger>
    <PopoverContent overflowY="scroll" w="31rem">
      <PopoverHeader p="1.6rem">
        <TextInput
          variant="primary"
          borderRadius="1.6rem"
          color="text.primary"
          py="1.2rem"
          bgColor="surface.primary"
          placeholder={placeholder}
          leftIcon={<SearchIcon />}
        />
      </PopoverHeader>
      <PopoverBody h="35rem" overflowY="scroll">
        {options.map((option) => (
          <FilterOption
            key={option.value}
            label={option.label}
            subLabel={option.subLabel ?? option.value}
            value={option.value}
          />
        ))}
      </PopoverBody>
      <PopoverFooter mt="1rem" borderTop="1px solid" borderTopColor="surface.primary">
        <Flex py="0.5rem" justify="center" gap="1rem">
          <Text as="strong">{options.length}</Text>
          <Text>{label}</Text>
        </Flex>
      </PopoverFooter>
    </PopoverContent>
  </Popover>
);
