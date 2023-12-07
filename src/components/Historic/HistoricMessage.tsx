import { Text, VStack } from '@chakra-ui/react';

type HistoricMessageProps = {
  author: string;
  description: string;
};

export const HistoricMessage = ({ author, description }: HistoricMessageProps) => (
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
      Mensagem de {author}
    </Text>

    <Text textStyle="body3" color="text.copytext" lineHeight="2rem">
      {description}
    </Text>
  </VStack>
);
