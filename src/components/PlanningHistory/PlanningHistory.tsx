import {
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerProps,
  VStack,
  Text,
} from '@chakra-ui/react';

import { PlanningDetail, ActionStepper } from './components';

type PlanningHistoryProps = Omit<DrawerProps, 'children'>;

export const PlanningHistory = ({ ...props }: PlanningHistoryProps) => (
  <Drawer {...props}>
    <DrawerContent>
      <DrawerHeader>
        <VStack align="flex-start">
          <Text textStyle="h4">Histórico de atualizações do planejamento</Text>
          <Text textStyle="caption3" color="greyscale.650">
            Histórico de todas as atualizações e trocas dentro do planejamento atual
          </Text>
        </VStack>
      </DrawerHeader>
      <DrawerBody p="initial" bgColor="surface.primary">
        <ActionStepper />
        <PlanningDetail />
      </DrawerBody>
    </DrawerContent>
  </Drawer>
);
