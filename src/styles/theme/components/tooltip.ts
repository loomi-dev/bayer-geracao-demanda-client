import { defineStyleConfig } from '@chakra-ui/react';

export const Tooltip = defineStyleConfig({
  baseStyle: {
    w: '10rem',
    borderRadius: '1.2rem',
    fontSize: '1.2rem',
    color: 'greyscale.800',
    textAlign: 'center',
    bgColor: 'surface.primary',
    border: '1px solid',
    borderColor: 'red.danger_40',
  },
});
