import { Button, HStack, Text, VStack } from '@chakra-ui/react';

import { AddInsideCircleIcon, CircleIcon } from '@/components';

export const BalanceSection = () => (
  <VStack as="section" layerStyle="card" align="flex-start" w="full" spacing="0.8rem" p="2.4rem">
    <Text textStyle="action3" color="text.primary" textTransform="uppercase">
      Seu saldo
    </Text>
    <Text fontSize="4rem" fontWeight="bold" color="surface.invert">
      <Text as="span" color="surface.brand">
        $
      </Text>{' '}
      60.000,00
    </Text>

    <HStack w="full" align="center" justify="space-between">
      <Text textStyle="body3" color="text.footnote">
        em ações para solicitar os recursos <br /> Válido <Text as="strong">até 20/10/2024</Text>
      </Text>

      <Button
        variant="third"
        pl="2.4rem"
        pr="0"
        rightIcon={
          <CircleIcon>
            <AddInsideCircleIcon />
          </CircleIcon>
        }
      >
        <Text as="span" w="full" align="center">
          Novo planejamento
        </Text>
      </Button>
    </HStack>
  </VStack>
);
