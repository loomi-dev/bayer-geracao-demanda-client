import { Text, VStack } from '@chakra-ui/react';

type HistoricMessageProps = {
  title: string;
  description: string;
};

export const HistoricMessage = ({ title, description }: HistoricMessageProps) => (
  <VStack
    w="full"
    align="flex-start"
    p="2.4rem"
    bg="greyscale.225"
    borderRadius="1.6rem"
    border="1px solid"
    borderColor="greyscale.375"
    spacing="0.8rem"
  >
    <Text textStyle="caption3" color="greyscale.700" lineHeight="2rem">
      {title}
    </Text>

    <Text textStyle="body3" color="text.copytext" lineHeight="2rem">
      {description}
    </Text>
  </VStack>
);
