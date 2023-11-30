import { PopoverHeader } from '@chakra-ui/react';

import { SearchIcon } from '@/components/icons';
import { TextInput, TextInputProps } from '@/components/TextInput';

type FilterHeaderProps = TextInputProps;

export const FilterHeader = ({ ...props }: FilterHeaderProps) => (
  <PopoverHeader>
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
