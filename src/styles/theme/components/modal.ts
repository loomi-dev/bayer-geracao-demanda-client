import { modalAnatomy } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers } from '@chakra-ui/react';

const { defineMultiStyleConfig } = createMultiStyleConfigHelpers(modalAnatomy.keys);

export const Modal = defineMultiStyleConfig({
  baseStyle: {
    dialog: {
      bg: '#1a1a1cf6',
      color: 'white',
    },
  },
});
