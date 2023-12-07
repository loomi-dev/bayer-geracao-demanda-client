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
  StepSeparator,
  Box,
} from '@chakra-ui/react';

import { useGetPlanningHistoric } from '@/api';

import { Historic } from '../Historic';
import { ClockRegularIcon } from '../icons';

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
  const lastHistoricIndex = historic.length - 1;

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
            <Stepper
              variant="secondary"
              size="secondary"
              index={lastHistoricIndex}
              orientation="vertical"
              gap="0"
            >
              {historic?.map(({ id, status, creation_date, description, related }) => (
                <Step key={id}>
                  <StepIndicator>
                    <StepStatus
                      incomplete={<ClockRegularIcon />}
                      active={<ClockRegularIcon />}
                      complete={<ClockRegularIcon color="#fff" />}
                    />
                  </StepIndicator>

                  <Historic.Container>
                    <Historic.Header status={status} date={creation_date} />

                    <Historic.Title>Você enviou o planejamento para aprovação</Historic.Title>

                    {description && (
                      <Historic.Message author={related.username} description={description} />
                    )}
                  </Historic.Container>

                  <StepSeparator />
                </Step>
              ))}
            </Stepper>
          </Box>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};
