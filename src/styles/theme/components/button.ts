import { defineStyleConfig } from '@chakra-ui/react';

export const Button = defineStyleConfig({
  baseStyle: {
    minH: 'initial',
    minW: 'initial',
    maxH: 'initial',
    maxW: 'initial',
    border: '1px solid',
    borderColor: 'transparent',
    p: '0',

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '1rem',
    _hover: {
      opacity: 0.7,
    },
    _disabled: {
      opacity: 0.65,
    },
  },
  variants: {
    primary: {
      bg: 'surface.brand',
      color: 'surface.primary',
      borderRadius: 'full',

      fontSize: '1.6rem',
      fontWeight: 'bold',

      _hover: {
        bg: 'red.danger_60',

        _disabled: {
          bg: 'surface.brand',
        },
      },
    },
    secondary: {
      bg: 'surface.secondary',
      color: 'greyscale.900',
      borderRadius: 'full',

      fontSize: '1.6rem',
      fontWeight: 'bold',

      _hover: {
        _disabled: {
          bg: 'surface.secondary',
        },
      },
    },
    third: {
      bg: 'opacity.black.0.20',
      color: 'surface.primary',
      borderRadius: 'full',
      backdropFilter: 'blur(20px)',

      fontSize: '1.4rem',
      fontWeight: 'bold',

      _hover: {
        _disabled: {
          bg: 'opacity.black.0.20',
        },
      },
    },
    fourth: {
      bg: 'linear-gradient(90deg, rgba(244, 242, 242, 0.50) 50.42%, rgba(120, 120, 120, 0.00) 121.37%)',
      color: 'text.primary',
      borderRadius: 'full',
      borderColor: 'surface.primary',
      boxShadow: 'primary',

      fontSize: '1.2rem',
      fontWeight: 'bold',
      textTransform: 'uppercase',

      _hover: {
        _disabled: {
          bg: 'linear-gradient(90deg, rgba(244, 242, 242, 0.50) 50.42%, rgba(120, 120, 120, 0.00) 121.37%)',
        },
      },
    },
    fifth: {
      bg: 'transparent',
      color: 'text.footnote',
      borderColor: 'opacity.black.0.10',
      borderRadius: 'full',

      fontSize: '1rem',
      fontWeight: 'bold',

      _hover: {
        _disabled: {
          bg: 'transparent',
        },
        opacity: '0.6',
      },
    },
    sixth: {
      bg: 'text.disabled',
      color: 'text.primary',
      borderRadius: 'full',

      fontSize: '1.4rem',
      fontWeight: 'bold',

      _hover: {
        _disabled: {
          bg: 'text.disabled',
        },
      },
    },
    seventh: {
      bg: 'surface.secondary',
      color: 'text.primary',
      borderRadius: 'full',
      borderColor: 'opacity.black.0.10',

      fontSize: '1.4rem',
      fontWeight: 'bold',

      _hover: {
        _disabled: {
          bg: 'surface.disabled',
        },
      },
    },
    eighth: {
      fontSize: '1.8rem',
      fontWeight: 'semibold',
      borderRadius: 'full',
      bg: 'opacity.gray.1.10',
    },
    white: {
      bg: 'surface.primary',
      color: 'text.footnote',
      borderRadius: 'full',
      boxShadow: 'secondary',

      fontSize: '1.6rem',
      fontWeight: 'normal',

      _hover: {
        _disabled: {
          bg: 'surface.primary ',
        },
      },
    },
    'primary-filter': {
      fontSize: '1.6rem',
      fontWeight: 'normal',
      color: 'text.copytext',
      borderRadius: '1.6rem',
      bg: 'surface.primary',
      border: '1px solid',
      borderColor: 'greyscale.25',

      _hover: {
        _disabled: {
          bg: 'surface.primary',
        },
      },
    },
    'secondary-filter': {
      layerStyle: 'card',
      fontWeight: 'bold',
      fontSize: '1.6rem',
      borderRadius: '3.2rem',
      bgColor: 'surface.secondary',

      _hover: {
        _disabled: {
          bg: 'surface.secondary',
        },
      },
    },
    unstyled: {
      py: '0',
      px: '0',
      border: '0',
      h: 'initial',
      w: 'initial',
      minW: 'initial',
      minH: 'initial',

      _hover: {
        _disabled: {
          bg: 'transparent',
        },
      },
    },
    page: {
      bg: 'surface.brand',
      color: 'greyscale.0',
      borderRadius: 'full',
      boxSize: '3.2rem',
      minH: '3.2rem',
      minW: '3.2rem',
      py: '0',
      px: '0',

      _active: {
        bg: 'red.danger_60',
      },

      _hover: {
        bg: 'red.danger_60',

        _disabled: {
          bg: 'surface.brand',
        },
      },
    },
    action: {
      py: '0',
      px: '0',
      h: '100%',
      minW: 'initial',
      minH: 'initial',

      flex: '1',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',

      _hover: {
        _disabled: {
          bg: 'transparent',
        },
      },
    },
  },
  sizes: {
    '2xs': {
      h: '2.8rem',
    },
    xs: {
      h: '3.4rem',
    },
    sm: {
      h: '3.6rem',
    },
    md: {
      h: '5.2rem',
    },
    lg: {
      h: '6rem',
    },
    xl: {
      h: '6.8rem',
    },
    '2xl': {
      h: '7.2rem',
    },
  },
  defaultProps: {
    variant: 'primary',
    size: 'md',
  },
});
