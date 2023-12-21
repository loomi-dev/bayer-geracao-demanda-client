import { StackProps, Text, TextProps, VStack } from '@chakra-ui/react';
import { ReactNode } from 'react';

type GridActionDetailItemProps = {
  label: string;
  children: ReactNode;
  valueProps?: TextProps;
} & StackProps;

export const GridActionDetailItem = ({
  label,
  valueProps,
  children,
  ...rest
}: GridActionDetailItemProps) => (
  <VStack
    px="2.4rem"
    py="2rem"
    alignItems="flex-start"
    borderTop="1px solid"
    borderColor="opacity.black.0.08"
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
