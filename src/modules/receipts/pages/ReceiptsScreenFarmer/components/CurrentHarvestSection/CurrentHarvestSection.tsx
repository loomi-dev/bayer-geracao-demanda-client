import { HStack, Skeleton, Text, VStack } from '@chakra-ui/react';

import { useGetHarvests } from '@/api';

export const CurrentHarvestSection = () => {
  const {
    data: dataGetHarvests,
    isLoading: isLoadingGetHarvests,
    isFetching: isFetchingGetHarvests,
  } = useGetHarvests();

  const harvestYear = dataGetHarvests?.data?.at(-1)?.year;
  const isLoadingHarvestYear = isLoadingGetHarvests || isFetchingGetHarvests;

  return (
    <VStack spacing="2rem" alignItems="flex-start">
      <HStack>
        <Text textStyle="h4">Planejamento</Text>
        {isLoadingHarvestYear ? (
          <Skeleton w="10rem" h="3rem" />
        ) : (
          <Text textStyle="h4">{harvestYear}</Text>
        )}
      </HStack>

      <HStack>
        <Text textStyle="body1" fontWeight="normal" lineHeight="2.4rem">
          Adicione abaixo os comprovantes para a safra
        </Text>
        {isLoadingHarvestYear ? (
          <Skeleton w="7rem" h="2rem" />
        ) : (
          <Text textStyle="body1" fontWeight="normal" lineHeight="2.4rem">
            {harvestYear}
          </Text>
        )}
      </HStack>
    </VStack>
  );
};
