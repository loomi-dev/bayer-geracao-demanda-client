import { Divider, Flex, Text } from '@chakra-ui/react';

import { Trousseau } from '@/components';
import { TROUSSEAU_LIST } from '@/config';

import { TrousseauDownloadOption } from './TrousseauDownloadOption';
import { TrousseauRecomendations } from './TrousseauRecomendations';

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
    <Trousseau.Container>
      <Trousseau.Slider trousseauList={TROUSSEAU_LIST}>
        {({ label, image }) => (
          <>
            <Trousseau.Image src={image} />
            <Trousseau.Label>{label}</Trousseau.Label>
          </>
        )}
      </Trousseau.Slider>
    </Trousseau.Container>
    <Flex gap="0.8rem" mt="2rem" flexDir="column">
      <TrousseauDownloadOption />
      <TrousseauDownloadOption />
      <TrousseauDownloadOption />
      <TrousseauDownloadOption />
    </Flex>

    <TrousseauRecomendations />
  </Flex>
);
