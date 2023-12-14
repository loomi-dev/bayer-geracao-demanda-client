import { Skeleton } from '@chakra-ui/react';
import { Swiper, SwiperSlide } from 'swiper/react';
export const TrousseauSliderSkeleton = () => (
  <Swiper slidesPerView="auto" spaceBetween={20}>
    {Array.from({ length: 6 }).map((_, index) => (
      <SwiperSlide key={index} style={{ width: 'fit-content', height: 'fit-content' }}>
        <Skeleton w="20rem" h="20rem" />
      </SwiperSlide>
    ))}
  </Swiper>
);
