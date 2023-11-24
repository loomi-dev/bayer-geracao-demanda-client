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
      inverter: 'greyscale.1000',
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
        //disabled: TODO
      },
      success: {
        primary: 'green.100',
        hover: 'green.200',
        focussed: 'green.200',
        pressed: 'green.400',
      },
      warning: {
        primary: 'warning_10',
        hover: 'warning_20',
        focussed: 'warning_20',
        pressed: 'warning_40',
      },
      error: {
        primary: 'danger_10',
        hover: 'danger_20',
        focussed: 'danger_20',
        pressed: 'danger_40',
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
