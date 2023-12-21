import { DrawerFooter } from '@chakra-ui/react';
import { ReactNode } from 'react';

type ProfileDrawerFooterProps = {
  children?: ReactNode;
};
export const ProfileDrawerFooter = ({ children }: ProfileDrawerFooterProps) => (
  <DrawerFooter
    py="1.6rem"
    px="2.4rem"
    display="flex"
    alignItems="center"
    justifyContent="flex-end"
    gap="1.6rem"
    borderTop="1px solid"
    borderColor="opacity.black.0.20"
    h="8.4rem"
    bgColor="surface.primary"
  >
    {children}
  </DrawerFooter>
);
