import { defineStyleConfig } from '@chakra-ui/react';

export const Input = defineStyleConfig({
  variants: {
    text: {
      field: {
        borderRadius: '21.6rem',
        bgColor: 'greyscale.300',
        border: '1px solid',
        borderColor: 'opacity.border.14',
      },
    },
  },
});
