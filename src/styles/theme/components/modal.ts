import { modalAnatomy } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers } from '@chakra-ui/react';

const { defineMultiStyleConfig } = createMultiStyleConfigHelpers(modalAnatomy.keys);

export const Modal = defineMultiStyleConfig({
  baseStyle: {},
  variants: {
    primary: {
      dialog: {
        maxW: '48.3rem',
        w: '100%',
        p: '3.2rem',
        borderRadius: '1.6rem',
        bg: 'surface.primary',
        display: 'flex',
        flexDirection: 'column',
        gap: '1.6rem',
      },
      closeButton: {
        position: 'relative',
        right: 'initial',
        top: 'initial',
        fontSize: '1.4rem',
      },
      header: {
        py: '0',
        px: '0',
      },
      body: {
        py: '0',
        px: '0',
      },
      footer: {
        py: '0',
        pt: '1.6rem',
        px: '0',
        borderTop: '1px solid',
        borderColor: 'greyscale.200',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '1.6rem',
      },
    },
    secondary: {
      dialog: {
        borderRadius: '3rem',
        bg: 'opacity.white.0.85',
        backdropFilter: 'blur(27px)',
      },
      header: {
        p: '2.8rem 3.2rem 2.2rem',
        borderBottom: '1px solid',
        borderColor: 'opacity.black.0.12',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      },
      closeButton: {
        position: 'relative',
        top: '0',
        right: '0',
        fontSize: '1.4rem',
        boxSize: '3.2rem',
      },
      body: {
        p: '3.2rem',
        fontSize: '1.6rem',
        fontWeight: 'normal',
        color: 'black',
      },
      footer: {
        display: 'flex',
        flexDirection: 'column',
        gap: '2.8rem',
        p: '2.8rem 3.2rem 3.2rem',
        borderTop: '1px solid',
        borderColor: 'opacity.black.0.12',
      },
    },
  },
  defaultProps: {
    variant: 'primary',
  },
});
