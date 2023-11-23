import { defineStyleConfig } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';

export const Textarea = defineStyleConfig({
  variants: {
    outline: (props) => ({
      bg: mode('blackAlpha.50', 'whiteAlpha.50')(props),
    }),
  },
  defaultProps: {
    variant: 'outline',
  },
});
