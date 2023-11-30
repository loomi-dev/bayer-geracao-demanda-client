import { Flex, FlexProps, Text } from '@chakra-ui/react';
import Image from 'next/image';
import { useRouter } from 'next/router';

import { CalendarIcon, CardIcon, ComputerIcon, ImageIcon, UserGroupIcon } from '@/components/icons';
import { LAYOUT_SIDEBAR_WIDTH } from '@/config';

import { MenuItem } from './MenuItem';

const menuItens = [
  { label: 'Clientes', src: '/clientes', leftIcon: <UserGroupIcon /> },
  { label: 'Carteira', src: '/carteira', leftIcon: <CardIcon /> },
  {
    label: 'Planejamento',
    src: '/planejamento',
    leftIcon: <CalendarIcon />,
  },
  {
    label: 'Comprovantes',
    src: '/comprovantes',
    leftIcon: <ImageIcon />,
  },
  {
    label: 'Simulador',
    src: '/simulador',
    leftIcon: <ComputerIcon />,
  },
];

type SidebarProps = {
  containerProps?: FlexProps;
};

export const Sidebar = ({ containerProps }: SidebarProps) => {
  const { pathname } = useRouter();
  return (
    <Flex
      flexDir="column"
      align="center"
      w={{
        lg: LAYOUT_SIDEBAR_WIDTH['lg'],
        xl: LAYOUT_SIDEBAR_WIDTH['xl'],
        '3xl': LAYOUT_SIDEBAR_WIDTH['3xl'],
      }}
      justifyContent="space-between"
      bgColor="surface.primary"
      position="fixed"
      h="100%"
      overflowY="scroll"
      pb="3rem"
      {...containerProps}
    >
      <Flex mt="7rem" align="center" flexDir="column" gap="2rem">
        <Image src="/assets/images/logo.png" width={95} height={94} quality={100} alt="app logo" />
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
        w="80%"
        mt="5rem"
        mb="10rem"
      >
        {menuItens.map((item) => (
          <MenuItem
            key={item.label}
            label={item.label}
            src={item.src}
            isSelected={item.src === pathname}
            leftIcon={item.leftIcon}
          />
        ))}
      </Flex>
      <Flex align="center" gap="1.8rem">
        <Text w="8.7rem" textStyle="caption3" color="text.footnote">
          Uma plataforma
        </Text>
        <Image
          src="/assets/images/bayer-logo.webp"
          width={66}
          height={66}
          quality={100}
          alt="bayer logo"
        />
      </Flex>
    </Flex>
  );
};
