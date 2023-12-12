import { zodResolver } from '@hookform/resolvers/zod';
import dynamic from 'next/dynamic';
import { FormProvider, useForm } from 'react-hook-form';

import { useGetPlanningHistoric } from '@/api';
import { HistoricDrawer } from '@/components';

import { sendPlanningFormStepSchema } from './SendPlanningFormStep.schema';

type PlanningHistoricDrawerProps = {
  isOpen: boolean;
  onClose: () => void;
  showSendPlanningForm?: boolean;
  planningId: number;
};

const DynamicPastPlanningHistoricSteps = dynamic(async () => {
  const { PastPlanningHistoricSteps } = await import('@/components');

  return PastPlanningHistoricSteps;
});

const DynamicSendPlanningFormStep = dynamic(async () => {
  const { SendPlanningFormStep } = await import('./SendPlanningFormStep');

  return SendPlanningFormStep;
});

export const PlanningHistoricDrawer = ({
  isOpen,
  onClose,
  showSendPlanningForm = false,
  planningId,
}: PlanningHistoricDrawerProps) => {
  const { data: dataGetPlanningHistoric } = useGetPlanningHistoric(
    { planningId },
    { enabled: Boolean(planningId) && isOpen },
  );
  const methods = useForm({
    resolver: zodResolver(sendPlanningFormStepSchema),
  });

  const { reset } = methods;

  const lastHistoric = dataGetPlanningHistoric?.data.historic ?? [];
  const lastHistoricIndex = lastHistoric.length - 1;
  const hasLastHistoric = lastHistoric.length > 0;
  const planningStatus = lastHistoric?.at(-1)?.status;

  const handleCloseSendPlanningDrawer = (callback?: () => void) => {
    reset();
    onClose();
    callback?.();
  };

  return (
    <HistoricDrawer.Container isOpen={isOpen} onClose={handleCloseSendPlanningDrawer}>
      <HistoricDrawer.Header status={planningStatus} />

      <HistoricDrawer.Body index={lastHistoricIndex}>
        {hasLastHistoric && <DynamicPastPlanningHistoricSteps lastHistoric={lastHistoric} />}

        {showSendPlanningForm && (
          <FormProvider {...methods}>
            <DynamicSendPlanningFormStep
              planningId={planningId}
              lastHistoric={lastHistoric}
              handleCloseSendPlanningDrawer={handleCloseSendPlanningDrawer}
            />
          </FormProvider>
        )}
      </HistoricDrawer.Body>
    </HistoricDrawer.Container>
  );
};
