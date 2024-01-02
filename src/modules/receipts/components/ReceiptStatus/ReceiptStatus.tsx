import { Text, TextProps } from '@chakra-ui/react';

type ReceiptStatusProps = {
  documents: FileDocument[];
} & TextProps;

export const ReceiptStatus = ({ documents, ...restProps }: ReceiptStatusProps) => {
  const isPendingReceipts = documents?.length <= 0;
  const receiptStatusText = isPendingReceipts ? 'Comprovantes pendentes' : 'Comprovantes enviados';

  return (
    <Text
      textStyle="footnote-700"
      color={isPendingReceipts ? 'text.secondary' : 'text.brand'}
      {...restProps}
    >
      {receiptStatusText}
    </Text>
  );
};
