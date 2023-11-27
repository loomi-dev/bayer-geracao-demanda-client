import { Box, Flex } from '@chakra-ui/react';
import { ReactNode } from 'react';

import { Sidebar, NotificationBar } from '@/components';

type LayoutWithNotificationsProps = {
  children: ReactNode;
};
export const LayoutWithNotifications = ({ children }: LayoutWithNotificationsProps) => (
  <Flex justify="space-between">
    <Sidebar />
    <Box
      w="100%"
      ml="28.7rem"
      bgColor="greyscale.200"
      background="linear-gradient(110deg, #D9D9D9 11.1%, rgba(217, 217, 217, 0.00) 46.44%)"
    >
      {children}
    </Box>
    <NotificationBar />
  </Flex>
);
