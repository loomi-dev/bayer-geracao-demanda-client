import { Box, Text, useDisclosure } from '@chakra-ui/react';

import { AbsoluteNextImage } from '@/components';

import { ModalCarouselCard } from './ModalCarouselCard';

export type Image = {
  id: string | number;
  path: string;
  date: string;
};

export const CarouselCard = ({ date, path }: Image) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box>
      <AbsoluteNextImage
        containerProps={{
          position: 'relative',
          boxSize: '20rem',
          borderRadius: '2rem',
          overflow: 'hidden',
          onClick: onOpen,
          as: 'button',
        }}
        src={path}
        alt="carousel-card"
        priority
        style={{ objectFit: 'cover' }}
        fill
      />
      <Text textStyle="footnote-bold-2">{date}</Text>
      <ModalCarouselCard image={path} isOpen={isOpen} onClose={onClose} />
    </Box>
  );
};
