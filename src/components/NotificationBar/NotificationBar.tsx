import { Divider, Flex, HStack, Text } from '@chakra-ui/react';

import { CircleIcon } from '../CircleIcon';
import { BellIcon } from '../icons';

import { NotificationCard } from './components';

export const NotificationBar = () => (
  <Flex
    w="35.8rem"
    h="100%"
    position="fixed"
    background="linear-gradient(250deg, #D9D9D9 23.87%, rgba(217, 217, 217, 0.00) 57.77%)"
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
