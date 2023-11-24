export const semanticTokens = {
  colors: {
    text: {
      primary: 'greyscale.1000',
      secondary: 'greyscale.600',
      disabled: 'greyscale.400',
      footnote: 'greyscale.800',
      brand: 'green.500',
      invert: 'greyscale.0',
    },
    surface: {
      primary: 'greyscale.0',
      secondary: 'greyscale.150',
      disabled: 'greyscale.400',
      brand: 'green.500',
      invert: 'greyscale.1000',
    },
    border: {
      primary: 'greyscale.1000',
      secondary: 'greyscale.800',
      divider: 'greyscale.100',
      brand: 'green.600',
      invert: 'greyscale.400',
    },
    background: {
      primary: {
        default: 'green.500',
        hover: 'green.700',
        focussed: 'green.800',
        pressed: 'green.700',
        //disabled: TODO --> missing in styleguide
      },
      success: {
        primary: 'green.100',
        hover: 'green.200',
        focussed: 'green.200',
        pressed: 'green.400',
      },
      warning: {
        primary: 'yellow.warning_10',
        hover: 'yellow.warning_20',
        focussed: 'yellow.warning_20',
        pressed: 'yellow.warning_40',
      },
      error: {
        primary: 'red.danger_10',
        hover: 'red.danger_20',
        focussed: 'red.danger_20',
        pressed: 'red.danger_40',
      },
    },
    opacity: {
      border: {
        14: 'rgba(0, 0, 0, 0.14)',
      },
      background: {
        40: 'rgba(255, 255, 255, 0.40)',
      },
    },
    code: {
      success: {
        default: 'green.500',
        _dark: 'green.300',
      },
      danger: {
        default: 'red.500',
        _dark: 'red.300',
      },
      warning: {
        default: 'yellow.500',
        _dark: 'yellow.300',
      },
      info: {
        default: 'primary.500',
        _dark: 'primary.300',
      },
    },
  },
};
