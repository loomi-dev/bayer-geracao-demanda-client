import { HStack, Text, VStack } from '@chakra-ui/react';

import { ProgressBar } from '@/modules/receipts/components';
import { centsToInteger, formatPrice } from '@/utils';

import { calculatePercentageObtained } from '../../utils';

export const ReceiptsSummarySection = () => {
  const amountWonInCent = centsToInteger(0);
  const amountToBeWonInCent = centsToInteger(0);

  const percentageAlreadyCompleted = calculatePercentageObtained(
    amountToBeWonInCent,
    amountWonInCent,
  );

  return (
    <HStack layerStyle="card" pl="1rem" pr="2rem" py="0.5rem" spacing="2.4rem" h="8.4rem">
      <ProgressBar
        size={75}
        progress={percentageAlreadyCompleted}
        trackWidth={8}
        indicatorWidth={5}
      />
      <VStack alignItems="flex-start">
        <Text textStyle="caption6" textTransform="uppercase" color="text.brand">
          você já ganhou
        </Text>

        <Text textStyle="body1" fontWeight="bold" lineHeight="1.8rem" color="black.200">
          <Text as="span" color="greyscale.800">
            R$
          </Text>{' '}
          {formatPrice(amountWonInCent)}
        </Text>
      </VStack>

      <VStack alignItems="flex-start">
        <Text textStyle="caption6" textTransform="uppercase" color="black.200">
          Quanto falta ganhar
        </Text>

        <Text textStyle="body1" fontWeight="bold" lineHeight="1.8rem" color="black.200">
          <Text as="span" color="greyscale.800">
            R$
          </Text>{' '}
          {formatPrice(amountToBeWonInCent)}
        </Text>
      </VStack>
    </HStack>
  );
};
