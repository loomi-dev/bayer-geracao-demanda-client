import { HStack, Text } from '@chakra-ui/react';
import { ReactNode } from 'react';

import { CircleIcon } from '@/components';

export type HowToProveCardProps = {
  icon: ReactNode;
  text: string;
};

export const HowToProveCard = ({ icon, text }: HowToProveCardProps) => (
  <HStack
    layerStyle="card"
    p="1rem"
    h="6.1rem"
    as="button"
    minW="19rem"
    spacing="0.9rem"
    borderRadius="3rem"
  >
    <CircleIcon boxSize={{ lg: '3.1rem', xl: '4.1rem' }}>{icon}</CircleIcon>
    <Text textStyle="body2" fontWeight="400" color="black.1000">
      {text}
    </Text>
  </HStack>
);
