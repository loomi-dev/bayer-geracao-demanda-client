import { Box, HStack, Text } from '@chakra-ui/react';
import { useSession } from 'next-auth/react';
import { useState } from 'react';

import { useGetPlanningHistoric, useUpdatePlanningHistoric } from '@/api';
import { Historic, HistoricDrawer } from '@/components';

import { CustomerHistoricTitle } from './CustomerHistoricTitle';

type CustomerHistoricDrawerProps = {
  planningId: number;
  isOpen: boolean;
  totalValue: number | string;
  selectedActions: PlanningAction[];
  isApproving: boolean;
  onClose: () => void;
};

export const CustomerHistoricDrawer = ({
  planningId,
  selectedActions,
  totalValue,
  isOpen,
  isApproving,
  onClose,
}: CustomerHistoricDrawerProps) => {
  const session = useSession();
  const userId = session.data?.user.id as number;
  const [description, setDescription] = useState('');

  const { data: getPlanningHistoric } = useGetPlanningHistoric(
    { planningId },
    { enabled: Boolean(planningId && isOpen) },
  );
  const { mutate: mutateUpdatePlanningHistoric, isLoading } = useUpdatePlanningHistoric();

  const historic = getPlanningHistoric?.data.historic ?? [];

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
      { onSuccess: () => onClose() },
    );

  return (
    <HistoricDrawer.Container isOpen={isOpen} onClose={onClose}>
      <HistoricDrawer.Header />
      <HistoricDrawer.Body index={0}>
        {historic.map((item) => (
          <HistoricDrawer.Step key={item.id}>
            <Historic.Container border="none">
              <Historic.Header status={item.status} date={item.creation_date} />
              <Historic.Title>
                <CustomerHistoricTitle status={item.status} username={item.related?.username} />
              </Historic.Title>
              <Box w="full" borderRadius="1.6rem" boxShadow="datepicker">
                <Historic.Accordion planningActions={item.actions} />
                <Historic.Footer
                  border="none"
                  bgColor="surface.primary"
                  borderTopRadius="initial"
                  borderTop="1px solid"
                  borderTopColor="opacity.white.1.40"
                  borderBottomRadius="1.6rem"
                  py="2rem"
                  mt="-0.1rem"
                  justify="space-between"
                  totalValue={getPlanningTotalValue(item.actions)}
                />
              </Box>
              <Historic.Message author={item.related.username} description={item.description} />
            </Historic.Container>
          </HistoricDrawer.Step>
        ))}
        <HistoricDrawer.Step>
          <Historic.Container border="none">
            <Historic.Title lineHeight="5.2rem">
              <Text>
                {isApproving
                  ? 'Ações a serem aprovadas'
                  : 'Explique o motivo pelo qual você está recusando estas ações'}
              </Text>
            </Historic.Title>
            <Historic.Table isApproving={isApproving} data={selectedActions} />
            {!isApproving && (
              <Historic.TextInput
                onChange={(e) => setDescription(e.target.value)}
                label="Insira uma mensagem para explicar o motivo das recusas"
              />
            )}
            <Historic.Footer totalValue={totalValue}>
              <HStack>
                <Historic.CancelButton onClick={onClose} />
                <Historic.DoneButton isLoading={isLoading} onClick={handleUpdateHistoric}>
                  <Text fontSize="1rem" fontWeight="bold" color="text.invert">
                    {isApproving ? 'Aprovar planejamento' : 'Recusar planejamento'}
                  </Text>
                </Historic.DoneButton>
              </HStack>
            </Historic.Footer>
          </Historic.Container>
        </HistoricDrawer.Step>
      </HistoricDrawer.Body>
    </HistoricDrawer.Container>
  );
};
