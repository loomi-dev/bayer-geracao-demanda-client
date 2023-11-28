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
        color: 'green.600',
        borderBottom: '1px solid',
        borderColor: 'opacity.gray.0.20',
      },
      panel: {
        pt: '1.2rem',
        fontSize: '1.8rem',
        fontWeight: 'normal',
        color: 'greyscale.800',
      },
    },
  },
  defaultProps: {
    variant: 'primary',
  },
});
