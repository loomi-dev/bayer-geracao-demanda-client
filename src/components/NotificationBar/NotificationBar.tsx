import { Divider, Flex, HStack } from '@chakra-ui/react';

import { BellIcon } from '../icons';

export const NotificationBar = () => (
  <Flex
    w="35.8rem"
    h="100%"
    position="fixed"
    background="linear-gradient(260deg, #D9D9D9 23.87%, rgba(217, 217, 217, 0.00) 57.77%)"
    right={0}
    pl="2.8rem"
    pr="5.2rem"
    pt="5rem"
    pb="2rem"
  >
    <Divider
      orientation="vertical"
      h="inherit"
      opacity="0.4"
      position="absolute"
      bg="red"
      left="-3.4rem"
      top="0rem"
    />
    <Flex flexDir="column">
      <HStack>
        <Flex
          justify="center"
          align="center"
          rounded="full"
          bgColor="green.600"
          w="5.1rem"
          h="5.1rem"
        >
          <BellIcon />
        </Flex>
      </HStack>
    </Flex>
  </Flex>
);
