import { HStack, StackProps, Text, TextProps } from '@chakra-ui/react';
import React from 'react';

type StatCardProps = {
  value: string;
  label: string;
  labelStyles?: TextProps;
} & StackProps;

export const StatCard = ({ value, label, labelStyles, ...restProps }: StatCardProps) => (
  <HStack layerStyle="card" gap="1.2rem" p="2.4rem" {...restProps}>
    <Text textStyle="h4" whiteSpace="nowrap">
      {value}
    </Text>
    <Text textStyle="body3" color="text.footnote" maxW="7.4rem" {...labelStyles}>
      {label}
    </Text>
  </HStack>
);
