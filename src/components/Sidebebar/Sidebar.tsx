import { Flex, Text } from '@chakra-ui/react';
import Image from 'next/image';
import { useRouter } from 'next/router';

import { CalendarIcon, CardIcon, ComputerIcon, ImageIcon } from '@/components/icons';

import { MenuItem } from './MenuItem';

export const Sidebar = () => {
  const { pathname } = useRouter();
  const isWalletPage = pathname === '/carteira';
  const isPlanningPage = pathname === '/planejamento';
  const isReceiptsPage = pathname === '/comprovantes';
  const isSimulatorPage = pathname === '/simulador';

  const menuItens = [
    { label: 'Carteira', src: '#', isSelected: isWalletPage, leftIcon: <CardIcon /> },
    { label: 'Planejamento', src: '#', isSelected: isPlanningPage, leftIcon: <CalendarIcon /> },
    { label: 'Comprovantes', src: '#', isSelected: isReceiptsPage, leftIcon: <ImageIcon /> },
    { label: 'Simulador', src: '#', isSelected: isSimulatorPage, leftIcon: <ComputerIcon /> },
  ];
  return (
    <Flex
      flexDir="column"
      align="center"
      w="28.7rem"
      justifyContent="space-between"
      bgColor="surface.primary"
      position="fixed"
      h="100%"
      pb="3rem"
    >
      <Flex mt="7rem" align="center" flexDir="column" gap="2rem">
        <Image src="/images/logo.png" width={95} height={94} alt="app logo" />
        <Text textStyle="action2" align="center" w="12rem">
          Top Multiplicadores
        </Text>
      </Flex>
      <Flex
        flexDir="column"
        gap="1.6rem"
        py="1.6rem"
        borderTop="1px solid"
        borderBottom="1px solid"
        borderColor="surface.disabled"
        mb="10rem"
      >
        {menuItens.map((item) => (
          <MenuItem
            key={item.label}
            label={item.label}
            src={item.src}
            isSelected={item.isSelected}
            leftIcon={item.leftIcon}
          />
        ))}
      </Flex>
      <Flex align="center" gap="1.8rem">
        <Text w="8.7rem" textStyle="caption3" color="text.footnote">
          Uma plataforma
        </Text>
        <Image src="/images/bayer-logo.png" width={66} height={66} alt="bayer logo" />
      </Flex>
    </Flex>
  );
};
