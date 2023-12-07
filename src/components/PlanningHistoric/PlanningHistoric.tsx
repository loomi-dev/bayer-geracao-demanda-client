import {
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerProps,
  VStack,
  Text,
} from '@chakra-ui/react';

import { useGetPlanningHistoric } from '@/api';

import { PlanningDetail, HistoricStepper } from './components';

type PlanningHistoricProps = {
  planningId: number;
} & Omit<DrawerProps, 'children'>;

export const PlanningHistoric = ({ planningId, ...props }: PlanningHistoricProps) => {
  const { data: historic, isLoading } = useGetPlanningHistoric(
    { planningId },
    { enabled: props.isOpen },
  );
  return (
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
          <HistoricStepper />
          <PlanningDetail />
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};
