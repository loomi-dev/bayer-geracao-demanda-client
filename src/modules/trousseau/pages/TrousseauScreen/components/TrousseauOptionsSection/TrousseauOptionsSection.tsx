import { Divider, Flex, Text } from '@chakra-ui/react';

import { Trousseau } from '@/components';

import { useTrousseauStore } from '../../stores';

import { TrousseauCatalogOption } from './TrousseauCatalogOption';
import { TrousseauCatalogSkeleton } from './TrousseauCatalogSkeleton';
import { TrousseauRecomendations } from './TrousseauRecomendations';

type TrousseauOptionsSectionProps = {
  materialItems?: TrousseauItem[];
  catalogs?: TrousseauCatalog[];
  isLoading: boolean;
};
export const TrousseauOptionsSection = ({
  materialItems = [],
  catalogs = [],
  isLoading,
}: TrousseauOptionsSectionProps) => {
  const [selectedTrousseau] = useTrousseauStore((state) => [state.selectedTrousseau]);
  const [setSelectedTrousseau, setSupplierIds] = useTrousseauStore((state) => [
    state.setSelectedTrousseau,
    state.setSupplierIds,
  ]);

  const handleSelectTrousseau = (value: string, suppliers: TrousseauSupplier[]) => {
    const isTrousseauAlreadySelected = value === selectedTrousseau;

    if (isTrousseauAlreadySelected) {
      resetSelect();
    } else {
      selectTrousseau(value, suppliers);
    }
  };

  const resetSelect = () => {
    setSelectedTrousseau('');
    setSupplierIds([]);
  };

  const selectTrousseau = (value: string, suppliers: TrousseauSupplier[]) => {
    setSelectedTrousseau(value);
    setSupplierIds(suppliers.map((supplier) => supplier.id));
  };
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
        Arquivos de enxoval
      </Text>
      <Divider w="full" borderColor="opacity.black.0.20" />
      <Trousseau.Container>
        {isLoading ? (
          <Trousseau.Skeleton />
        ) : (
          <Trousseau.Slider trousseauList={materialItems}>
            {({ name, url, suppliers }) => (
              <>
                <Trousseau.Image
                  onClick={() => handleSelectTrousseau(name, suppliers)}
                  border={selectedTrousseau === name ? '2px solid' : ''}
                  borderColor={selectedTrousseau === name ? 'surface.brand' : ''}
                  src={url}
                />
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
};
