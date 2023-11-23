import { defineStyleConfig } from '@chakra-ui/react';

export const Button = defineStyleConfig({
  baseStyle: {},
  variants: {
    // custom variants
    outline: {
      bg: 'transparent',
      color: 'primary',
      border: '2px solid',
      borderColor: 'primary',
      borderRadius: 'full',
    },
  },
});
