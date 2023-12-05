import {
  Button,
  Flex,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  Text,
  VStack,
  useDisclosure,
} from '@chakra-ui/react';

export const RefusePlanningModal = () => {
  const { isOpen, onClose, onOpen } = useDisclosure();
  return (
    <>
      <Button variant="fifth" w="14.5rem" onClick={onOpen} fontSize="1.2rem">
        Recusar planejamento
      </Button>
      <Modal size="2xl" isCentered isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent h="20rem">
          <ModalCloseButton />
          <ModalBody>
            <VStack h="100%" justify="center" gap="2rem">
              <Text textStyle="caption2">Deseja recusar o planejamento?</Text>
              <Flex gap="2rem">
                <Button w="10rem" size="sm" variant="fifth" onClick={onClose}>
                  Não
                </Button>
                <Button w="10rem" size="sm">
                  Sim
                </Button>
              </Flex>
            </VStack>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
