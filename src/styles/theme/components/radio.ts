import { radioAnatomy } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers } from '@chakra-ui/react';

const { defineMultiStyleConfig } = createMultiStyleConfigHelpers(radioAnatomy.keys);

export const Radio = defineMultiStyleConfig({
  baseStyle: {},
  variants: {
    default: {
      label: {
        fontSize: '1.8rem',
        fontWeight: 'normal',
        color: 'greyscale.1000',
        opacity: '0.6',
      },
      control: {
        borderColor: 'surface.disabled',
        bg: 'greyscale.350',

        _checked: {
          color: 'text.brand',
          bg: 'text.brand',
          borderColor: 'surface.disabled',
          borderWidth: '4px',

          _hover: {
            color: 'text.brand',
            bg: 'text.brand',
            borderColor: 'surface.disabled',
          },
        },
      },
    },
  },
  sizes: {
    md: {
      control: {
        boxSize: '2.4rem',
      },
    },
  },
  defaultProps: {
    variant: 'default',
    size: 'md',
  },
});
