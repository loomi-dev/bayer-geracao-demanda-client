import { defineStyleConfig } from '@chakra-ui/react';

export const Menu = defineStyleConfig({
  variants: {
    filter: {
      button: {
        w: '15.5rem',
        h: '5rem',
        py: '1.2rem',
        px: '0.95rem',
        bgColor: 'surface.primary',
        border: '1px solid',
        borderColor: 'greyscale.25',
        borderRadius: '1.6rem',
      },
    },
  },
});
