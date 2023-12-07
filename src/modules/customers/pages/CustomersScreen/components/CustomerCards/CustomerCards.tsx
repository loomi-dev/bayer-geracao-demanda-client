import { Flex, Skeleton, Text } from '@chakra-ui/react';
import { useSession } from 'next-auth/react';

import { useGetManager } from '@/api';
import { formatPrice } from '@/utils';

export const CustomerCards = () => {
  const session = useSession();
  const userId = session.data?.user.id as number;
  const { data, isLoading } = useGetManager(
    {
      id: userId,
    },
    { enabled: Boolean(userId) },
  );
  const manager = data?.data[0];

  return (
    <Flex gap="1.7rem">
      <Flex layerStyle="card" align="center" p="2.4rem" gap="0.8rem" h="10rem">
        {isLoading ? (
          <Skeleton h="4.8rem" w="20rem" />
        ) : (
          <>
            <Text textStyle="h3">R$</Text>
            <Text textStyle="h2">{formatPrice(manager?.current_planned_amount_in_cents)}</Text>
          </>
        )}
        <Text w="9.4rem" textStyle="body3" color="footnote">
          Valor planejado total
        </Text>
      </Flex>

      <Flex layerStyle="card" align="center" p="2.4rem" gap="0.8rem" h="10rem">
        {isLoading ? (
          <Skeleton w="15rem" h="4.8rem" />
        ) : (
          <Text textStyle="h2">{manager?.safra?.year}</Text>
        )}
        <Text w="9.4rem" textStyle="body3" color="footnote">
          Safra atual
        </Text>
      </Flex>

      <Flex layerStyle="card" align="center" p="2.4rem" gap="0.8rem" h="10rem">
        {isLoading ? (
          <Skeleton h="4.8rem" w="8rem" />
        ) : (
          <Text textStyle="h2">{manager?.farmers?.length}</Text>
        )}
        <Text w="9.4rem" textStyle="body3" color="footnote">
          Multiplicadores gerenciados
        </Text>
      </Flex>
    </Flex>
  );
};
