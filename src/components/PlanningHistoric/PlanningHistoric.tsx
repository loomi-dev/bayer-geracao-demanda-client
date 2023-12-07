import {
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerProps,
  VStack,
  Text,
  Flex,
} from '@chakra-ui/react';

import { useGetPlanningHistoric } from '@/api';

import { HistoricStepper, Historic, PlanningValidator } from './components';

type PlanningHistoricProps = {
  planningId: number;
  actionsToEvaluate?: PlanningAction[];
  isAproving: boolean;
} & Omit<DrawerProps, 'children'>;

export const PlanningHistoric = ({
  planningId,
  actionsToEvaluate = [],
  isAproving,
  ...props
}: PlanningHistoricProps) => {
  const { data: getHistoricData, isLoading } = useGetPlanningHistoric(
    { planningId },
    { enabled: props.isOpen },
  );
  const planningHistoric = getHistoricData?.data;

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
          <Flex flexDir="column" px="7.2rem" pt="1.6rem" gap="1.6rem">
            <Historic historicList={planningHistoric?.historic ?? []} />
            <PlanningValidator actionsToEvaluate={actionsToEvaluate} isApproving={isAproving} />
          </Flex>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};
