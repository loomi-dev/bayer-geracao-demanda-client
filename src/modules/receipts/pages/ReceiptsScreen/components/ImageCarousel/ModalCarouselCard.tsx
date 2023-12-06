import { IconButton, Modal, ModalBody, ModalContent, ModalOverlay } from '@chakra-ui/react';

import { AbsoluteNextImage, Close2Icon } from '@/components';

type ModalCarouselCardProps = {
  image: string;
  isOpen: boolean;
  onClose: () => void;
};

export const ModalCarouselCard = ({ image, isOpen, onClose }: ModalCarouselCardProps) => (
  <Modal onClose={onClose} isOpen={isOpen} isCentered>
    <ModalOverlay />
    <ModalContent
      p={0}
      borderRadius="0.8rem"
      maxW="unset"
      w="126.3rem"
      maxH="unset"
      h="85rem"
      overflow="hidden"
    >
      <ModalBody p={0} boxSize="100%">
        <IconButton
          aria-label="close-icon"
          h="unset"
          bg="none"
          p={0}
          position="absolute"
          zIndex={10}
          right="1.6rem"
          top="1.6rem"
          icon={<Close2Icon />}
          onClick={onClose}
        />
        <AbsoluteNextImage
          containerProps={{
            position: 'relative',
            boxSize: '100%',
          }}
          src={image}
          alt="image"
          priority
          style={{ objectFit: 'cover' }}
          fill
        />
      </ModalBody>
    </ModalContent>
  </Modal>
);
