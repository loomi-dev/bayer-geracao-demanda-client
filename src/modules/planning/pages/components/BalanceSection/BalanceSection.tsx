import { Button, HStack, Skeleton, SkeletonText, Text, VStack } from '@chakra-ui/react';
import { useSession } from 'next-auth/react';

import { useGetFarmer } from '@/api';
import { AddInsideCircleIcon, CircleIcon } from '@/components';
import { centsToInteger, formatDate, formatPrice } from '@/utils';

export const BalanceSection = () => {
  const session = useSession();
  const userId = session.data?.user.id as number;

  const { data: dataGetFarmer, isLoading: isLoadingDataGetFarmer } = useGetFarmer(
    { farmerId: userId },
    { enabled: Boolean(userId) },
  );

  const balanceValue = formatPrice(centsToInteger(dataGetFarmer?.data?.[0]?.wallet.balance ?? 0));
  const expirationDateValue = formatDate(
    dataGetFarmer?.data?.[0]?.safra?.deadline_to_add_plannings,
  );

  return (
    <VStack as="section" layerStyle="card" align="flex-start" w="full" spacing="0.8rem" p="2.4rem">
      <Text textStyle="action3" color="text.primary" textTransform="uppercase">
        Seu saldo
      </Text>
      {isLoadingDataGetFarmer ? (
        <Skeleton h="6rem" w="22rem" />
      ) : (
        <Text fontSize="4rem" fontWeight="bold" color="surface.invert">
          <Text as="span" color="surface.brand">
            R$
          </Text>{' '}
          {balanceValue}
        </Text>
      )}

      <HStack w="full" align="center" justify="space-between">
        {isLoadingDataGetFarmer ? (
          <SkeletonText w="18rem" noOfLines={2} skeletonHeight="1rem" />
        ) : (
          <Text textStyle="body3" color="text.footnote">
            em ações para solicitar os recursos <br /> Válido{' '}
            <Text as="strong">até {expirationDateValue}</Text>
          </Text>
        )}

        <Button
          variant="third"
          w="21.5rem"
          pl="2.4rem"
          pr="0"
          transition="all 0.2s linear"
          rightIcon={
            <CircleIcon>
              <AddInsideCircleIcon />
            </CircleIcon>
          }
          _hover={{
            pl: '1rem',
          }}
        >
          <Text as="span" w="full" align="center">
            Novo planejamento
          </Text>
        </Button>
      </HStack>
    </VStack>
  );
};
