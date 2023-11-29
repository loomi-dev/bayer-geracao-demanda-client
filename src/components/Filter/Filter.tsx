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
      <Button variant="filter" leftIcon={leftIcon} rightIcon={<ChevronDownIcon />}>
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
