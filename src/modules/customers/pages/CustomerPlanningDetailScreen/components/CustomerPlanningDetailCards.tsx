import { Flex, Grid, GridItem, HStack, Text, VStack } from '@chakra-ui/react';

import { Balance } from '@/components';

export const CustomerPlanningDetailCards = () => (
  <Grid
    as="section"
    w="full"
    gridTemplateColumns="repeat(2,1fr)"
    gridTemplateRows="repeat(1,1fr)"
    gap="1rem"
  >
    <GridItem>
      <Balance.Container h="100%" farmerId={1}>
        <Balance.Label>Saldo do cliente</Balance.Label>
        <Balance.Value />
        <HStack w="full" align="center" justify="space-between">
          <Balance.ExpirationDate />
        </HStack>
      </Balance.Container>
    </GridItem>
    <GridItem>
      <Flex
        justify="space-between"
        layerStyle="card"
        py="1.6rem"
        px="2.6rem"
        wrap="wrap"
        gap="1.6rem"
        h="100%"
      >
        <VStack align="flex-start" w="34.4rem">
          <Text textStyle="footnote" color="text.footnote">
            Nome
          </Text>
          <Text textStyle="h4">Yan Anderso Conceição</Text>
        </VStack>
        <VStack align="flex-start" w="34.4rem">
          <Text textStyle="footnote" color="text.footnote">
            CNPJ
          </Text>
          <Text textStyle="h4">057.035.995.39</Text>
        </VStack>
      </Flex>
    </GridItem>
  </Grid>
);
