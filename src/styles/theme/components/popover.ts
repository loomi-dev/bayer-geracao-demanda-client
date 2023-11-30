import { popoverAnatomy } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers } from '@chakra-ui/react';

const { defineMultiStyleConfig } = createMultiStyleConfigHelpers(popoverAnatomy.keys);

export const Popover = defineMultiStyleConfig({
  variants: {
    primary: {
      content: {
        borderRadius: '2rem',
        border: '1px solid',
        borderColor: 'transparent',
        bgColor: 'surface.secondary',
        px: 'initial',
      },
      body: {
        px: '1.2rem',
      },
    },
    secondary: {
      content: {
        bgColor: 'opacity.white.0.50',
        borderRadius: '2rem',
        border: '1px solid',
        borderColor: 'transparent',
        backdropFilter: 'blur(22px)',
      },
      body: {
        pl: '2rem',
      },
    },
  },
  defaultProps: {
    variant: 'primary',
  },
});
