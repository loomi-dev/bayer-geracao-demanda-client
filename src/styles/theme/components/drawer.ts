import { drawerAnatomy } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers } from '@chakra-ui/react';

const { defineMultiStyleConfig } = createMultiStyleConfigHelpers(drawerAnatomy.keys);

export const Drawer = defineMultiStyleConfig({
  baseStyle: {
    header: {
      p: '6rem 3.2rem 2.4rem',
      borderBottom: '1px solid',
      borderColor: 'opacity.black.0.20',
    },
    body: {
      display: 'flex',
      flexDirection: 'column',
      p: '1.4rem 2.4rem 3rem',
      bg: 'greyscale.500',
    },
    closeButton: {
      position: 'relative',
      right: 'initial',
      top: 'initial',
      left: 'initial',
      bottom: 'initial',
      fontSize: '1.4rem',
    },
    footer: {
      py: '1.6rem',
      px: '2.4rem',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      gap: '1.6rem',
      borderTop: '1px solid',
      borderColor: 'opacity.black.0.20',
    },
  },
  sizes: {
    md: {
      dialog: {
        minW: '81.2rem',
      },
    },
  },
  defaultProps: {
    size: 'md',
  },
});
