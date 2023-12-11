import { DrawerBody, Stepper } from '@chakra-ui/react';
import { ReactNode } from 'react';

type HistoricDrawerBodyProps = {
  index: number;
  children: ReactNode;
};

export const HistoricDrawerBody = ({ index, children }: HistoricDrawerBodyProps) => (
  <DrawerBody py="1.4rem" px="2.4rem" bgColor="surface.primary">
    <Stepper variant="secondary" size="secondary" index={index} orientation="vertical" gap="0">
      {children}
    </Stepper>
  </DrawerBody>
);
