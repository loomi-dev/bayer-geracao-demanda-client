import { Box, Button, Flex, Text, VStack } from '@chakra-ui/react';
import { useState } from 'react';

export const HarvestSwitch = () => {
  const [switchOn, setSwitchOn] = useState(true);
  return (
    <VStack align="flex-start" gap="0.8rem">
      <Text textStyle="action3" textTransform="uppercase">
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
        <Button variant="unystiled" onClick={() => setSwitchOn(true)}>
          <Text
            transitionDuration="1s"
            textColor={switchOn ? 'surface.primary' : 'greyscale.650'}
            zIndex={1}
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
          transform={switchOn ? '' : 'translateX(5em)'}
          transitionDuration="1s"
        />
        <Button variant="unystiled" onClick={() => setSwitchOn(false)}>
          <Text
            transitionDuration="1s"
            textColor={!switchOn ? 'surface.primary' : 'greyscale.650'}
            zIndex={1}
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
