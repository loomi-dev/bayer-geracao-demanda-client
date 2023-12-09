import {
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerProps,
  VStack,
  Text,
  DrawerOverlay,
  Stepper,
} from '@chakra-ui/react';

import { useGetPlanningHistoric } from '@/api';

import { PlanningHistoricStatus } from './PlanningHistoricStatus';
import { PlanningHistoricStep } from './PlanningHistoricStep';

type PlanningHistoricDrawerProps = {
  planningId: number;
  actionsToEvaluate?: PlanningAction[];
  isAproving?: boolean;
} & Omit<DrawerProps, 'children'>;

export const PlanningHistoricDrawer = ({
  planningId,
  actionsToEvaluate = [],
  isAproving,
  isOpen,
  ...props
}: PlanningHistoricDrawerProps) => {
  const { data: dataGetPlanningHistoric } = useGetPlanningHistoric(
    { planningId },
    { enabled: isOpen },
  );
  const historic = dataGetPlanningHistoric?.data.historic ?? [];
  const lastHistoricIndex = historic.length - 1;

  return (
    <Drawer isOpen={isOpen} {...props}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerHeader p="initial">
          <VStack
            align="flex-start"
            p="6rem 3.2rem 2.4rem"
            borderBottom="1px solid"
            borderColor="opacity.black.0.08"
          >
            <Text textStyle="h4">Histórico de atualizações do planejamento</Text>
            <Text textStyle="caption3" color="greyscale.650">
              Histórico de todas as atualizações e trocas dentro do planejamento atual
            </Text>
          </VStack>

          <PlanningHistoricStatus />
        </DrawerHeader>
        <DrawerBody py="1.4rem" px="2.4rem" bgColor="surface.primary">
          <Stepper
            variant="secondary"
            size="secondary"
            index={lastHistoricIndex}
            orientation="vertical"
            gap="0"
          >
            {historic?.map((historicProps) => (
              <PlanningHistoricStep key={historicProps.id} {...historicProps} />
            ))}
          </Stepper>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};
