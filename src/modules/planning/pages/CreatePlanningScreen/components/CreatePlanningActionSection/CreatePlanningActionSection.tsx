import { Button, HStack, useDisclosure } from '@chakra-ui/react';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';

const DynamicPlanningHistoricDrawer = dynamic(async () => {
  const { PlanningHistoricDrawer } = await import('../PlanningHistoricDrawer');

  return PlanningHistoricDrawer;
});

export const CreatePlanningActionSection = () => {
  const { query, push } = useRouter();
  const planningId = Number(query?.planning_id);

  const {
    isOpen: isOpenSendPlanningDrawer,
    onOpen: onOpenSendPlanningDrawer,
    onClose: onCloseSendPlanningDrawer,
  } = useDisclosure();

  const handleNavigateToPlanningScreen = () => {
    push('/planejamento');
  };

  return (
    <HStack w="full" justify="center" spacing="1rem">
      <Button
        variant="fifth"
        w="7.6rem"
        size="sm"
        fontSize="1rem"
        onClick={handleNavigateToPlanningScreen}
      >
        Cancelar
      </Button>

      <>
        <Button size="sm" w="19.3rem" fontSize="1rem" onClick={onOpenSendPlanningDrawer}>
          Enviar planejamento para o RTV
        </Button>

        {isOpenSendPlanningDrawer && (
          <DynamicPlanningHistoricDrawer
            planningId={planningId}
            showSendPlanningForm
            isOpen={isOpenSendPlanningDrawer}
            onClose={onCloseSendPlanningDrawer}
          />
        )}
      </>
    </HStack>
  );
};
