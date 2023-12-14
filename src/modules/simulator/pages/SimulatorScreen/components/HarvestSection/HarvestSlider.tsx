import {
  HStack,
  Slider,
  SliderFilledTrack,
  SliderThumb,
  SliderTrack,
  Text,
  VStack,
} from '@chakra-ui/react';
import debounce from 'lodash.debounce';

import { useSimulatorStore } from '../../stores';

export const HarvestSlider = () => {
  const [plantability, setPlantability] = useSimulatorStore((state) => [
    state.plantability,
    state.setPlantability,
  ]);

  const handleOnChange = debounce((value: number) => setPlantability(value), 300);

  return (
    <VStack align="flex-start" justify="space-between" spacing="3rem">
      <Text textStyle="action3" lineHeight="1.8rem" textTransform="uppercase">
        plantabilidade esperada
      </Text>

      <HStack w="33.6rem" gap="2rem">
        <Slider onChange={handleOnChange} min={0} max={2} step={0.1}>
          <SliderTrack h="0.9rem" borderRadius="2rem" bgColor="greyscale.450">
            <SliderFilledTrack bgColor="surface.brand" />
          </SliderTrack>
          <SliderThumb boxSize="2rem" />
        </Slider>
        <Text w="5rem" textAlign="center" fontSize="2.9rem">
          {plantability}
        </Text>
      </HStack>
    </VStack>
  );
};
