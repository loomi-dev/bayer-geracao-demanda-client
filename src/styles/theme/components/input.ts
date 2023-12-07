import { inputAnatomy } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers } from '@chakra-ui/react';

const { defineMultiStyleConfig } = createMultiStyleConfigHelpers(inputAnatomy.keys);

export const Input = defineMultiStyleConfig({
  baseStyle: {
    field: {
      _selection: {
        bg: 'surface.brand',
        color: 'text.invert',
      },

      _invalid: {
        borderColor: 'code.danger',
      },
    },
  },
  variants: {
    primary: {
      field: {
        borderRadius: '2.16rem',
        bgColor: 'opacity.white.0.40',
        border: '1px solid',
        borderColor: 'opacity.black.0.14',
        fontSize: '1.6rem',
        fontWeight: 'normal',
        color: 'text.primary',
        pl: '5.5rem',
        pr: '6.5rem',

        _placeholder: {
          fontSize: '1.6rem',
          fontWeight: 'normal',
          color: 'greyscale.600',
        },
      },
      element: {
        h: '100%',
        fontSize: '2.1rem',
        w: '6.5rem',
      },
    },
    secondary: {
      field: {
        border: '1px solid',
        borderColor: 'greyscale.25',
        borderRadius: '1.6rem',
        color: 'text.primary',
        px: '1.6rem',
      },
    },
    third: {
      field: {
        border: '1px solid',
        borderColor: 'greyscale.25',
        borderRadius: '1.6rem',
        color: 'opacity.black.0.39',
        px: '1.6rem',
        fontSize: '1.6rem',
        fontWeight: 400,
        fontStyle: 'normal',
      },
    },
  },
  sizes: {
    md: {
      field: {
        h: '4.7rem',
      },
    },
    xl: {
      field: {
        h: '7.7rem',
      },
    },
    textarea: {
      field: {
        h: '13.5rem',
      },
    },
  },
  defaultProps: {
    variant: 'primary',
    size: 'md',
  },
});
