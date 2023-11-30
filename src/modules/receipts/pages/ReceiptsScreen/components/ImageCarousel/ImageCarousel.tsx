import { HStack } from '@chakra-ui/react';

import { CarouselCard, Image } from './CarouselCard';

type ImageCarouselProps = {
  images: Image[];
};
export const ImageCarousel = ({ images }: ImageCarouselProps) => (
  <HStack
    overflowX="auto"
    borderRadius="1.6rem"
    w="100%"
    bg="greyscale.330"
    p="0.8rem"
    spacing="0.8rem"
  >
    {images.map((image) => (
      <CarouselCard {...image} key={image.id} />
    ))}
  </HStack>
);
