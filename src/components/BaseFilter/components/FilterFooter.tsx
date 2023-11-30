import { Flex, PopoverFooter, PopoverFooterProps, Text } from '@chakra-ui/react';

type FilterFooterProps = {
  value?: string | number;
  label: string;
} & PopoverFooterProps;

export const FilterFooter = ({ value = '', label, ...props }: FilterFooterProps) => (
  <PopoverFooter {...props}>
    <Flex py="0.5rem" justify="center" gap="1rem">
      <Text as="strong">{value}</Text>
      <Text>{label}</Text>
    </Flex>
  </PopoverFooter>
);
