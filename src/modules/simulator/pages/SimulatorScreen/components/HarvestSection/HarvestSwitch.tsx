import { Box, Button, Flex, Text, VStack } from '@chakra-ui/react';

import { useSimulatorStore } from '../../stores';

export const HarvestSwitch = () => {
  const [isBayerSellingOnly, setIsBayerSeelingOnly] = useSimulatorStore((state) => [
    state.isBayerSellingOnly,
    state.setIsBayerSellingOnly,
  ]);
  return (
    <VStack align="flex-start" spacing="0.8rem">
      <Text textStyle="action3" maxW="21rem" lineHeight="1.8rem" textTransform="uppercase">
        Irá vender apenas Bayer na safra 24/25?
      </Text>

      <Flex
        align="center"
        justify="space-between"
        gap="1rem"
        borderRadius="9rem"
        h="5rem"
        w="20rem"
        px="3.8rem"
        bgColor="greyscale.275"
        position="relative"
      >
        <Button zIndex={1} variant="unstyled" onClick={() => setIsBayerSeelingOnly(true)}>
          <Text
            transitionDuration="1s"
            textColor={isBayerSellingOnly ? 'surface.primary' : 'greyscale.650'}
            fontSize="2rem"
            fontWeight="normal"
          >
            Sim
          </Text>
        </Button>
        <Box
          position="absolute"
          bgColor="surface.brand"
          borderRadius="9rem"
          w="11rem"
          h="4rem"
          left={2}
          transform={isBayerSellingOnly ? '' : 'translateX(5em)'}
          transitionDuration="1s"
        />
        <Button zIndex={1} variant="unstyled" onClick={() => setIsBayerSeelingOnly(false)}>
          <Text
            transitionDuration="1s"
            textColor={!isBayerSellingOnly ? 'surface.primary' : 'greyscale.650'}
            fontWeight="normal"
            fontSize="2rem"
          >
            Nao
          </Text>
        </Button>
      </Flex>
    </VStack>
  );
};
