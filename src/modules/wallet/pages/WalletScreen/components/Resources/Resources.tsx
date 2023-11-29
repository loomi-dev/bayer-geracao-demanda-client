import { Flex, Text } from '@chakra-ui/react';

import { Card } from './Card';

const cardItems = [
  {
    label: 'Ação de relacionamento',
    imageUrl: '/assets/images/action1.webp',
  },
  { label: 'Ação de campo', imageUrl: '/assets/images/action2.jpeg' },
  { label: 'Enxoval', imageUrl: '/assets/images/action3.webp' },
];

export const Resources = () => (
  <Flex flexDir="column" gap="1.7rem">
    <Text textStyle="h2">Transforme seus recursos em ações</Text>
    <Flex gap="1rem">
      {cardItems.map((item) => (
        <Card key={item.label} label={item.label} imageUrl={item.imageUrl} />
      ))}
    </Flex>
  </Flex>
);
