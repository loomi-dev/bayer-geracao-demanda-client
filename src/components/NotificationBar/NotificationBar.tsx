import { Box, Flex, HStack, Text } from '@chakra-ui/react';

import { CircleIcon } from '../CircleIcon';
import { BellIcon } from '../icons';

import { NotificationCard } from './components';

export const NotificationBar = () => (
  <Flex
    w="35.8rem"
    h="100%"
    position="fixed"
    bg="transparent"
    right={0}
    pl="2.8rem"
    pr="5.2rem"
    pt="5rem"
    pb="2rem"
  >
    <Box
      w="1px"
      h="inherit"
      opacity="0.4"
      bgGradient="linear(to-t,rgba(174, 174, 174, 0.00) 9.13%, rgba(147, 147, 147, 0.88) 43.47%, rgba(174, 174, 174, 0.00) 81.67%)"
      position="absolute"
      left="-3.4rem"
      top="0rem"
    />
    <Flex w="100%" gap="5rem" flexDir="column">
      <HStack gap="1rem">
        <CircleIcon>
          <BellIcon />
        </CircleIcon>
        <Text textStyle="h3">Notificações</Text>
      </HStack>
      <NotificationCard />
    </Flex>
  </Flex>
);
