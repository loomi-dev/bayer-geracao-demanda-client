import { StackProps, Text, VStack } from '@chakra-ui/react';

type DetailItemProps = {
  title: string;
  description: string;
} & StackProps;

export const DetailItem = ({ title, description, ...restProps }: DetailItemProps) => (
  <VStack align="flex-start" spacing="0.4rem" py="2rem" px="2.4rem" {...restProps}>
    <Text textStyle="caption5" color="greyscale.700" textTransform="uppercase" lineHeight="1.8rem">
      {title}
    </Text>
    <Text textStyle="body2" color="text.copytext">
      {description}
    </Text>
  </VStack>
);
