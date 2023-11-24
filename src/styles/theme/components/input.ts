import { defineStyleConfig } from '@chakra-ui/react';

export const Input = defineStyleConfig({
  variants: {
    text: {
      field: {
        borderRadius: '21.6rem',
        bgColor: 'greyscale.300',
        border: '1px solid',
        borderColor: 'opacity.border.14',
        fontSize: '1.9rem',
        fontWeight: 'normal',
        color: 'text.secondary',
        px: '2.1rem',
        py: '0.8rem',
        _placeholder: {
          fontSize: '1.9rem',
          fontWeight: 'normal',
          color: 'text.secondary',
        },
      },
    },
  },
});
