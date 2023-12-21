import { Text, TextProps } from '@chakra-ui/react';

type CellProps = {
  value: string;
  textProps?: TextProps;
};
export const Cell = ({ value, textProps }: CellProps) => (
  <Text textStyle="action2" {...textProps}>
    {value}
  </Text>
);
