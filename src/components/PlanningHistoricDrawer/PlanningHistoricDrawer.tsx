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
  Step,
  StepIndicator,
  StepStatus,
  StepIcon,
  StepNumber,
  StepSeparator,
  Box,
} from '@chakra-ui/react';

import { useGetPlanningHistoric } from '@/api';

import { Historic } from '../Historic';

import { PlanningHistoricStatus } from './PlanningHistoricStatus';

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

  return (
    <Drawer isOpen={isOpen} {...props}>
      <DrawerOverlay />
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
          <PlanningHistoricStatus />

          <Box py="1.4rem" px="2.4rem">
            <Stepper variant="secondary" index={0} orientation="vertical" gap="0">
              <Step>
                <StepIndicator>
                  <StepStatus
                    complete={<StepIcon />}
                    incomplete={<StepNumber />}
                    active={<StepNumber />}
                  />
                </StepIndicator>

                <Historic.Container>
                  <Historic.Header />

                  <Historic.Title>Você enviou o planejamento para aprovação</Historic.Title>

                  <Historic.Message />
                </Historic.Container>

                <StepSeparator />
              </Step>
            </Stepper>
          </Box>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};
