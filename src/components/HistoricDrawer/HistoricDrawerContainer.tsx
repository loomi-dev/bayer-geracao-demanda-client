import { Drawer, DrawerContent, DrawerOverlay, DrawerProps } from '@chakra-ui/react';
import { ReactNode } from 'react';

type HistoricDrawerContainerProps = {
  children: ReactNode;
} & Omit<DrawerProps, 'children'>;

export const HistoricDrawerContainer = ({
  children,
  ...restProps
}: HistoricDrawerContainerProps) => (
  <Drawer {...restProps}>
    <DrawerOverlay />
    <DrawerContent>{children}</DrawerContent>
  </Drawer>
);
