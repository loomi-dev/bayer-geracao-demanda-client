import { Flex, Grid, GridItem, Text } from '@chakra-ui/react';

import { centsToCompactValue, formatPrice } from '@/utils';

import { ResultCard } from './ResultCard';

export const ResultsSection = () => (
  <Flex
    layerStyle="card"
    px="4.4rem"
    py="2.4rem"
    border="1px solid"
    borderColor="surface.primary"
    flexDir="column"
    w="100%"
    bgColor="surface.primary"
  >
    <Text textStyle="action2" color="surface.brand">
      Resultado
    </Text>
    <Text textStyle="action2">
      Parabéns! Com esses números você estaria na faixa <strong>com 40%!</strong>
    </Text>
    <Grid
      as="section"
      mt="3.2rem"
      gap="1.6rem"
      gridTemplateRows="repeat(2,1fr)"
      gridTemplateColumns="repeat(3,1fr)"
    >
      <GridItem>
        <ResultCard label="Penetração">{100}%</ResultCard>
      </GridItem>
      <GridItem>
        <ResultCard label="Rebate">R$ {formatPrice(1000000)}</ResultCard>
      </GridItem>
      <GridItem>
        <ResultCard label="gd final">R$ {formatPrice(10000000)}</ResultCard>
      </GridItem>
      <GridItem>
        <ResultCard label="incentivo biotec">R$ {formatPrice(1000000)} </ResultCard>
      </GridItem>
      <GridItem colSpan={2} rowSpan={2}>
        <ResultCard
          label="incentivos totais"
          bgColor="greyscale.950"
          flexDir="row"
          align="center"
          w="100%"
          color="surface.primary"
          valueTextProps={{ textStyle: 'h3', textTransform: 'uppercase' }}
        >
          R$ {centsToCompactValue(1000000)}
        </ResultCard>
      </GridItem>
    </Grid>
  </Flex>
);
