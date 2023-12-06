import { HStack, Text, VStack } from '@chakra-ui/react';

import { DiamondLevelIcon } from '@/components';

type YourCurrentLevelProps = {
  level?: 'silver';
};

const conditionalValues = {
  silver: {
    icon: <DiamondLevelIcon />,
    levelInPt: 'Prata',
  },
};

export const YourCurrentLevel = ({ level = 'silver' }: YourCurrentLevelProps) => {
  const { icon, levelInPt } = conditionalValues[level];

  return (
    <HStack layerStyle="card" pl="1rem" pr="2rem" py="0.5rem" spacing="1.4rem" h="8.4rem">
      {icon}
      <VStack spacing="0.8rem" alignItems="flex-start">
        <Text textStyle="caption6" textTransform="uppercase">
          Seu nível atual
        </Text>
        <Text textStyle="body1" fontWeight="700" lineHeight="18px">
          {levelInPt}
        </Text>
      </VStack>
      ;
    </HStack>
  );
};
