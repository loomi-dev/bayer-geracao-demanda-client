import { DrawerBody, Flex, Text } from '@chakra-ui/react';
import { ReactNode } from 'react';

type ProfileDrawerBodyProps = {
  children: ReactNode;
};
export const ProfileDrawerBody = ({ children }: ProfileDrawerBodyProps) => (
  <DrawerBody>
    <Flex
      py="2rem"
      px="2.4rem"
      borderRadius="3rem"
      flexDir="column"
      align="flex-start"
      layerStyle="card"
    >
      <Text textStyle="footnote-bold" textTransform="uppercase">
        informações pessoais
      </Text>
      {children}
    </Flex>
  </DrawerBody>
);
