import { Box, Flex, HStack, Text } from '@chakra-ui/react';

import { LAYOUT_NOTIFICATION_BAR_WIDTH } from '@/config';

import { CircleIcon } from '../CircleIcon';
import { BellIcon } from '../icons';

import { NotificationCard } from './components';

export const NotificationBar = () => (
  <Flex
    w={{
      lg: LAYOUT_NOTIFICATION_BAR_WIDTH['lg'],
      xl: LAYOUT_NOTIFICATION_BAR_WIDTH['xl'],
      '3xl': LAYOUT_NOTIFICATION_BAR_WIDTH['3xl'],
    }}
    h="100%"
    bg="transparent"
    position="fixed"
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
        <CircleIcon boxSize={{ lg: '4.5rem', xl: '5.1rem' }}>
          <BellIcon />
        </CircleIcon>
        <Text textStyle={{ lg: 'h4', xl: 'h3' }} fontWeight={{ lg: 'normal' }}>
          Notificações
        </Text>
      </HStack>
      <NotificationCard />
    </Flex>
  </Flex>
);
