import { HStack, Text } from '@chakra-ui/react';
import { ChangeEvent } from 'react';

import { Historic, HistoricDrawer } from '@/components';

type CustomerHistoricResponseProps = {
  totalValue: number | string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onClose: () => void;
  isLoading: boolean;
  onClick: () => void;
  selectedActions: PlanningAction[];
  isApproving: boolean;
};
export const CustomerHistoricResponse = ({
  totalValue,
  onChange,
  onClose,
  isLoading,
  onClick,
  selectedActions,
  isApproving,
}: CustomerHistoricResponseProps) => (
  <HistoricDrawer.Step>
    <Historic.Container border="none">
      <Historic.Title lineHeight="5.2rem">
        <Text>
          {isApproving
            ? 'Ações a serem aprovadas'
            : 'Explique o motivo pelo qual você está recusando estas ações'}
        </Text>
      </Historic.Title>
      <Historic.Table isApproving={isApproving} data={selectedActions} isLoading={false} />
      {!isApproving && (
        <Historic.TextInput
          onChange={onChange}
          label="Insira uma mensagem para explicar o motivo das recusas"
        />
      )}
      <Historic.Footer totalValue={totalValue}>
        <HStack>
          <Historic.CancelButton onClick={onClose} />
          <Historic.DoneButton isLoading={isLoading} onClick={onClick}>
            <Text fontSize="1rem" fontWeight="bold" color="text.invert">
              {isApproving ? 'Aprovar planejamento' : 'Recusar planejamento'}
            </Text>
          </Historic.DoneButton>
        </HStack>
      </Historic.Footer>
    </Historic.Container>
  </HistoricDrawer.Step>
);
