import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  Box,
  HStack,
  Text,
  VStack,
} from '@chakra-ui/react';

import { ChevronCircleDown, ChevronCircleUp } from '@/components';

import { DetailTable } from './DetailTable';

export const PlanningDetail = () => (
  <Accordion px="7.2rem" py="1.6rem">
    <AccordionItem p="initial" border="none">
      {({ isExpanded }) => (
        <h2>
          <AccordionButton px="2.4rem" pt="2rem" pb="2rem">
            <VStack align="flex-start">
              <Text textStyle="footnote-small-bold" color="greyscale.700">
                Detalhe do planejamento
              </Text>
              <HStack gap="1.2rem">
                <Text fontSize="1.2rem" color="greyscale.700">
                  25 Março 2024
                </Text>
                <Box rounded="full" bgColor="greyscale.450" boxSize="0.4rem" />
                <Text fontSize="1.2rem" color="greyscale.700">
                  25 janeiro 2025
                </Text>
              </HStack>
            </VStack>

            <HStack align="center" gap="1.6rem">
              <Text mb="0.2rem" textStyle="footnote-small-bold" color="text.brand">
                Ver detalhes
              </Text>
              {isExpanded ? (
                <ChevronCircleUp color="#212121" />
              ) : (
                <ChevronCircleDown color="#212121" />
              )}
            </HStack>
          </AccordionButton>
          <AccordionPanel>
            <DetailTable />
          </AccordionPanel>
        </h2>
      )}
    </AccordionItem>
  </Accordion>
);
