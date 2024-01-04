import { HStack, Tooltip, VStack, useToast } from '@chakra-ui/react';
import { useSession } from 'next-auth/react';
import { useState } from 'react';
import { useFormContext } from 'react-hook-form';

import {
  useGetPlanningActions,
  useGetPlanningActionsStatistics,
  useUpdatePlanningHistoric,
} from '@/api';
import { Historic, HistoricDrawer, Pagination, WarningModal } from '@/components';
import { usePagination } from '@/hooks';

import { SendPlanningFormStepSchemaType } from './SendPlanningFormStep.schema';

type SendPlanningFormStepProps = {
  planningId: number;
  lastHistoric: Historic[];
  handleCloseSendPlanningDrawer: (callback?: () => void) => void;
};

export const SendPlanningFormStep = ({
  planningId,
  lastHistoric,
  handleCloseSendPlanningDrawer,
}: SendPlanningFormStepProps) => {
  const session = useSession();
  const userId = session.data?.user.id as number;
  const [showInsufficientFundsModal, setShowInsufficientFundsModal] = useState(false);
  const [showMinimunFundsNotReachedModal, setShowMinimunFundsNotReachedModal] = useState(false);
  const toast = useToast();

  const { currentPage, handleNextPage, handlePreviousPage, resetPage } = usePagination(
    'send-planning-actions-table',
  );

  const { data: dataGetPlanningActions, isLoading: isLoadingDataGetPlanningActions } =
    useGetPlanningActions({ planningId }, { enabled: Boolean(planningId) });
  const { data: dataGetPlanningActionsStatistics } = useGetPlanningActionsStatistics(
    { planningId },
    { enabled: Boolean(planningId) },
  );

  const { mutate: updatePlanningHistoric, isLoading: isLoadingUpdatePlanningHistoric } =
    useUpdatePlanningHistoric();

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useFormContext<SendPlanningFormStepSchemaType>();

  const farmKitValue =
    Number(dataGetPlanningActionsStatistics?.data.metric?.farm_kit_in_cents) ?? 0;
  const farmTaskValue =
    Number(dataGetPlanningActionsStatistics?.data.metric?.farm_task_in_cents) || 0;
  const relationshipTaskValue =
    Number(dataGetPlanningActionsStatistics?.data.metric?.relationship_task_in_cent) || 0;
  const totalPlanningActionsValue = farmKitValue + farmTaskValue + relationshipTaskValue;

  const plansList = dataGetPlanningActions?.data ?? [];
  const countPlans = plansList.length;
  const totalPlansListPage = dataGetPlanningActions?.meta.pagination.pageCount || 1;

  const isDisabledCreateActionButton = plansList.length <= 0 || !isValid;

  const onSubmitSendPlanningDrawerForm = ({ description }: SendPlanningFormStepSchemaType) => {
    updatePlanningHistoric(
      {
        planningId,
        payload: {
          userId,
          description,
          historic: lastHistoric,
          status: 'ready_for_evaluation',
        },
      },
      {
        onSuccess: () => {
          handleCloseSendPlanningDrawer(resetPage);
          toast({
            description: 'O planejamento foi enviado para aprovação.',
            status: 'success',
          });
        },
        onError: (err) => {
          toast({
            description: 'Não foi possível enviar seu planejamento para aprovação.',
            status: 'error',
          });
          if (err?.response?.data?.error?.message === 'INSUFFICIENT_FUNDS') {
            setShowInsufficientFundsModal(true);
            return;
          }
          if (err?.response?.data?.error?.message === 'MINIMUM_FUNDS_NOT_REACHED') {
            setShowMinimunFundsNotReachedModal(true);
          }
        },
      },
    );
  };

  return (
    <>
      <HistoricDrawer.Step>
        <Historic.Container
          as="form"
          borderBottom="0"
          onSubmit={handleSubmit(onSubmitSendPlanningDrawerForm)}
        >
          <Historic.Header>
            <Historic.Title>Você deseja enviar este planejamento para aprovação?</Historic.Title>
          </Historic.Header>

          <VStack align="flex-end" w="full" spacing="1rem">
            <Historic.Table data={plansList} isLoading={isLoadingDataGetPlanningActions} />
            <Pagination
              page={currentPage}
              onNextPage={handleNextPage}
              onPreviousPage={handlePreviousPage}
              countItems={countPlans}
              totalPages={totalPlansListPage}
            />
          </VStack>
          <Historic.TextInput
            label="Insira uma mensagem explicando o planejamento (opcional)"
            error={errors.description}
            register={register('description')}
          />

          <Historic.Footer totalValue={totalPlanningActionsValue}>
            <HStack spacing="1rem">
              <Historic.CancelButton onClick={() => handleCloseSendPlanningDrawer(resetPage)} />
              <Tooltip
                label={
                  isDisabledCreateActionButton
                    ? 'Você deve possuir ações antes de enviar um planejamento para aprovação.'
                    : ''
                }
              >
                <Historic.DoneButton
                  type="submit"
                  isDisabled={isDisabledCreateActionButton}
                  isLoading={isLoadingUpdatePlanningHistoric}
                />
              </Tooltip>
            </HStack>
          </Historic.Footer>
        </Historic.Container>
      </HistoricDrawer.Step>

      <WarningModal
        title="Valor do planejamento insuficiente"
        description="O planejamento que voce tentou enviar tem um valor abaixo de 95% do seu saldo, aumente o valor do planejamento planejamento"
        isOpen={showMinimunFundsNotReachedModal}
        onClose={() => setShowMinimunFundsNotReachedModal(false)}
      />
      <WarningModal
        title="Você não tem saldo disponível"
        description="O planejamento que voce tentou enviar tem um valor acima do seu saldo disponível, tente diminuir o valor ou contate o suporte"
        isOpen={showInsufficientFundsModal}
        onClose={() => setShowInsufficientFundsModal(false)}
      />
    </>
  );
};
