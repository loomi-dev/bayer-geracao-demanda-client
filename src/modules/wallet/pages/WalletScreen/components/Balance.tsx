import { Skeleton, Button, Flex, HStack, Text } from '@chakra-ui/react';
import Link from 'next/link';
import { useSession } from 'next-auth/react';

import { AddInsideCircleIcon, CircleIcon } from '@/components';
import { useGetFarmers } from '@/modules/wallet/api';
import { formatDate, formatPrice } from '@/utils';
export const Balance = () => {
  const user = useSession();
  const userId = user.data?.user.id;
  const { data, isLoading } = useGetFarmers({ id: userId ?? '' }, { enabled: Boolean(userId) });
  const farmers = data?.data[0];

  return (
    <Flex
      justify="space-between"
      align="flex-end"
      w="100%"
      h="16.4rem"
      layerStyle="card"
      px="2.4rem"
      pt="2.4rem"
      pb={{ lg: '3.4rem', xl: '1.8rem' }}
    >
      <Flex flexDir="column">
        <Text textTransform="uppercase" textStyle="action3">
          Seu saldo
        </Text>
        <HStack>
          <Text textStyle={{ lg: 'h4', xl: 'h2', '3xl': 'h1' }} color="text.brand">
            R$
          </Text>
          {isLoading ? (
            <Skeleton w="14rem" borderRadius="1.2rem" h="4rem" />
          ) : (
            <Text textStyle={{ lg: 'h4', xl: 'h2', '3xl': 'h1' }} color="text.primary">
              {formatPrice(farmers?.wallet?.balance)}
            </Text>
          )}
        </HStack>
        <Text w={{ lg: '16rem' }} textStyle="caption5" color="text.footnote">
          em ações para solicitar os recursos.
        </Text>
        <HStack align="center">
          <Text textStyle="caption5" color="text.footnote">
            Válido até
          </Text>
          {isLoading ? (
            <Skeleton w="8rem" borderRadius="1.2rem" h="2rem" />
          ) : (
            <Text as="strong">{formatDate(farmers?.harvest?.deadline_to_add_plannings)}</Text>
          )}
        </HStack>
      </Flex>
      <Link href="/planejamento" legacyBehavior passHref>
        <Button
          as="a"
          variant="third"
          w={{ lg: '17rem', xl: '19rem', '3xl': '24.5rem' }}
          height={{ lg: '4.5rem', xl: '5.2rem' }}
          pl="2rem"
          _hover={{ pl: '1rem' }}
          transition="0.3s"
          pr="0rem"
          rightIcon={
            <CircleIcon boxSize={{ lg: '4.5rem', xl: '5.1rem' }}>
              <AddInsideCircleIcon />
            </CircleIcon>
          }
        >
          <Text as="span" w="full">
            Adicionar Planejamento
          </Text>
        </Button>
      </Link>
    </Flex>
  );
};
