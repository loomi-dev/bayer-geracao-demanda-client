import { Flex, FlexProps, Text, TextProps } from '@chakra-ui/react';
import { ReactNode } from 'react';

type ResultCardProps = {
  label: string;
  valueTextProps?: TextProps;
  children: ReactNode;
} & FlexProps;
export const ResultCard = ({ label, valueTextProps = {}, children, ...props }: ResultCardProps) => (
  <Flex
    w="100%rem"
    h="7.8rem"
    borderRadius="1.6rem"
    bgColor="greyscale.750"
    border="1px solid"
    borderColor="opacity.black.0.10"
    px="1.6rem"
    flexDir="column"
    justify="space-between"
    py="0.8rem"
    {...props}
  >
    <Text
      textStyle="footnote-bold"
      textTransform="uppercase"
      color={props.color ? props.color : 'text.footnote'}
    >
      {label}
    </Text>
    <Text
      textStyle="body1"
      color={props.color ? props.color : 'surface.invert'}
      {...valueTextProps}
    >
      {children}
    </Text>
  </Flex>
);
