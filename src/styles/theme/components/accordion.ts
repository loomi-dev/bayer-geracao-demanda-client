import { defineStyleConfig } from '@chakra-ui/react';

export const Accordion = defineStyleConfig({
  variants: {
    primary: {
      container: {
        bgColor: 'surface.primary',
        borderRadius: '1.6rem',
        p: '2.4rem',
        mb: '1.2rem',
        layerStyle: 'card',
        border: '1px solid rgba(0, 0, 0, 0.20)',
      },
      button: {
        pb: '1.2rem',
        fontSize: '2rem',
        fontWeight: 'normal',
        color: 'red.danger_50',
        borderBottom: '1px solid',
        borderColor: 'opacity.gray.0.20',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      },
      panel: {
        pt: '1.2rem',
        fontSize: '1.8rem',
        fontWeight: 'normal',
        color: 'greyscale.800',
      },
    },
    secondary: {
      button: {
        py: '1rem',
        mb: '1rem',
        fontSize: { lg: '1.6rem', xl: '1.8rem' },
        color: 'surface.invert',
        borderTop: '1px solid',
        borderBottom: '1px solid',
        borderColor: 'surface.disabled',
      },
      panel: {
        fontSize: { lg: '1.4rem', xl: '1.6rem' },
        color: 'surface.invert',
      },
    },
  },

  defaultProps: {
    variant: 'primary',
  },
});
