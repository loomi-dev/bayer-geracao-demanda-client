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
    overflow: 'hidden',
  },
  boxVinho: {
    position: 'fixed',
    opacity: '0.3',
    bg: 'red.danger_05',
    filter: 'blur(97px)',
  },
  boxGlass: {
    position: 'absolute',
    borderRadius: 'full',
    bg: 'linear-gradient(180deg, rgba(161, 11, 48, 0.41) 0%, rgba(161, 11, 48, 0.00) 100%)',
    boxShadow: 'glass',
    backdropFilter: 'blur(6px)',
    border: '1px solid',
    borderColor: 'opacity.white.0.87',
  },
};
