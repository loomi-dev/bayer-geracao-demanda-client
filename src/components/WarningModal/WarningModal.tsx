import {
  Button,
  HStack,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  ModalProps,
  Text,
} from '@chakra-ui/react';

import { WarningIcon } from '@/components';

type WarningModalProps = {
  errorCode: string;
} & Omit<ModalProps, 'children'>;

const errors = {
  PLANNING_ALREADY_EXIST: {
    title: 'Não é possível criar mais planejamentos para esta safra',
    description:
      'Um dos seus planejamentos já foi aprovado para esta safra, não será possível criar novos planejamentos nem os enviar para aprovação',
  },
  INSUFFICIENT_FUNDS: {
    title: 'Você não tem saldo disponível',
    description:
      'O planejamento que voce tentou enviar tem um valor acima do seu saldo disponível, tente diminuir o valor ou contate o suporte',
  },
  MINIMUM_FUNDS_NOT_REACHED: {
    title: 'Valor do planejamento insuficiente',
    description:
      'O planejamento que voce tentou enviar tem um valor abaixo de 95% do seu saldo, aumente o valor do planejamento',
  },
  NOT_ENOUGHT_BALANCE: {
    title: 'Saldo insuficiente',
    description:
      'A ação que você está tentando criar possui um valor acima do seu saldo, reduza o valor da ação ou contate o suporte',
  },
};
export const WarningModal = ({ errorCode, onClose, ...restProps }: WarningModalProps) => (
  <Modal onClose={onClose} isCentered {...restProps}>
    <ModalOverlay />

    <ModalContent>
      <ModalHeader>
        <HStack w="full" align="flex-start" justify="space-between" mb="1.6rem">
          <WarningIcon />

          <ModalCloseButton />
        </HStack>

        <Text textStyle="caption1" lineHeight="2.2rem" maxW="37.3rem">
          {errors[errorCode]?.title ?? 'Erro desconhecido'}
        </Text>
      </ModalHeader>

      <ModalBody>
        <Text textStyle="caption3" color="text.secondary" lineHeight="2rem">
          {errors[errorCode]?.description ?? 'Por favor, contate o suporte.'}
        </Text>
      </ModalBody>

      <ModalFooter>
        <Button flex="1" size="sm" fontSize="1rem" onClick={onClose}>
          Fechar
        </Button>
      </ModalFooter>
    </ModalContent>
  </Modal>
);
