import { Box, Text, useDisclosure } from '@chakra-ui/react';
import dayjs from 'dayjs';

import { AbsoluteNextImage } from '@/components';

import { ModalCarouselCard } from './ModalCarouselCard';

export type CarouselCardProps = {
  id: string | number;
  url: string;
  date: string;
};

export const CarouselCard = ({ date, url }: CarouselCardProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const dateFormatted = dayjs(date).format('DD [de] MMM, YYYY');

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
        src={url}
        alt="carousel-card"
        priority
        style={{ objectFit: 'contain' }}
        fill
      />
      <Text textStyle="footnote-bold-2" color="greyscale.700" mt="0.5rem">
        {dateFormatted}
      </Text>
      <ModalCarouselCard image={url} isOpen={isOpen} onClose={onClose} />
    </Box>
  );
};
