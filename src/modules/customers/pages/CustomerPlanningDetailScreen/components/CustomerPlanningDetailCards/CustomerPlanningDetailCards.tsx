import { Flex, Grid, GridItem, HStack, Skeleton, Text, VStack } from '@chakra-ui/react';
import { useRouter } from 'next/router';

import { useGetFarmer } from '@/api';
import { Balance } from '@/components';
import { Mask } from '@/utils';

export const CustomerPlanningDetailCards = () => {
  const { query } = useRouter();
  const customerId = Number(query.customer_id);
  const { data, isLoading, isFetching } = useGetFarmer(
    { farmerId: customerId },
    { enabled: Boolean(customerId) },
  );
  const farmer = data?.data[0];
  return (
    <Grid
      as="section"
      w="full"
      gridTemplateColumns={{ base: 'repeat(1,1fr)', '3xl': 'repeat(2,1fr)' }}
      gridTemplateRows="repeat(1,1fr)"
      gap="1rem"
    >
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
          <VStack align="flex-start" w="25.4rem">
            <Text textStyle="footnote" color="text.footnote">
              Nome
            </Text>
            {isLoading || isFetching ? (
              <Skeleton noOfLines={1} h="3rem" w="23rem" />
            ) : (
              <Text textStyle="h4">{farmer?.users_permissions_user?.username}</Text>
            )}
          </VStack>
          <VStack align="flex-start" w="25.4rem">
            <Text textStyle="footnote" color="text.footnote">
              CNPJ
            </Text>
            {isLoading || isFetching ? (
              <Skeleton noOfLines={1} h="3rem" w="23rem" />
            ) : (
              <Text textStyle="h4">{Mask.formatCNPJ(farmer?.company_identifier ?? '')}</Text>
            )}
          </VStack>
        </Flex>
      </GridItem>
      <GridItem>
        <Balance.Container h="100%" farmerId={customerId}>
          <Balance.Label>Saldo do cliente</Balance.Label>
          <Balance.Value />
          <HStack w="full" align="center" justify="space-between">
            <Balance.ExpirationDate />
          </HStack>
        </Balance.Container>
      </GridItem>
    </Grid>
  );
};
