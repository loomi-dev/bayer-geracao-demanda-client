import { HStack, VStack } from '@chakra-ui/react';

import { HarvestInformationItem } from './HarvestInformationItem';
import { HarvestSlider } from './HarvestSlider';
import { HarvestSwitch } from './HarvestSwitch';
import { Pipe } from './Pipe';

export const HarvestSection = () => (
  <VStack layerStyle="card" py="2.4rem" px="4.4rem" w="100%" spacing="5rem" align="flex-start">
    <HStack w="100%" spacing="3.25rem">
      <HarvestInformationItem
        label="quantos sacos bayer terão na safra 2024/2025?"
        value={100000000}
      />
      <Pipe />
      <HarvestInformationItem label="Sacos I2x?" value={100000000} />
      <Pipe />
      <HarvestInformationItem label="Sacos I2x?" value={100000000} />
    </HStack>

    <HStack w="100%" spacing="10rem">
      <HarvestSwitch />
      <Pipe />
      <HarvestSlider />
    </HStack>
  </VStack>
);
