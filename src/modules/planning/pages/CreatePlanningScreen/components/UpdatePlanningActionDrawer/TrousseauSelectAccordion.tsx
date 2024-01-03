import { Accordion, AccordionItem, AccordionButton, AccordionPanel, Text } from '@chakra-ui/react';

import { useGetTrousseau } from '@/api';
import { Trousseau } from '@/components';

import { AccordionIcon } from './AccordionIcon';

export const TrousseauSelectAccordion = () => {
  const { data } = useGetTrousseau({ supplierIds: [] });

  const material_items = data?.data.material_items;

  return (
    <Accordion allowToggle>
      <AccordionItem>
        {({ isExpanded }) => (
          <>
            <h2>
              <AccordionButton borderColor="opacity.black.0.20" _hover={{}}>
                <Text textStyle="caption1" color="red.danger_50">
                  Tipos de enxoval
                </Text>

                <AccordionIcon isExpanded={isExpanded} />
              </AccordionButton>
            </h2>

            <AccordionPanel display="flex" flexDirection="column" gap="2.4rem">
              <Trousseau.Container>
                <Trousseau.Slider
                  trousseauList={material_items}
                  swiperSlideProps={{ style: { cursor: 'pointer' } }}
                >
                  {({ name, url }) => (
                    <>
                      <Trousseau.Image src={url} />
                      <Trousseau.Label mt="1.2rem">{name}</Trousseau.Label>
                    </>
                  )}
                </Trousseau.Slider>
              </Trousseau.Container>
            </AccordionPanel>
          </>
        )}
      </AccordionItem>
    </Accordion>
  );
};
