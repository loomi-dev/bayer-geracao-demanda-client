import { DrawerFooter } from '@chakra-ui/react';
import { ReactNode } from 'react';

type ProfileDrawerFooterProps = {
  children?: ReactNode;
};
export const ProfileDrawerFooter = ({ children }: ProfileDrawerFooterProps) => (
  <DrawerFooter px="2.4rem" py="1.6rem" h="8.4rem">
    {children}
  </DrawerFooter>
);
