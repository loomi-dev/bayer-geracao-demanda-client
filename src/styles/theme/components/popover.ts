import { popoverAnatomy } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers } from '@chakra-ui/react';

const { defineMultiStyleConfig } = createMultiStyleConfigHelpers(popoverAnatomy.keys);

export const Popover = defineMultiStyleConfig({
  variants: {
    filter: {
      content: {
        borderRadius: '2rem',
        border: '1px solid',
        borderColor: 'surface.primary',
        bgColor: 'surface.secondary',
        px: 'initial',
      },
      body: {
        px: '1.2rem',
      },
    },
  },
  defaultProps: {
    variant: 'filter',
  },
});
