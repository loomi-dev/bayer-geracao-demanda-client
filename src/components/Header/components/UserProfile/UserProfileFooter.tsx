import { DrawerFooter } from '@chakra-ui/react';
import { ReactNode } from 'react';

type UserProfileFooterProps = {
  children?: ReactNode;
};
export const UserProfileFooter = ({ children }: UserProfileFooterProps) => (
  <DrawerFooter px="2.4rem" py="1.6rem" h="8.4rem">
    {children}
  </DrawerFooter>
);
