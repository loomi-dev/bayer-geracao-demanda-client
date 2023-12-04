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
    },
    secondary: {
      bg: 'surface.secondary',
      color: 'greyscale.900',
      borderRadius: 'full',

      fontSize: '1.6rem',
      fontWeight: 'bold',
    },
    third: {
      bg: 'opacity.black.0.20',
      color: 'surface.primary',
      borderRadius: 'full',
      backdropFilter: 'blur(20px)',

      fontSize: { lg: '1rem', '3xl': '1.4rem' },
      fontWeight: 'bold',
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
    },
    fifth: {
      bg: 'transparent',
      color: 'text.footnote',
      borderColor: 'opacity.black.0.10',
      borderRadius: 'full',

      fontSize: '1rem',
      fontWeight: 'bold',
    },
    sixth: {
      bg: 'text.disabled',
      color: 'text.primary',
      borderRadius: 'full',

      fontSize: '1.4rem',
      fontWeight: 'bold',
    },
    white: {
      bg: 'surface.primary',
      color: 'text.footnote',
      borderRadius: 'full',
      boxShadow: 'secondary',

      fontSize: '1.6rem',
      fontWeight: 'normal',

      _disabled: {
        _hover: {
          bg: 'surface.primary !important',
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
    },
    'secondary-filter': {
      layerStyle: 'card',
      fontWeight: 'bold',
      fontSize: '1.6rem',
      borderRadius: '3.2rem',
      bgColor: 'surface.secondary',
    },
    unstyled: {
      p: '0',
      border: '0',
      h: 'initial',
      w: 'initial',
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
        bg: 'green.600',
      },
    },
  },
  sizes: {
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
