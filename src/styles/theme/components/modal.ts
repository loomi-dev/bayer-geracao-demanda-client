import { modalAnatomy } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers } from '@chakra-ui/react';

const { defineMultiStyleConfig } = createMultiStyleConfigHelpers(modalAnatomy.keys);

export const Modal = defineMultiStyleConfig({
  baseStyle: {},
  variants: {
    primary: {},
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
