import { Flex, Text } from '@chakra-ui/react';

import action1Url from '@/../public/assets/images/action1.webp';
import action2Url from '@/../public/assets/images/action2.jpeg';
import action3Url from '@/../public/assets/images/action3.webp';

import { Card } from './Card';

const cardItems = [
  {
    label: 'Ação de relacionamento',
    imageUrl: action1Url,
  },
  { label: 'Ação de campo', imageUrl: action2Url },
  { label: 'Enxoval', imageUrl: action3Url },
];

export const Resources = () => (
  <Flex flexDir="column" gap="1.7rem">
    <Text textStyle={{ lg: 'h4', xl: 'h2' }} fontWeight={{ lg: 'bold' }}>
      Transforme seus recursos em ações
    </Text>
    <Flex gap="1rem" flexWrap={{ lg: 'wrap', xl: 'nowrap' }}>
      {cardItems.map((item) => (
        <Card key={item.label} label={item.label} imageUrl={item.imageUrl} />
      ))}
    </Flex>
  </Flex>
);
