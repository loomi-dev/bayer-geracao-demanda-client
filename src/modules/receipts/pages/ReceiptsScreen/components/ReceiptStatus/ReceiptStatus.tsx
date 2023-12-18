import { Text, TextProps } from '@chakra-ui/react';

type ReceiptStatusProps = {
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
      color: 'green.500',
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
