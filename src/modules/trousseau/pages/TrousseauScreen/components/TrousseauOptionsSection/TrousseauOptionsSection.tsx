import { Divider, Flex, Text } from '@chakra-ui/react';

import { useGetTrousseau } from '@/api';
import { Trousseau } from '@/components';

import { TrousseauDownloadOption } from './TrousseauDownloadOption';
import { TrousseauRecomendations } from './TrousseauRecomendations';

export const TrousseauOptionsSection = () => {
  const { data } = useGetTrousseau();

  const material_items = data?.data.material_items;
  const catalogs = data?.data.catalogs;
  return (
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
        <Trousseau.Slider trousseauList={material_items}>
          {({ name, url }) => (
            <>
              <Trousseau.Image src={url} />
              <Trousseau.Label>{name}</Trousseau.Label>
            </>
          )}
        </Trousseau.Slider>
      </Trousseau.Container>
      <Flex gap="0.8rem" mt="2rem" flexDir="column">
        {catalogs?.map((catalog) => (
          <TrousseauDownloadOption
            key={catalog.id}
            name={catalog.name}
            description={catalog.description}
            imageUrl={catalog.photo?.url}
            downloadUrl={catalog.document?.url}
          />
        ))}
      </Flex>

      <TrousseauRecomendations />
    </Flex>
  );
};
