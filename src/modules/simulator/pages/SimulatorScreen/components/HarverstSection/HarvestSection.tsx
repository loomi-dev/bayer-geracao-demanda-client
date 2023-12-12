import { Flex, HStack } from '@chakra-ui/react';

import { HarverstInformationItem } from './HarvestInformationItem';
import { HarvestSwitch } from './HarvestSwitch';
import { Pipe } from './Pipe';

export const HarverstSection = () => (
  <Flex
    layerStyle="card"
    px="4.4rem"
    py="2.4rem"
    border="1px solid"
    borderColor="surface.primary"
    flexDir="column"
    w="100%"
    gap="5rem"
    bgColor="surface.primary"
    align="flex-start"
  >
    <HStack gap="3rem">
      <HarverstInformationItem
        label="quantos sacos bayer terão na safra 2024/2025?"
        value={100000000}
      />
      <Pipe />
      <HarverstInformationItem label="Sacos I2x?" value={100000000} />
      <Pipe />
      <HarverstInformationItem label="Sacos I2x?" value={100000000} />
    </HStack>
    <HarvestSwitch />
  </Flex>
);
