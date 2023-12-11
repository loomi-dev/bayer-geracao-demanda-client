import {
  Accordion,
  AccordionItem,
  AccordionButton,
  VStack,
  HStack,
  AccordionPanel,
  Box,
  Text,
  Grid,
  GridItem,
} from '@chakra-ui/react';

import { ChevronCircleUp, ChevronCircleDown } from '../icons';

import { HistoricPlanningActionRow } from './HistoricPlanningActionRow';

type HistoricAccordionProps = {
  planningActions: PlanningAction[];
};

export const HistoricAccordion = ({ planningActions }: HistoricAccordionProps) => (
  <Accordion border="none" w="full" allowToggle>
    <AccordionItem p="initial" boxShadow="none" borderTopRadius="1.6rem" border="none" mb="0">
      {({ isExpanded }) => (
        <>
          <h2>
            <AccordionButton
              p={isExpanded ? '2.3rem 2.4rem' : '1.45rem 2.4rem'}
              transition="all 0.2s"
              borderBottomColor="opacity.black.0.12"
              _hover={{ bgColor: 'none' }}
            >
              <VStack align="flex-start" spacing="0.8rem">
                <Text fontSize="1rem" fontWeight="bold" color="greyscale.700">
                  Detalhe do planejamento
                </Text>

                <HStack spacing="1.2rem">
                  <Text textStyle="action4" color="greyscale.700" lineHeight="2rem">
                    25 Março 2024
                  </Text>
                  <Box rounded="full" bgColor="greyscale.450" boxSize="0.4rem" />
                  <Text textStyle="action4" color="greyscale.700" lineHeight="2rem">
                    25 janeiro 2025
                  </Text>
                </HStack>
              </VStack>

              <HStack align="center" spacing="1rem" color="text.primary">
                <Text fontSize="1rem" fontWeight="bold" color="text.brand" lineHeight="0">
                  Ver detalhes
                </Text>

                {isExpanded ? <ChevronCircleUp /> : <ChevronCircleDown />}
              </HStack>
            </AccordionButton>
          </h2>

          <AccordionPanel
            p="1.6rem 2.4rem 4rem"
            borderBottom="1px solid"
            borderColor="opacity.gray.1.40"
          >
            <Grid
              w="full"
              gap="2rem"
              templateColumns="repeat(1, 1fr)"
              templateRows="repeat(1, 1fr)"
            >
              {planningActions.map(({ id, ...actionProps }) => (
                <GridItem key={id}>
                  <HistoricPlanningActionRow {...actionProps} />
                </GridItem>
              ))}
            </Grid>
          </AccordionPanel>
        </>
      )}
    </AccordionItem>
  </Accordion>
);
