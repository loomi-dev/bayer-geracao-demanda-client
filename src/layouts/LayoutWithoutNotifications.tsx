import { Flex } from '@chakra-ui/react';
import { ReactNode } from 'react';

import { Sidebar } from '@/components';
import { LAYOUT_SIDEBAR_WIDTH } from '@/config';

type LayoutWithoutNotificationsProps = {
  children: ReactNode;
};
export const LayoutWithoutNotifications = ({ children }: LayoutWithoutNotificationsProps) => (
  <Flex minH="100%">
    <Sidebar />
    <Flex
      minH="100%"
      w={{
        lg: `calc(100% - ${LAYOUT_SIDEBAR_WIDTH['lg']})`,
        xl: `calc(100% - ${LAYOUT_SIDEBAR_WIDTH['xl']})`,
        '3xl': `calc(100% - ${LAYOUT_SIDEBAR_WIDTH['3xl']})`,
      }}
      h="100%"
      ml={LAYOUT_SIDEBAR_WIDTH}
      pt="5rem"
      pb="4rem"
      pl="5.9rem"
      pr="7.6rem"
      gap="5rem"
      align="flex-start"
      flexDir="column"
      background="linear-gradient(110deg, #D9D9D9 11.1%, rgba(217, 217, 217, 0.00) 46.44%)"
    >
      {children}
    </Flex>
  </Flex>
);
