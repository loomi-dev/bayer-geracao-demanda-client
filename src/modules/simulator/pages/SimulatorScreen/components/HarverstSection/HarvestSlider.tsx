import {
  HStack,
  Slider,
  SliderFilledTrack,
  SliderThumb,
  SliderTrack,
  Text,
  VStack,
} from '@chakra-ui/react';
import { useState } from 'react';

export const HarverstSlider = () => {
  const [step, setStep] = useState(0);
  return (
    <VStack w="33.6rem" align="flex-start" justify="space-between" h="9.8rem" gap="1rem">
      <Text textStyle="action3" w="20rem" textTransform="uppercase">
        plantabilidade esperada
      </Text>
      <HStack w="100%" gap="2rem">
        <Slider value={step} onChange={setStep} min={0} max={1} step={0.1}>
          <SliderTrack h="0.9rem" borderRadius="2rem" bgColor="greyscale.450">
            <SliderFilledTrack bgColor="surface.brand" />
          </SliderTrack>
          <SliderThumb boxSize="2rem" />
        </Slider>
        <Text w="5rem" textAlign="center" fontSize="2.9rem">
          {step}
        </Text>
      </HStack>
    </VStack>
  );
};
