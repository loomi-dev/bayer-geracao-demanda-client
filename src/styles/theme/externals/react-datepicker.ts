import { SystemStyleObject } from '@chakra-ui/react';
import 'react-datepicker/dist/react-datepicker.css';

export const reactDatePickerStyles: SystemStyleObject = {
  '.react-datepicker': {
    bg: 'surface.primary',
    boxShadow: 'datepicker',
    border: '1px solid',
    borderColor: 'opacity.black.0.20',
    borderRadius: '1rem',
  },

  // Container
  '.react-datepicker__month-container': {
    p: '1.2rem',
  },

  // Header
  '.react-datepicker__header': {
    py: '0',
    bg: 'transparent',
    borderBottom: 0,
  },

  // Mes selecionado
  '.react-datepicker__current-month': {
    fontSize: '1.4rem',
    color: 'text.copytext',
    fontWeight: 'bold',
  },

  // Dias da semana wrapper
  '.react-datepicker__day-names': {
    mt: '1rem',
    px: '1.2rem',
  },

  // Dia da semana
  '.react-datepicker__day-name': {
    w: '3.3rem',
    h: '3.9rem',
    margin: '0',
    color: 'text.brand',
    fontSize: '1.2rem',
    fontWeight: 'medium',
    textTransform: 'uppercase',
  },

  // Datas do mes wrapper
  '.react-datepicker__month': {
    m: '0',
  },

  // Data
  '.react-datepicker__day': {
    my: '0.16rem',
    borderRadius: '0',
    mx: '0',
    w: '3.3rem',
    h: '3.9rem',
    lineHeight: '3.9rem',
    color: 'text.primary',
    fontSize: '1.2rem',
    fontWeight: 'medium',
    textAlign: 'center',
    verticalAlign: 'middle',

    _selected: {
      bg: 'surface.brand',
      color: 'text.invert',
    },

    _hover: {
      borderRadius: '0',
    },
  },

  '.react-datepicker__day--keyboard-selected, .react-datepicker__day.react-datepicker__day--in-selecting-range, .react-datepicker__day--selecting-range-start, .react-datepicker__day--selecting-range-end':
    {
      bg: 'red.danger_50',
      color: 'greyscale.0',

      _hover: {
        bg: 'red.danger_50',
      },
    },
};
