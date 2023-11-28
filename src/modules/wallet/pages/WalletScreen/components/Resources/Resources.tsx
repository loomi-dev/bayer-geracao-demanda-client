import { Flex, Text } from '@chakra-ui/react';

import { Card } from './Card';

export const Resources = () => (
  <Flex flexDir="column" gap="1.7rem">
    <Text textStyle="h2">Transforme seus recursos em ações</Text>
    <Card label="Ação de relacionamento" imageUrl="/assets/images/action1.webp" />
  </Flex>
);
