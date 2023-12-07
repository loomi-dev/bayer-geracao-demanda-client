import { ChakraTheme } from '@chakra-ui/react';

export const layerStyles: ChakraTheme['layerStyles'] = {
  card: {
    border: '1px solid',
    borderColor: 'surface.primary',
    borderRadius: '3.2rem',
    bgColor: 'surface.secondary',
    boxShadow: 'primary',
  },
  actions: {
    h: '3rem',
    w: '7rem',
    borderRadius: 'full',
    border: '1px solid',
    borderColor: 'opacity.black.0.10',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '1rem',
    p: '0.8rem',
  },
};
