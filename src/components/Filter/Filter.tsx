import { Button, Popover, PopoverBody, PopoverContent, PopoverTrigger } from '@chakra-ui/react';
import { JSXElementConstructor, ReactElement } from 'react';

import { ChevronDownIcon } from '../icons';

import { FilterOption, FilterOptionProps } from './components';

type FilterProps = {
  label: string;
  leftIcon?: ReactElement<any, string | JSXElementConstructor<any>> | undefined;
  options?: FilterOptionProps[];
};

export const Filter = ({ label, leftIcon, options = [] }: FilterProps) => (
  <Popover>
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
    <PopoverContent>
      <PopoverBody>
        {options.map((option) => (
          <FilterOption
            key={option.value}
            label={option.label}
            subLabel={option.value}
            value={option.value}
          />
        ))}
      </PopoverBody>
    </PopoverContent>
  </Popover>
);
