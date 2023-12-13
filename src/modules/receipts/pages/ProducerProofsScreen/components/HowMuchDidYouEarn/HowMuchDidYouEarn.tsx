import { HStack, Skeleton, SkeletonCircle, Text, VStack } from '@chakra-ui/react';

import { ProgressBar } from '@/modules/receipts/components';
import { toBRL } from '@/utils';
import { useCropsStore } from '@/modules/receipts/store';
import { useGetAchievement } from '@/modules/receipts/api';
import { calculatePercentageObtained, convertToReais } from './helpers';

export const HowMuchDidYouEarn = () => {
  const crops = useCropsStore((state) => state.crops);

  const { data, isLoading } = useGetAchievement({
    farmerId: 1,
    safraId: crops?.data[0].id ?? 0,
  });

  const achievementData = data?.data.at(0);

  const amountWonInCent = convertToReais(achievementData?.amount_won_in_cent ?? 0);

  const amountToBeWonInCent = convertToReais(achievementData?.amount_to_be_won_in_cent ?? 0);

  const amountWonFormatted = toBRL(amountWonInCent)
    ?.replaceAll('R$', '')
    .replaceAll(',00', '')
    .trim();

  const amountToBeWonFormatted = toBRL(amountToBeWonInCent)?.replaceAll(',00', '');

  const percentageAlreadyCompleted = calculatePercentageObtained(
    amountToBeWonInCent,
    amountWonInCent,
  );

  if (isLoading) {
    return (
      <HStack layerStyle="card" pl="1rem" pr="2rem" py="0.5rem" spacing="2.4rem" h="8.4rem">
        <SkeletonCircle w="6rem" h="6rem" />
        <Skeleton w="12rem" h="90%" />
        <Skeleton w="12rem" h="90%" />
      </HStack>
    );
  }

  return (
    <HStack layerStyle="card" pl="1rem" pr="2rem" py="0.5rem" spacing="2.4rem" h="8.4rem">
      <ProgressBar
        size={75}
        progress={percentageAlreadyCompleted}
        trackWidth={8}
        indicatorWidth={5}
      />
      <VStack alignItems="flex-start">
        <Text textStyle="caption6" textTransform="uppercase" color="green.500">
          vocÊ já ganhou
        </Text>

        <Text textStyle="body1" fontWeight="700" lineHeight="1.8rem" color="black.200">
          <Text as="span" color="greyscale.800">
            R$
          </Text>{' '}
          {amountWonFormatted}
        </Text>
      </VStack>

      <VStack alignItems="flex-start">
        <Text textStyle="caption6" textTransform="uppercase" color="black.200">
          Quanto falta ganhar
        </Text>

        <Text textStyle="body1" fontWeight="400" lineHeight="1.8rem" color="black.200">
          {amountToBeWonFormatted}
        </Text>
      </VStack>
    </HStack>
  );
};
