import { HStack, Text, VStack } from '@chakra-ui/react';

import { ProgressBar } from '@/modules/receipts/components';
import { toBRL } from '@/utils';

type HowMuchDidYouEarnProps = {
  earnedValue: number;
  progress: number;
  needToWin: number;
};

export const HowMuchDidYouEarn = ({ earnedValue, progress, needToWin }: HowMuchDidYouEarnProps) => (
  <HStack layerStyle="card" pl="1rem" pr="2rem" py="0.5rem" spacing="2.4rem" h="8.4rem">
    <ProgressBar size={75} progress={progress} trackWidth={12} indicatorWidth={8} />
    <VStack alignItems="flex-start">
      <Text textStyle="caption6" textTransform="uppercase" color="green.500">
        vocÊ já ganhou
      </Text>

      <Text textStyle="body1" fontWeight="700" lineHeight="1.8rem" color="black.200">
        <Text as="span" color="greyscale.800">
          R$
        </Text>{' '}
        {toBRL(earnedValue)?.replaceAll('R$', '').replaceAll(',00', '').trim()}
      </Text>
    </VStack>

    <VStack alignItems="flex-start">
      <Text textStyle="caption6" textTransform="uppercase" color="black.200">
        Quanto falta ganhar
      </Text>

      <Text textStyle="body1" fontWeight="400" lineHeight="1.8rem" color="black.200">
        {toBRL(needToWin)?.replaceAll(',00', '')}
      </Text>
    </VStack>
  </HStack>
);
