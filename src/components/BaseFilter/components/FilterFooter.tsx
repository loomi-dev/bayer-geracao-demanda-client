import { Flex, FlexProps, PopoverFooter, Text } from '@chakra-ui/react';

type FilterFooterProps = {
  value?: string | number;
  label: string;
} & FlexProps;

export const FilterFooter = ({ value = '', label, ...props }: FilterFooterProps) => (
  <PopoverFooter>
    <Flex py="0.5rem" justify="center" gap="1rem" {...props}>
      <Text as="strong">{value}</Text>
      <Text>{label}</Text>
    </Flex>
  </PopoverFooter>
);
