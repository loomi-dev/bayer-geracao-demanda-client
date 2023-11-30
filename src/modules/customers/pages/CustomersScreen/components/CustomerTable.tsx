import { Flex, HStack, Text } from '@chakra-ui/react';

import { DistrictFilter, PartnerFilter, RegionFilter, SearchIcon, TextInput } from '@/components';

export const CustomerTable = () => (
  <Flex flexDir="column" w="100%" gap="2.5rem" h="100%">
    <Text textStyle="h4">Planejamentos</Text>
    <Flex align="center" justify="space-between" px="1.6rem" w="100%">
      <Text textStyle="h5">Filtros</Text>
      <HStack gap="1.2rem">
        <PartnerFilter options={[]} />
        <DistrictFilter options={[]} />
        <RegionFilter options={[]} />
        <TextInput
          w="32rem"
          leftIcon={<SearchIcon />}
          bgColor="surface.primary"
          placeholder="Pesquisar por Nome ou CNPJ"
        />
      </HStack>
    </Flex>
  </Flex>
);
