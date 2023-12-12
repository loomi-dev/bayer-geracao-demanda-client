import {
  Button,
  ButtonProps,
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

import { WarningIcon } from '../icons';

type ModalDispatchProps = {
  title: string;
  description: string;
  onConfirm: () => void;
  confirmText?: string;
  confirmButtonProps?: ButtonProps;
  onCancel?: () => void;
  cancelText?: string;
  cancelButtonProps?: ButtonProps;
} & Omit<ModalProps, 'children'>;

export const ModalDispatch = ({
  title,
  description,
  onConfirm,
  confirmText = 'Excluir',
  confirmButtonProps,
  onCancel,
  cancelText = 'Cancelar',
  cancelButtonProps,
  onClose,
  ...restProps
}: ModalDispatchProps) => (
  <Modal isCentered onClose={onClose} {...restProps}>
    <ModalOverlay />

    <ModalContent>
      <ModalHeader>
        <HStack w="full" align="flex-start" justify="space-between" mb="1.6rem">
          <WarningIcon />

          <ModalCloseButton />
        </HStack>

        <Text textStyle="caption1" lineHeight="2.2rem">
          {title}
        </Text>
      </ModalHeader>
      <ModalBody>
        <Text textStyle="caption3" color="text.secondary" lineHeight="2rem">
          {description}
        </Text>
      </ModalBody>
      <ModalFooter>
        <Button
          variant="seventh"
          flex="1"
          onClick={onCancel ? onCancel : onClose}
          {...cancelButtonProps}
        >
          {cancelText}
        </Button>

        <Button flex="1" fontSize="1.4rem" onClick={onConfirm} {...confirmButtonProps}>
          {confirmText}
        </Button>
      </ModalFooter>
    </ModalContent>
  </Modal>
);
