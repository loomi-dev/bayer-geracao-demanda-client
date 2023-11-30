import { PopoverBody, PopoverBodyProps } from '@chakra-ui/react';

import { FilterOptionProps } from '../types';

import { FilterOption } from './FilterOption';

type FilterBodyProps = { options?: FilterOptionProps[] } & PopoverBodyProps;

export const FilterBody = ({ options = [], ...props }: FilterBodyProps) => (
  <PopoverBody {...props}>
    {options.map((option) => (
      <FilterOption
        key={option.value}
        label={option.label}
        subLabel={option.subLabel}
        value={option.value}
      />
    ))}
  </PopoverBody>
);
