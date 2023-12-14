import { HStack, VStack } from '@chakra-ui/react';

import { useSimulatorStore } from '../../stores';

import { HarvestInformationItem } from './HarvestInformationItem';
import { HarvestSlider } from './HarvestSlider';
import { HarvestSwitch } from './HarvestSwitch';
import { Pipe } from './Pipe';

export const HarvestSection = () => {
  const [setBagsQuantity] = useSimulatorStore((state) => [state.setBagsQuantity]);
  const [setI2xBagsQuantity] = useSimulatorStore((state) => [state.setI2xBagsQuantity]);
  const [setXtdBagsQuantity] = useSimulatorStore((state) => [state.setXtdBagsQuantity]);

  return (
    <VStack layerStyle="card" py="2.4rem" px="4.4rem" w="100%" spacing="5rem" align="flex-start">
      <HStack w="100%" spacing="3.25rem">
        <HarvestInformationItem
          label="quantos sacos bayer terão na safra 2024/2025?"
          onChange={setBagsQuantity}
        />
        <Pipe />
        <HarvestInformationItem label="Sacos I2x?" onChange={setI2xBagsQuantity} />
        <Pipe />
        <HarvestInformationItem label="Sacos XTD?" onChange={setXtdBagsQuantity} />
      </HStack>

      <HStack w="100%" spacing="10rem">
        <HarvestSwitch />
        <Pipe />
        <HarvestSlider />
      </HStack>
    </VStack>
  );
};
