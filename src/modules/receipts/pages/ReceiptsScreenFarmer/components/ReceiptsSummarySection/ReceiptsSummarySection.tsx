import { HStack, Text, VStack } from '@chakra-ui/react';
import { useSession } from 'next-auth/react';

import { useGetReceiptsSummary } from '@/api';
import { ProgressBar } from '@/modules/receipts/components';
import { formatPrice } from '@/utils';

import { calculatePercentageObtained } from '../../utils';

export const ReceiptsSummarySection = () => {
  const session = useSession();
  const farmerId = session.data?.user.farmer?.id as number;
  const { data } = useGetReceiptsSummary({ farmerId }, { enabled: Boolean(farmerId) });

  const summary = data?.data[0];
  const totalPlannedAmount =
    Number(summary?.metric?.farm_kit_in_cents ?? 0) +
    Number(summary?.metric?.farm_task_in_cents ?? 0) +
    Number(summary?.metric?.relationship_task_in_cent ?? 0);

  const comprovedAmount = Number(summary?.provenResourceAmountInCents ?? 0);
  const toConfirmAmount = Number(totalPlannedAmount - comprovedAmount);

  const percentageAlreadyCompleted = calculatePercentageObtained(
    comprovedAmount,
    totalPlannedAmount,
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
          Total planejado
        </Text>

        <Text textStyle="body1" fontWeight="bold" lineHeight="1.8rem" color="black.200">
          <Text as="span" color="greyscale.800">
            R$
          </Text>{' '}
          {formatPrice(totalPlannedAmount)}
        </Text>
      </VStack>
      <VStack alignItems="flex-start">
        <Text textStyle="caption6" textTransform="uppercase" color="text.brand">
          Comprovados
        </Text>

        <Text textStyle="body1" fontWeight="bold" lineHeight="1.8rem" color="black.200">
          <Text as="span" color="greyscale.800">
            R$
          </Text>{' '}
          {formatPrice(comprovedAmount)}
        </Text>
      </VStack>
      <VStack alignItems="flex-start">
        <Text textStyle="caption6" textTransform="uppercase" color="text.brand">
          A comprovar
        </Text>

        <Text textStyle="body1" fontWeight="bold" lineHeight="1.8rem" color="black.200">
          <Text as="span" color="greyscale.800">
            R$
          </Text>{' '}
          {formatPrice(toConfirmAmount)}
        </Text>
      </VStack>
    </HStack>
  );
};
