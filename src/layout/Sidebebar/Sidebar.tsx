import { Flex, Text } from '@chakra-ui/react';
import Image from 'next/image';

import { CalendarIcon, CardIcon, ComputerIcon, ImageIcon } from '@/components/Icons';

import { MenuItem } from './MenuItem';

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
    <Flex
      flexDir="column"
      mt="14rem"
      gap="1.6rem"
      py="1.6rem"
      borderTop="1px solid"
      borderBottom="1px solid"
      borderColor="surface.disabled"
    >
      <MenuItem label="Carteira" src="#" isSelected leftIcon={<CardIcon />} />
      <MenuItem label="Planejamento" src="#" leftIcon={<CalendarIcon />} />
      <MenuItem label="Comprovações" src="#" leftIcon={<ImageIcon />} />
      <MenuItem label="Simulador" src="#" leftIcon={<ComputerIcon />} />
    </Flex>
  </Flex>
);
