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

import { HistoricItemSummary } from './HistoricItemSummary';
import { HistoricItemTable } from './HistoricItemTable';

type HistoricItemProps = {
  actions: PlanningAction[];
};
export const HistoricItem = ({ actions }: HistoricItemProps) => {
  const planningTotalValue = actions.reduce((value, action) => {
    value += action.amountInCents ?? 0;
    return value;
  }, 0);

  return (
    <Box mx="7.2rem" mt="1.6rem" mb="3.6rem" boxShadow="datepicker" borderRadius="1.6rem">
      <Accordion border="none">
        <AccordionItem p="initial" boxShadow="none" border="none" borderBottomRadius="initial">
          {({ isExpanded }) => (
            <h2>
              <AccordionButton
                bgColor="surface.primary"
                px="2.4rem"
                pt="2rem"
                pb="2rem"
                borderTopRadius="full"
                borderBottomColor="opacity.black.0.12"
                _hover={{ bgColor: 'none' }}
              >
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
              <AccordionPanel bgColor="surface.primary">
                <HistoricItemTable actions={actions} />
              </AccordionPanel>
            </h2>
          )}
        </AccordionItem>
      </Accordion>
      <HistoricItemSummary planningTotalValue={planningTotalValue} />
    </Box>
  );
};
