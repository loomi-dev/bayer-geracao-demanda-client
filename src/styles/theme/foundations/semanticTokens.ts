export const semanticTokens = {
  colors: {
    text: {
      primary: 'greyscale.1000',
      secondary: 'greyscale.600',
      disabled: 'greyscale.400',
      footnote: 'greyscale.800',
      brand: 'green.500',
      invert: 'greyscale.0',
      copytext: 'greyscale.900',
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
        disabled: 'surface.disabled',
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
      white: {
        '0.40': 'rgba(255, 255, 255, 0.40)',
      },
      black: {
        '0.10': 'rgba(0, 0, 0, 0.10)',
        '0.14': 'rgba(0, 0, 0, 0.14)',
        '0.20': 'rgba(0, 0, 0, 0.20)',
      },
      gray: {
        '0.20': 'rgba(0, 0, 0, 0.20)',
        '0.30': 'rgba(33, 33, 33, 0.30)',
        '0.10': 'rgba(33, 33, 33, 0.10)',
      },
      red: {
        '0.30': 'rgba(222, 59, 59, 0.30)',
      },
      green: {
        '0.30': 'rgba(55, 199, 69, 0.30)',
      },
    },
    code: {
      success: 'green.500',
      danger: 'red.danger_40',
      warning: 'yellow.warning_40',
      info: 'text.secondary',
    },
  },
};
