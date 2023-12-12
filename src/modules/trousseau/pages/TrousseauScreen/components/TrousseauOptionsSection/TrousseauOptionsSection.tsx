import { Box, Divider, Flex, Text } from '@chakra-ui/react';
import { Swiper, SwiperSlide } from 'swiper/react';

import { TrousseauDownloadOption } from './TrousseauDownloadOption';
import { TrousseauImageCard } from './TrousseauImageCard';
import { TrousseauRecomendations } from './TrousseauRecomendations';

import 'swiper/css';

export const TrousseauOptionsSection = () => (
  <Flex
    flexDir="column"
    w="100%"
    layerStyle="card"
    gap="1.2rem"
    bgColor="surface.primary"
    p="2.4rem"
  >
    <Text textStyle="caption1" color="red.danger_90">
      Tipos de enxoval
    </Text>
    <Divider w="full" borderColor="opacity.black.0.20" />
    <Box>
      <Swiper slidesPerView="auto" spaceBetween={20}>
        <SwiperSlide style={{ width: 'fit-content' }}>
          <TrousseauImageCard label="Chapeu Bayer" />
        </SwiperSlide>
        <SwiperSlide style={{ width: 'fit-content' }}>
          <TrousseauImageCard label="Chapeu Bayer" />
        </SwiperSlide>
        <SwiperSlide style={{ width: 'fit-content' }}>
          <TrousseauImageCard label="Chapeu Bayer" />
        </SwiperSlide>
        <SwiperSlide style={{ width: 'fit-content' }}>
          <TrousseauImageCard label="Chapeu Bayer" />
        </SwiperSlide>
        <SwiperSlide style={{ width: 'fit-content' }}>
          <TrousseauImageCard label="Chapeu Bayer" />
        </SwiperSlide>
        <SwiperSlide style={{ width: 'fit-content' }}>
          <TrousseauImageCard label="Chapeu Bayer" />
        </SwiperSlide>
      </Swiper>
    </Box>
    <Flex gap="0.8rem" mt="2rem" flexDir="column">
      <TrousseauDownloadOption />
      <TrousseauDownloadOption />
      <TrousseauDownloadOption />
      <TrousseauDownloadOption />
    </Flex>

    <TrousseauRecomendations />
  </Flex>
);
