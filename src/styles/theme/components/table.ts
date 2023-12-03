import { tableAnatomy } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers } from '@chakra-ui/react';

const { defineMultiStyleConfig } = createMultiStyleConfigHelpers(tableAnatomy.keys);

export const Table = defineMultiStyleConfig({
  variants: {
    primary: {
      thead: {
        bg: 'surface.primary',
      },
      tbody: {
        bg: 'surface.secondary',
      },
      tr: {
        borderBottom: '1px solid',
        borderColor: 'surface.disabled',
      },
      th: {
        color: 'text.primary',
        fontSize: '1.2rem',
        fontWeight: 'bold',
        p: '3.4rem 1.2rem 1.4rem',
        textAlign: 'center',
        textTransform: 'uppercase',

        '&:first-of-type': {
          textAlign: 'left',
          pl: '2.4rem',
        },
        '&:last-of-type': {
          pr: '2.4rem',
        },
      },
      td: {
        textAlign: 'center',
        p: '2.8rem 1.3rem 2.1rem',
        color: 'text.primary',
        fontSize: '1.6rem',
        fontWeight: 'normal',

        '&:first-of-type': {
          textAlign: 'left',
          pl: '2.4rem',
        },
        '&:last-of-type': {
          pr: '2.4rem',
        },
      },
    },
    secondary: {
      thead: {
        bg: 'surface.brand',
      },
      tbody: {
        bg: 'surface.primary',
      },
      tr: {
        borderBottom: '2px solid',
        borderColor: 'surface.secondary',
      },
      th: {
        p: '1.25rem',
        fontSize: '1.2rem',
        fontWeight: 'bold',
        color: 'surface.primary',
        textAlign: 'center',

        '&:first-of-type': {
          pl: '1.6rem',
        },

        '&:last-of-type': {
          borderLeft: '2px solid',
          borderColor: 'surface.secondary',
          pr: '1.6rem',
        },
      },
      td: {
        p: '1.25rem',
        fontSize: '1.6rem',
        fontWeight: 'normal',
        color: 'text.primary',
        textAlign: 'center',

        '&:first-of-type': {
          pl: '1.6rem',
        },

        '&:last-of-type': {
          borderLeft: '2px solid',
          borderColor: 'surface.secondary',
          pr: '1.6rem',
        },
      },
    },
    third: {
      thead: {
        bg: 'surface.primary',
      },
      tbody: {
        bg: 'surface.secondary',
      },
      th: {
        color: 'text.primary',
        fontSize: '1.2rem',
        fontWeight: 'bold',
        p: '3.4rem 1.2rem 1.4rem',
        textAlign: 'center',
        textTransform: 'uppercase',
        borderBottom: '1px solid',
        borderColor: 'text.disabled',

        '&:first-of-type': {
          textAlign: 'left',
          pl: '2.4rem',
        },
        '&:last-of-type': {
          pr: '2.4rem',
        },
      },
      td: {
        textAlign: 'center',
        p: '1.6rem 1.3rem 1.6rem',
        color: 'text.primary',
        fontSize: '1.6rem',
        fontWeight: 'normal',

        '&:first-of-type': {
          textAlign: 'left',
          pl: '2.4rem',
        },
        '&:last-of-type': {
          pr: '2.4rem',
        },
      },
      tr: {
        '&:first-of-type > td': {
          pt: '2.8rem',
        },
      },
    },
  },
  defaultProps: {
    variant: 'primary',
  },
});
