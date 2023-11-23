import { selectAnatomy } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers } from '@chakra-ui/react';

const { defineMultiStyleConfig } = createMultiStyleConfigHelpers(selectAnatomy.keys);

export const Select = defineMultiStyleConfig({
  baseStyle: {
    field: {
      borderColor: 'whiteAlpha.100',

      '& > option, & > optgroup': {
        bg: 'white.400',
      },
    },
  },
});
