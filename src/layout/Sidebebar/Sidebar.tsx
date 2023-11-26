import { Button, Flex, Text } from '@chakra-ui/react';
import Image from 'next/image';

export const Sidebar = () => (
  <Flex
    flexDir="column"
    align="center"
    w="28.7rem"
    bgColor="surface.primary"
    position="fixed"
    h="100%"
  >
    <Flex mt="7rem" align="center" flexDir="column" gap="2rem">
      <Image src="/images/logo.png" width={95} height={94} alt="logo" />
      <Text textStyle="action2" align="center" w="12rem">
        Top Multiplicadores
      </Text>
    </Flex>
    <Flex flexDir="column">
      <Button
        fontSize="1.6rem"
        color="greyscale.600"
        w="22rem"
        bg="green"
        h="5rem"
        fontWeight="normal"
      >
        Carteira
      </Button>
      <Button>Planejamento</Button>
      <Button>Comprovações</Button>
      <Button>Simulador</Button>
    </Flex>
  </Flex>
);
