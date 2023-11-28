import { Box, Flex } from '@chakra-ui/react';
import { ReactNode } from 'react';

import { Sidebar, NotificationBar } from '@/components';
import { LAYOUT_NOTIFICATION_BAR_WIDTH, LAYOUT_SIDEBAR_WIDTH } from '@/config';

type LayoutWithNotificationsProps = {
  children: ReactNode;
};

export const LayoutWithNotifications = ({ children }: LayoutWithNotificationsProps) => (
  <Flex h="100%">
    <Sidebar />
    <Box
      w={`calc(100% - (${LAYOUT_NOTIFICATION_BAR_WIDTH} + ${LAYOUT_SIDEBAR_WIDTH}))`}
      h="100%"
      ml={LAYOUT_SIDEBAR_WIDTH}
      background="linear-gradient(110deg, #D9D9D9 11.1%, rgba(217, 217, 217, 0.00) 46.44%)"
      pt="5rem"
      pb="4rem"
      pl="5.5rem"
      pr="7rem"
    >
      {children}
    </Box>
    <NotificationBar />
  </Flex>
);
