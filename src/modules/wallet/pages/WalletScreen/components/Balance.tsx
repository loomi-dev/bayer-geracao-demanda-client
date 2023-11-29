import { Button, Flex, HStack, Text } from '@chakra-ui/react';
import Link from 'next/link';

import { AddInsideCircleIcon, CircleIcon } from '@/components';

export const Balance = () => (
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
        <Text textStyle={{ lg: 'h4', xl: 'h2', '3xl': 'h1' }} color="text.primary">
          20.000,00
        </Text>
      </HStack>
      <Text w={{ lg: '16rem' }} textStyle="caption5" color="text.footnote">
        em ações para solicitar os recursos.
      </Text>
      <Text textStyle="caption5" color="text.footnote">
        Válido até <Text as="strong">20/10/2024</Text>
      </Text>
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
