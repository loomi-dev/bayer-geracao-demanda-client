import { defineStyleConfig } from '@chakra-ui/react';

export const Badge = defineStyleConfig({
  baseStyle: {
    p: '0.8rem',
    borderRadius: '10rem',
    fontSize: '1.2rem',
    fontWeight: 'normal',
    border: '1px solid',
    textAlign: 'center',
  },
  variants: {
    table_primary: {
      borderColor: 'greyscale.450',
      bgColor: 'opacity.gray.1.20',
    },
    table_secundary: {
      borderColor: 'opacity.gray.0.30',
      bgColor: 'opacity.gray.0.10',
    },
    table_success: {
      color: 'green.150',
      borderColor: 'opacity.green.0.30',
      bgColor: 'opacity.green.0.10',
    },
    table_error: {
      color: 'red.danger_30',
      borderColor: 'opacity.red.1.30',
      bgColor: 'opacity.red.0.10',
    },
    table_warning: {
      borderColor: 'opacity.yellow.0.30',
      bgColor: 'opacity.yellow.0.10',
      color: 'yellow.warning_60',
    },
    filled_primary: {
      color: 'text.invert',
      bgColor: 'red.danger_90',
    },
    filled_secundary: {
      bgColor: 'opacity.gray.1.20',
      borderColor: 'greyscale.450',
    },
    filled_success: {
      color: 'surface.primary',
      bgColor: 'green.500',
    },
    filled_error: {
      color: 'surface.primary',
      bgColor: 'red.danger_40',
    },
    filled_warning: {
      color: 'surface.primary',
      bgColor: 'yellow.warning_60',
    },
  },
  sizes: {
    xs: {
      fontSize: '0.6em',
    },
    sm: {
      fontSize: '0.7em',
    },
    md: {
      fontSize: '0.8em',
      textTransform: 'none',
    },
    lg: {
      fontSize: '0.9em',
      textTransform: 'none',
    },
  },
  defaultProps: {
    size: 'md',
  },
});
