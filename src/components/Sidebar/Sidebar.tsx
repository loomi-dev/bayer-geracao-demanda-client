import { Flex, Text } from '@chakra-ui/react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useSession } from 'next-auth/react';

import { LAYOUT_SIDEBAR_WIDTH } from '@/config';

import { MenuItem } from './MenuItem';
import { farmerMenuItens, managerMenuItens } from './Sidebar.items';

export const Sidebar = () => {
  const user = useSession();
  const { pathname } = useRouter();
  const isManager = user.data?.user.role === 'Manager';
  const menuItems = isManager ? managerMenuItens : farmerMenuItens;
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
      overflowY="auto"
      pb="3rem"
    >
      <Flex mt="7rem" align="center" flexDir="column" gap="2rem">
        <Image src="/assets/images/logo.webp" width={95} height={94} quality={100} alt="app logo" />
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
        {menuItems.map((item) => (
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
