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
    pb="1.8rem"
  >
    <Flex flexDir="column">
      <Text textTransform="uppercase" textStyle="action3">
        Seu saldo
      </Text>
      <HStack>
        <Text textStyle="h1" color="text.brand">
          R$
        </Text>
        <Text textStyle="h1" color="text.primary">
          20.000,00
        </Text>
      </HStack>
      <Text textStyle="caption3" color="text.footnote">
        em ações para solicitar os recursos Válido até 20/10/2024
      </Text>
      <Text textStyle="caption3" color="text.footnote">
        Válido até <Text as="strong">20/10/2024</Text>
      </Text>
    </Flex>
    <Link href="/planejamento">
      <Button
        w="24.5rem"
        pl="2rem"
        _hover={{ pl: '0rem' }}
        transition="0.3s"
        pr="0rem"
        variant="third"
        rightIcon={
          <CircleIcon>
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
