import { Text, TextProps } from '@chakra-ui/react';

type ReceiptStatusProps = {
  // status: GetActionsResponse['data'][0]['status'];
  status: 'receiptsPending' | 'receiptsSent';
  textProps?: TextProps;
};

const conditionalValues = {
  receiptsPending: {
    text: 'Comprovantes pendentes',
    conditionalTextProps: {
      color: 'greyscale.600',
    },
  },
  receiptsSent: {
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
