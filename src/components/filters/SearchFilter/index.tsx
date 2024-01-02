import { Box } from '@chakra-ui/react';

import { TextInput, SearchIcon, TextInputProps } from '@/components';

type SearchFilterProps = TextInputProps;

export const SearchFilter = ({ ...props }: SearchFilterProps) => (
  <Box>
    <TextInput
      w="32rem"
      h="5rem"
      borderRadius="1.6rem"
      leftIcon={<SearchIcon />}
      bgColor="surface.primary"
      {...props}
    />
  </Box>
);
