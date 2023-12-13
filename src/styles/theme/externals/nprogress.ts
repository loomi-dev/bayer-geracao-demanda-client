import { SystemStyleObject } from '@chakra-ui/react';

export const nProgressStyles: SystemStyleObject = {
  '#nprogress': {
    pointerEvents: 'none',
  },

  '#nprogress .bar': {
    background: 'surface.brand',

    position: 'fixed',
    zIndex: '9999',
    top: '0',
    right: '0',

    width: '100%',
    height: '0.6rem',
  },

  '#nprogress .peg': {
    display: 'block',
    position: 'absolute',
    right: '0',
    width: '10rem',
    height: '100%',
    boxShadow: '0 0 10px surface.brand, 0 0 0.5rem surface.brand',
    opacity: '1',

    WebkitTransform: 'rotate(3deg) translate(0px, -0.4rem)',
    msTransform: 'rotate(3deg) translate(0px, -0.4rem)',
    transform: 'rotate(3deg) translate(0px, -0.4rem)',
  },

  '#nprogress .spinner-icon': {
    borderTopColor: 'surface.brand',
    borderLeftColor: 'surface.brand',
  },
};
