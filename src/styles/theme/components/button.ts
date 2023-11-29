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

      fontSize: '1.4rem',
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
    },
    filter: {
      color: 'text.copytext',
      fontSize: '1.6rem',
      fontWeight: 'normal',
      w: '15.5rem',
      h: '5rem',
      py: '1.2rem',
      px: '0.95rem',
      bgColor: 'surface.primary',
      border: '1px solid',
      borderColor: 'greyscale.25',
      borderRadius: '1.6rem',
    },
    unstyled: {
      p: '0',
      border: '0',
      h: 'initial',
      w: 'initial',
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
