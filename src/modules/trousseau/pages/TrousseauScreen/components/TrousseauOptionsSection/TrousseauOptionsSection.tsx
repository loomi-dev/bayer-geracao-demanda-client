import { Divider, Flex, Text } from '@chakra-ui/react';

import { Trousseau } from '@/components';

import { TrousseauCatalogOption } from './TrousseauCatalogOption';
import { TrousseauCatalogSkeleton } from './TrousseauCatalogSkeleton';
import { TrousseauRecomendations } from './TrousseauRecomendations';

type TrousseauOptionsSectionProps = {
  materialItems?: Trousseau['material_items'];
  catalogs?: Trousseau['catalogs'];
  isLoading: boolean;
};
export const TrousseauOptionsSection = ({
  materialItems = [],
  catalogs = [],
  isLoading,
}: TrousseauOptionsSectionProps) => (
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
      {isLoading ? (
        <Trousseau.Skeleton />
      ) : (
        <Trousseau.Slider trousseauList={materialItems}>
          {({ name, url }) => (
            <>
              <Trousseau.Image src={url} />
              <Trousseau.Label>{name}</Trousseau.Label>
            </>
          )}
        </Trousseau.Slider>
      )}
    </Trousseau.Container>
    <Flex gap="0.8rem" mt="2rem" flexDir="column">
      {isLoading ? (
        <TrousseauCatalogSkeleton />
      ) : (
        catalogs?.map((catalog) => (
          <TrousseauCatalogOption
            key={catalog.id}
            name={catalog.name}
            description={catalog.description}
            filename={catalog.document.name}
            imageUrl={catalog.photo?.url}
            downloadUrl={catalog.document?.url}
          />
        ))
      )}
    </Flex>

    <TrousseauRecomendations />
  </Flex>
);
