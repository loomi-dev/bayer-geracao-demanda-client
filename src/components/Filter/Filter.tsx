import {
  BoxProps,
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
import { JSXElementConstructor, ReactElement, ReactNode } from 'react';

import { ChevronDownIcon } from '../icons';

import { FilterOption, FilterOptionProps } from './components';

export type FilterProps = {
  label: string;
  leftIcon?: ReactElement<any, string | JSXElementConstructor<any>> | undefined;
  options?: FilterOptionProps[];
  children?: ReactNode;
  popoverBodyStyle?: BoxProps;
};

export const Filter = ({
  label,
  leftIcon,
  children,
  options = [],
  popoverBodyStyle = {},
}: FilterProps) => (
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
    <PopoverContent overflowY="scroll" w="28rem">
      <PopoverHeader p="1.6rem">{children}</PopoverHeader>
      <PopoverBody {...popoverBodyStyle}>
        {options.map((option) => (
          <FilterOption key={option.value} label={option.label} value={option.value} />
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
