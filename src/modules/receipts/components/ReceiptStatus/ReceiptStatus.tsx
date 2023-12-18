import { Text, TextProps } from '@chakra-ui/react';

import { GetActionsResponse } from '../../api';

type ReceiptStatusProps = {
  status: GetActionsResponse['data'][0]['status'];
  textProps?: TextProps;
};

const conditionalValues = {
  rejected: {
    text: 'Comprovantes pendentes',
    conditionalTextProps: {
      color: 'greyscale.600',
    },
  },
  not_evaluated: {
    text: 'Comprovantes pendentes',
    conditionalTextProps: {
      color: 'greyscale.600',
    },
  },
  accepted: {
    text: 'Comprovantes enviados',
    conditionalTextProps: {
      color: 'red.danger_50',
    },
  },
};

export const ReceiptStatus = ({ status, textProps }: ReceiptStatusProps) => {
  const { text, conditionalTextProps } = conditionalValues[status];

  return (
    <Text textStyle="footnote-700" {...conditionalTextProps} {...textProps}>
      {text}
    </Text>
  );
};
