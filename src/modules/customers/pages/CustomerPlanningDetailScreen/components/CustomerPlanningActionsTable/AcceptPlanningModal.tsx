import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  Text,
  useDisclosure,
} from '@chakra-ui/react';

export const AcceptPlanningModal = () => {
  const { isOpen, onClose, onOpen } = useDisclosure();
  return (
    <>
      <Button w="14.5rem" onClick={onOpen} fontSize="1.2rem">
        Autorizar planejamento
      </Button>
      <Modal isCentered isOpen={isOpen} onClose={onClose}>
        <ModalContent>
          <ModalCloseButton />
          <ModalBody>
            <Text textStyle="caption2">Deseja autorizar o planejamento?</Text>
            <Button onClick={onClose}>Não</Button>
            <Button>Sim</Button>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
