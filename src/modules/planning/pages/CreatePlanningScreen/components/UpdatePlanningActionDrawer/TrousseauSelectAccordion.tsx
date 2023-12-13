import { Accordion, AccordionItem, AccordionButton, AccordionPanel, Text } from '@chakra-ui/react';

import { Trousseau } from '@/components';
import { TROUSSEAU_LIST } from '@/config';

import { AccordionIcon } from './AccordionIcon';

export const TrousseauSelectAccordion = () => (
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
                trousseauList={TROUSSEAU_LIST}
                swiperSlideProps={{ style: { cursor: 'pointer' } }}
              >
                {({ label, image }) => (
                  <>
                    <Trousseau.Image src={image} />
                    <Trousseau.Label mt="1.2rem">{label}</Trousseau.Label>
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
