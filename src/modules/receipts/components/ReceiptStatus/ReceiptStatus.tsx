import { Text, TextProps } from '@chakra-ui/react';

type ReceiptStatusProps = {
  status: PlanningActionStatus;
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
