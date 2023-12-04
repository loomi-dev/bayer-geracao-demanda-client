import { cssVar, defineStyleConfig } from '@chakra-ui/react';

const $startColor = cssVar('skeleton-start-color');
const $endColor = cssVar('skeleton-end-color');

export const Skeleton = defineStyleConfig({
  variants: {
    primary: {
      _dark: {
        [$startColor.variable]: 'colors.surface.disabled', //changing startColor to red.100
        [$endColor.variable]: 'colors.surface.primary',
      },
    },
  },
  defaultProps: {
    variant: 'primary',
  },
});
