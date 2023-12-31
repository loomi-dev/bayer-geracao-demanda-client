import { checkboxAnatomy } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers } from '@chakra-ui/react';

const { defineMultiStyleConfig } = createMultiStyleConfigHelpers(checkboxAnatomy.keys);

export const Checkbox = defineMultiStyleConfig({
  baseStyle: {
    control: {
      transition: 'all 0.2s ease',
    },
    label: {
      ml: '1.2rem',
    },
  },
  variants: {
    default: {
      control: {
        bg: 'surface.secondary',
        borderColor: 'surface.disabled',
        borderRadius: '0.8rem',
        _checked: {
          color: 'surface.primary',
          bg: 'red.danger_50',
          borderColor: 'surface.disabled',
          _hover: {
            bg: 'red.danger_60',
            borderColor: 'surface.disabled',
          },
        },
        _indeterminate: {
          color: 'surface.primary',
          bg: 'red.danger_50',
          borderColor: 'surface.disabled',
          _hover: {
            bg: 'red.danger_60',
            borderColor: 'surface.disabled',
          },
        },
      },
      label: {
        fontSize: '1.6rem',
        fontWeight: 'normal',
        color: 'text.primary',
      },
      icon: {
        fontSize: '1.2rem',
      },
    },
    round: {
      control: {
        bg: 'surface.secondary',
        rounded: 'full',
        borderColor: 'surface.disabled',
        _checked: {
          color: 'surface.primary',
          bg: 'red.danger_50',
          borderColor: 'surface.disabled',
          _hover: {
            bg: 'red.danger_60',
            borderColor: 'surface.disabled',
          },
        },
      },
      label: {
        fontSize: '1.6rem',
        fontWeight: 'normal',
        color: 'text.primary',
      },
      icon: {
        fontSize: '1.2rem',
      },
    },
  },
  sizes: {
    md: {
      control: {
        boxSize: '2.4rem',
      },
    },
    sm: {
      control: {
        boxSize: '2rem',
      },
    },
  },
  defaultProps: {
    variant: 'default',
    size: 'md',
  },
});
