import { selectAnatomy } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers } from '@chakra-ui/react';

const { defineMultiStyleConfig } = createMultiStyleConfigHelpers(selectAnatomy.keys);

export const Select = defineMultiStyleConfig({
  baseStyle: {},
  variants: {
    primary: {
      field: {
        borderRadius: '1.6rem',
        bgColor: 'opacity.white.0.40',
        border: '1px solid',
        borderColor: 'opacity.black.0.14',
        fontSize: '1.6rem',
        fontWeight: 'normal',
        color: 'text.primary',
        pl: '1.6rem',
        cursor: 'pointer',

        _placeholder: {
          fontSize: '1.6rem',
          fontWeight: 'normal',
          color: 'greyscale.600',
        },
      },
      icon: {
        right: '1.6rem',
        fontSize: '6rem',
      },
    },
  },
  sizes: {
    md: {
      field: {
        h: '4.7rem',
      },
    },
  },
  defaultProps: {
    variant: 'primary',
    size: 'md',
  },
});
