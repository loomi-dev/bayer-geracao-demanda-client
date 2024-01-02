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
  title: string;
  description: string;
} & Omit<ModalProps, 'children'>;

export const WarningModal = ({ title, description, onClose, ...restProps }: WarningModalProps) => (
  <Modal onClose={onClose} isCentered {...restProps}>
    <ModalOverlay />

    <ModalContent>
      <ModalHeader>
        <HStack w="full" align="flex-start" justify="space-between" mb="1.6rem">
          <WarningIcon />

          <ModalCloseButton />
        </HStack>

        <Text textStyle="caption1" lineHeight="2.2rem" maxW="37.3rem">
          {title}
        </Text>
      </ModalHeader>

      <ModalBody>
        <Text textStyle="caption3" color="text.secondary" lineHeight="2rem">
          {description}
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
