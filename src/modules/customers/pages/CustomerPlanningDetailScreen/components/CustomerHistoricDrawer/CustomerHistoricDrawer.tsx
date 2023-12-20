import { useToast } from '@chakra-ui/react';
import { useSession } from 'next-auth/react';
import { useState } from 'react';

import { useGetPlanningActions, useGetPlanningHistoric, useUpdatePlanningHistoric } from '@/api';
import { HistoricDrawer, PastPlanningHistoricSteps } from '@/components';

import { CustomerHistoricResponse } from './CustumerHistoricResponse';

type CustomerHistoricDrawerProps = {
  planningId: number;
  isOpen: boolean;
  selectedActions: PlanningAction[];
  isApproving: boolean;
  onClose: () => void;
};

export const CustomerHistoricDrawer = ({
  planningId,
  selectedActions,
  isOpen,
  isApproving,
  onClose,
}: CustomerHistoricDrawerProps) => {
  const session = useSession();
  const toast = useToast();
  const userId = session.data?.user.id as number;
  const [description, setDescription] = useState('');

  const { data: getPlanningHistoric } = useGetPlanningHistoric(
    { planningId },
    { enabled: Boolean(planningId) && isOpen },
  );
  const { mutate: mutateUpdatePlanningHistoric, isLoading } = useUpdatePlanningHistoric();
  const { data: getPlanningActions } = useGetPlanningActions(
    { planningId },
    { enabled: Boolean(planningId) && !selectedActions.length },
  );
  const historic = getPlanningHistoric?.data.historic ?? [];
  const planningActions = getPlanningActions?.data ?? [];
  const actions = selectedActions.length ? selectedActions : planningActions;

  const getPlanningTotalValue = (actions: PlanningAction[]) =>
    actions.reduce((acc, item) => {
      acc += item.amountInCents ?? 0;
      return acc;
    }, 0);

  const handleUpdateHistoric = () =>
    mutateUpdatePlanningHistoric(
      {
        planningId,
        payload: {
          historic,
          actions: selectedActions,
          status: isApproving ? 'accepted' : 'rejected',
          description,
          userId,
        },
      },
      {
        onSuccess: () => {
          onClose();
          toast({
            description: isApproving
              ? 'Você aprovou um planejamento.'
              : 'Você recusou um planejamento.',
            status: 'success',
          });
        },
        onError: () => {
          toast({
            description: isApproving
              ? 'Ocorreu um erro ao aprovar o planejamento.'
              : 'Ocorreu um erro ao recusar o planejamento.',
            status: 'error',
          });
        },
      },
    );

  return (
    <HistoricDrawer.Container isOpen={isOpen} onClose={onClose}>
      <HistoricDrawer.Header />
      <HistoricDrawer.Body index={historic.length - 1}>
        <PastPlanningHistoricSteps lastHistoric={historic} />
        <CustomerHistoricResponse
          totalValue={getPlanningTotalValue(actions)}
          isApproving={isApproving}
          selectedActions={actions}
          isLoading={isLoading}
          onChange={(e) => setDescription(e.target.value)}
          onClose={onClose}
          onClick={handleUpdateHistoric}
        />
      </HistoricDrawer.Body>
    </HistoricDrawer.Container>
  );
};
