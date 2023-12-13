import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  HStack,
  Text,
} from '@chakra-ui/react';

import { CircleIcon, DocumentIcon } from '@/components';

import { AccordionIcon } from './AccordionIcon';

export const RecommendationsAccordion = () => (
  <Accordion allowToggle defaultIndex={[0]}>
    <AccordionItem>
      {({ isExpanded }) => (
        <>
          <h2>
            <AccordionButton borderColor="opacity.black.0.20" _hover={{}}>
              <Text textStyle="caption1" color="red.danger_50">
                Nossas recomendações
              </Text>

              <AccordionIcon isExpanded={isExpanded} />
            </AccordionButton>
          </h2>

          <AccordionPanel>
            <Text textStyle="body1" color="text.footnote">
              Compreenda as necessidades dos agricultores: Antes de iniciar qualquer ação, é
              fundamental realizar uma pesquisa minuciosa para entender as necessidades, desafios e
              objetivos dos agricultores na região em que você atua. Isso ajudará a personalizar a
              ação de acordo com suas demandas.
              <br /> <br />
              1. Escolha o momento certo: Leve em consideração as estações do ano e os ciclos de
              cultivo para planejar a ação. Certifique-se de que as atividades estejam alinhadas com
              os momentos mais relevantes do calendário agrícola.
              <br /> <br />
              2. Educação e treinamento: Ofereça sessões de treinamento e workshops para os
              agricultores. Isso pode incluir o uso adequado de produtos agrícolas, boas práticas
              agrícolas, manuseio de pragas e doenças, entre outros tópicos relevantes.
              <br /> <br />
              3. Demonstração de produtos: Realize demonstrações práticas de produtos e tecnologias
              agrícolas. Mostre como essas inovações podem beneficiar a produtividade e a qualidade
              das colheitas.
            </Text>

            <Box mt="4rem">
              <Text textStyle="action4" color="text.footnote" textTransform="uppercase">
                Documentos de Apoio
              </Text>

              <HStack mt="1.2rem" spacing="1.2rem">
                <Button
                  variant="fourth"
                  size="lg"
                  p="1rem"
                  w="19rem"
                  leftIcon={
                    <CircleIcon boxSize="4rem">
                      <DocumentIcon />
                    </CircleIcon>
                  }
                >
                  <Text as="span" textStyle="body2" maxW="12rem" whiteSpace="initial" align="left">
                    Nome do documento
                  </Text>
                </Button>

                <Button
                  variant="fourth"
                  size="lg"
                  p="1rem"
                  w="19rem"
                  leftIcon={
                    <CircleIcon boxSize="4rem">
                      <DocumentIcon />
                    </CircleIcon>
                  }
                >
                  <Text as="span" textStyle="body2" maxW="12rem" whiteSpace="initial" align="left">
                    Nome do documento
                  </Text>
                </Button>
              </HStack>
            </Box>
          </AccordionPanel>
        </>
      )}
    </AccordionItem>
  </Accordion>
);
