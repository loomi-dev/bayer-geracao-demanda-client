import { Flex, Grid, GridItem, Text } from '@chakra-ui/react';

import { formatValue, numberToCompactValue } from '@/utils';

import { useSimulatorStore } from '../../stores';
import {
  calculateBiotecIncentive,
  calculateFinalGenerationDemand,
  calculateRebound,
} from '../../utils';

import { ResultCard } from './ResultCard';

export const ResultsSection = () => {
  const [bagsQuantity, i2xBagsQuantity, xtdBagsQuantity, plantability, isBayerSellingOnly] =
    useSimulatorStore((state) => [
      state.bagsQuantity,
      state.i2xBagsQuantity,
      state.xtdBagsQuantity,
      state.plantability,
      state.isBayerSellingOnly,
    ]);

  const percentage = (i2xBagsQuantity + xtdBagsQuantity) / bagsQuantity;
  const rebound = calculateRebound(bagsQuantity, percentage);
  const finalGenerationValue = calculateFinalGenerationDemand(
    bagsQuantity,
    plantability,
    percentage,
  );
  const biotecIncentive = calculateBiotecIncentive(bagsQuantity, isBayerSellingOnly, percentage);
  const totalValue = biotecIncentive + finalGenerationValue + rebound;

  return (
    <Flex layerStyle="card" px="4.4rem" py="2.4rem" flexDir="column" w="100%">
      <Text textStyle="action2" color="surface.brand" lineHeight="1.8rem">
        Resultado
      </Text>
      <Text textStyle="action2" lineHeight="2.4rem" mt="0.8rem">
        Com esses números você estaria na faixa <strong>com {percentage * 100}%!</strong>
      </Text>

      <Grid
        as="section"
        mt="3.2rem"
        gap="1.6rem"
        gridTemplateRows="repeat(2,1fr)"
        gridTemplateColumns="repeat(3,1fr)"
      >
        <GridItem>
          <ResultCard label="Penetração">{percentage * 100}%</ResultCard>
        </GridItem>
        <GridItem>
          <ResultCard label="Rebate">R$ {formatValue(rebound)}</ResultCard>
        </GridItem>
        <GridItem>
          <ResultCard label="gd final">R$ {formatValue(finalGenerationValue)}</ResultCard>
        </GridItem>
        <GridItem>
          <ResultCard label="incentivo biotec">R$ {formatValue(biotecIncentive)} </ResultCard>
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
            R$ {numberToCompactValue(totalValue)}
          </ResultCard>
        </GridItem>
      </Grid>
    </Flex>
  );
};
