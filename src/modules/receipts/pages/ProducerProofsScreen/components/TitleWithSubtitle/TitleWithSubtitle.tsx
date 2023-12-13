import { Text, VStack } from '@chakra-ui/react';

export const TitleWithSubtitle = () => (
  <VStack spacing="2rem" alignItems="flex-start" mt="4rem" mb="2rem">
    <Text textStyle="title" color="greyscale.1000">
      Planejamento 2023/24
    </Text>
    <Text textStyle="body1" fontWeight="400" lineHeight="2.4rem">
      Adicione abaixo os comprovantes para a safra 2023 / 2024
    </Text>
  </VStack>
);
