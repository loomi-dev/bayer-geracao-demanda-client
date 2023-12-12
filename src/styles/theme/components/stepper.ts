import { stepperAnatomy } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers } from '@chakra-ui/react';

const { defineMultiStyleConfig } = createMultiStyleConfigHelpers(stepperAnatomy.keys);

export const Stepper = defineMultiStyleConfig({
  baseStyle: {},
  variants: {
    primary: {
      stepper: {
        gap: 0,
      },
      step: {
        gap: 0,
      },
      separator: {
        _horizontal: {
          ml: '0',
        },

        '&[data-status=complete]': {
          bg: 'surface.brand',
        },
      },
      indicator: {
        position: 'relative',
        boxSize: '3.2rem',

        '&[data-status=complete]': {
          position: 'relative',
          bg: 'surface.brand',
        },

        '&:not([data-status=complete])': {
          bg: 'greyscale.425',
          borderColor: 'greyscale.425',
          color: 'text.inverter',
        },
      },
      number: {
        fontSize: '1.6rem',
        fontWeight: 'normal',
        color: 'text.invert',
      },
      title: {
        fontSize: '1.6rem',
        fontWeight: 'bold',
        color: 'text.primary',
        position: 'absolute',
        whiteSpace: 'nowrap',
        bottom: '-3rem',

        '&:not([data-status=complete])': {
          color: 'greyscale.425',
        },
      },
    },
    secondary: {
      step: {
        width: '100%',
      },
      indicator: {
        boxSize: '5.2rem',
        bg: 'greyscale.225',
        border: '0',

        '&[data-status=complete]': {
          bg: 'text.brand',
        },
      },
      separator: {
        bg: 'greyscale.225',
        top: '5.2rem !important',
        left: '2.6rem !important',

        '&[data-status=complete]': {
          bg: 'text.brand',
        },
      },
    },
  },
  defaultProps: {
    variant: 'primary',
  },
});
