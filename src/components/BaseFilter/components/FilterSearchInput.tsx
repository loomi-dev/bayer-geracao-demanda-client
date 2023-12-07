import { PopoverHeader } from '@chakra-ui/react';

import { SearchIcon } from '@/components/icons';
import { TextInput, TextInputProps } from '@/components/TextInput';

type FilterSearchInputProps = TextInputProps;

export const FilterSearchInput = ({ ...props }: FilterSearchInputProps) => (
  <PopoverHeader {...props}>
    <TextInput
      variant="primary"
      borderRadius="1.6rem"
      color="text.primary"
      py="1.2rem"
      bgColor="surface.primary"
      leftIcon={<SearchIcon />}
      {...props}
    />
  </PopoverHeader>
);
