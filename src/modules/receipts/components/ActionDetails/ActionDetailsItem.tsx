import { StackProps, Text, TextProps, VStack } from '@chakra-ui/react';
import { ReactNode } from 'react';

type ActionDetailsItemProps = {
  label: string;
  children: ReactNode;
  valueProps?: TextProps;
} & StackProps;

export const ActionDetailsItem = ({
  label,
  valueProps,
  children,
  ...rest
}: ActionDetailsItemProps) => (
  <VStack
    px="2.4rem"
    py="2rem"
    alignItems="flex-start"
    borderTop="1px solid"
    borderColor="black.50"
    w="100%"
    {...rest}
  >
    <Text textStyle="footnote-400" color="greyscale.700">
      {label}
    </Text>
    <Text textStyle="caption7" {...valueProps}>
      {children}
    </Text>
  </VStack>
);
